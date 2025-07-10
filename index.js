"use strict";


const plugin = {
	rules: {
		quotes: ['error', 'single'],
		indent: ['error', 'tab', {
			SwitchCase: 1
		}],
		'no-param-reassign': 'error',
		'require-await': 'error',
		'prefer-const': 'warn',
		'default-case': 'error',
		'brace-style': ['error', 'allman', {
			allowSingleLine: true
		}],
		'object-curly-spacing': ['error', 'always'],
		'arrow-parens': ['error', 'as-needed'],
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': ['error', 'never'],
		'space-in-parens': ['error', 'never'],
		'no-multi-spaces': 'error',
		'space-infix-ops': 'error',
		'no-extra-semi': 'error',
		'semi': ['error', 'always'],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'if'
			},
			{
				blankLine: 'always',
				prev: '*',
				next: 'switch'
			},
			{
				blankLine: 'always',
				prev: '*',
				next: 'function'
			}
		],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
				mode: 'strict'
			}
		],
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true
			}
		],
		'array-element-newline': ['error', 'consistent'],
		'array-bracket-spacing': ['error', 'never'],
		'keyword-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'no-empty-pattern': [
			'error',
			{
				allowObjectPatternsAsParameters: true
			}],
		'vue/first-attribute-linebreak': [
			'error',
			{
				'singleline': 'ignore',
				'multiline': 'below'
			}
		],
		'vue/max-attributes-per-line': [
			'error',
			{
				'singleline': 2,
				'multiline': 1
			}
		],
		'vue/html-indent': [
			'error',
			'tab'
		],
		'vue/html-closing-bracket-newline': [
			'error',
			{
				'singleline': 'never',
				'multiline': 'never',
				'selfClosingTag': {
					'singleline': 'never',
					'multiline': 'never'
				}
			}
		],
		'vue/html-closing-bracket-spacing': [
			'error',
			{
				'startTag': 'never',
				'endTag': 'never',
				'selfClosingTag': 'never'
			}
		],
		'vue/require-default-prop': 'off',
		'vue/order-in-components': [
			'error',
			{
				'order': [
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
					'renderError'
				]
			}],
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
					'EVENTS'
				],
				alphabetical: false
			}
		],
		'vue/component-tags-order': [
			'error',
			{
				'order': ['script', 'template', 'style']
			}]
	}
};


module.exports = plugin;