import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { ESLint } from 'eslint';
import config from '../index.js';

const cwd = fileURLToPath(new URL('./fixtures/', import.meta.url));

async function ruleIds(file) {
	const eslint = new ESLint({ cwd, overrideConfigFile: true, overrideConfig: config });
	const [result] = await eslint.lintFiles([file]);

	return [...new Set(result.messages.map((message) => message.ruleId))].sort();
}

test('a Prettier-formatted Vue 3 component passes', async () => {
	assert.deepEqual(await ruleIds('FormattedLink.vue'), []);
});

test('the Vue 3 rules and the nomeus rules report a broken component', async () => {
	const reported = await ruleIds('Broken.vue');

	for (const ruleId of [
		'default-case',
		'no-param-reassign',
		'padding-line-between-statements',
		'require-await',
		'vue/block-order',
		'vue/no-deprecated-destroyed-lifecycle',
		'vue/no-useless-v-bind',
		'vue/order-in-components',
		'vue/prefer-true-attribute-shorthand'
	]) {
		assert.ok(reported.includes(ruleId), `${ruleId} not reported; got ${reported.join(', ')}`);
	}
});
