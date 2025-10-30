"use strict";

import eslintPluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';


const nomeusRules = {
	'no-param-reassign': 'error',
	'require-await': 'error',
	'prefer-const': 'warn',
	'default-case': 'error',
	'no-empty-pattern': ['error', {
		allowObjectPatternsAsParameters: true
	}],
	'vue/require-default-prop': 'off',
	'vue/order-in-components': ['error', {
		'order': [
			'el', 'name', 'key', 'parent', 'functional', ['delimiters', 'comments'],
			['components', 'directives', 'filters'], 'extends', 'mixins',
			['provide', 'inject'], 'ROUTER_GUARDS', 'layout', 'middleware',
			'validate', 'scrollToTop', 'transition', 'loading', 'inheritAttrs',
			'model', ['props', 'propsData'], 'emits', 'slots', 'expose', 'setup',
			'asyncData', 'data', 'fetch', 'head', 'computed', 'watch', 'watchQuery',
			'methods', 'LIFECYCLE_HOOKS', ['template', 'render'], 'renderError'
		]
	}],
	'vue/html-closing-bracket-newline': ['error', {
		singleline: 'never',
		multiline: 'always'
	}],
	'vue/attributes-order': ['error', {
		order: [
			'CONDITIONALS', 'DEFINITION', 'LIST_RENDERING', 'RENDER_MODIFIERS',
			'OTHER_DIRECTIVES', 'TWO_WAY_BINDING', 'UNIQUE', 'CONTENT', 'GLOBAL',
			'OTHER_ATTR', 'EVENTS'
		],
		alphabetical: false
	}],
	'vue/block-order': ['error', {
		'order': ['script', 'template', 'style']
	}],
	'padding-line-between-statements': [
		'error', { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
		{
			'blankLine': 'always',
			'prev': '*',
			'next': ['if', 'while', 'for', 'switch', 'try']
		}
	]
};

export default [
	...eslintPluginVue.configs['flat/vue2-recommended'],
	{
		plugins: {
			vue: eslintPluginVue
		},
		rules: nomeusRules
	},
	eslintConfigPrettier
];