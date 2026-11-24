import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { ESLint } from 'eslint';
import { format } from 'prettier';
import nomeus, { createConfig } from '@oktopost/eslint-plugin-nomeus';
import prettierConfig from '@oktopost/eslint-plugin-nomeus/prettier.config.js';

const fixtures = fileURLToPath(new URL('./fixtures/', import.meta.url));
const eslint = new ESLint({ cwd: fixtures, overrideConfigFile: true, overrideConfig: nomeus });

async function lintFormatted(file) {
	const filePath = `${fixtures}${file}`;
	const source = await format(await readFile(filePath, 'utf8'), { ...prettierConfig, filepath: filePath });
	const [result] = await eslint.lintText(source, { filePath });

	return result.messages;
}

async function severities(file) {
	const [result] = await eslint.lintFiles([file]);

	return new Map(result.messages.map((message) => [message.ruleId, message.severity]));
}

function nomeusRules(config) {
	return config.find((entry) => entry.name === 'nomeus/rules').rules;
}

test('Prettier output of a valid Vue 3 component lints clean', async () => {
	assert.deepEqual(await lintFormatted('UserLink.vue'), []);
});

test('Prettier output of a valid module lints clean', async () => {
	assert.deepEqual(await lintFormatted('valid.js'), []);
});

test('a broken Vue 3 component reports the nomeus rules as errors', async () => {
	const reported = await severities('BrokenInput.vue');

	for (const ruleId of [
		'default-case',
		'no-param-reassign',
		'padding-line-between-statements',
		'require-await',
		'vue/block-order',
		'vue/no-deprecated-destroyed-lifecycle',
		'vue/no-useless-v-bind',
		'vue/order-in-components',
		'vue/prefer-true-attribute-shorthand',
	]) {
		assert.equal(reported.get(ruleId), 2, `${ruleId}: got ${[...reported].join(', ')}`);
	}
});

test('a broken module reports prefer-const as a warning', async () => {
	const reported = await severities('broken.js');

	assert.equal(reported.get('prefer-const'), 1);
	assert.equal(reported.get('padding-line-between-statements'), 2);
});

test('createConfig returns a copy that does not change the default export', () => {
	nomeusRules(createConfig())['default-case'] = 'off';

	assert.equal(nomeusRules(nomeus)['default-case'], 'error');
	assert.equal(nomeusRules(createConfig())['default-case'], 'error');
});

test('createConfig accepts only Vue 3', () => {
	assert.equal(createConfig(3).length, nomeus.length);
	assert.throws(() => createConfig(2), /supports Vue 3 only, got 2/);
});
