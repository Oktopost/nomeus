import eslintPluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

const VUE_VERSION = 3;

const nomeusRules = {
	'no-param-reassign': 'error',
	'require-await': 'error',
	'prefer-const': 'warn',
	'default-case': 'error',
	'vue/no-v-html': 'off',
	'no-empty-pattern': [
		'error',
		{
			allowObjectPatternsAsParameters: true,
		},
	],
	'vue/require-default-prop': 'off',
	'vue/prefer-true-attribute-shorthand': 'error',
	'vue/no-useless-v-bind': 'error',
	'vue/order-in-components': [
		'error',
		{
			order: [
				'el',
				'name',
				'key',
				'parent',
				'functional',
				['delimiters', 'comments'],
				['components', 'directives', 'filters'],
				'extends',
				'mixins',
				['provide', 'inject'],
				'ROUTER_GUARDS',
				'layout',
				'middleware',
				'validate',
				'scrollToTop',
				'transition',
				'loading',
				'inheritAttrs',
				'model',
				['props', 'propsData'],
				'emits',
				'slots',
				'expose',
				'setup',
				'asyncData',
				'data',
				'fetch',
				'head',
				'computed',
				'watch',
				'watchQuery',
				'methods',
				'LIFECYCLE_HOOKS',
				['template', 'render'],
				'renderError',
			],
		},
	],
	'vue/attributes-order': [
		'error',
		{
			order: [
				'CONDITIONALS',
				'DEFINITION',
				'LIST_RENDERING',
				'RENDER_MODIFIERS',
				'OTHER_DIRECTIVES',
				'TWO_WAY_BINDING',
				'UNIQUE',
				'CONTENT',
				'GLOBAL',
				'OTHER_ATTR',
				'EVENTS',
			],
			alphabetical: false,
		},
	],
	'vue/block-order': [
		'error',
		{
			order: ['script', 'template', 'style'],
		},
	],
	'padding-line-between-statements': [
		'error',
		{ blankLine: 'always', prev: '*', next: 'return' },
		{
			blankLine: 'always',
			prev: '*',
			next: ['if', 'while', 'for', 'switch', 'try'],
		},
	],
};

function copyConfig(config) {
	return config.rules ? { ...config, rules: structuredClone(config.rules) } : { ...config };
}

export function createConfig(vueVersion = VUE_VERSION) {
	if (vueVersion !== VUE_VERSION) {
		throw new Error(`@oktopost/eslint-plugin-nomeus supports Vue ${VUE_VERSION} only, got ${vueVersion}`);
	}

	return [
		...eslintPluginVue.configs['flat/recommended'].map(copyConfig),
		{ name: 'nomeus/rules', rules: structuredClone(nomeusRules) },
		copyConfig(eslintConfigPrettier),
	];
}

export default createConfig();
