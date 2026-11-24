# Nomeus

Shared ESLint and Prettier configuration for Oktopost Vue 3 projects.

## Install

The package is published to GitHub Packages, so the project needs `@oktopost:registry=https://npm.pkg.github.com` in its `.npmrc`.

ESLint, its Vue and Prettier plugins and Prettier are peer dependencies: the project installs and updates them itself.

```sh
pnpm add -D @oktopost/eslint-plugin-nomeus eslint eslint-plugin-vue vue-eslint-parser eslint-config-prettier prettier
```

| Peer                     | Range                                                 |
| ------------------------ | ----------------------------------------------------- |
| `eslint`                 | `^10.15.0`                                            |
| `eslint-plugin-vue`      | `^10.8.0` (needs `vue-eslint-parser` as its own peer) |
| `eslint-config-prettier` | `^10.1.8`                                             |
| `prettier`               | `^3.8.0`, optional, only for `prettier.config.js`     |

The `eslint` floor is a security floor: 10.15.0 is the first release outside the `minimatch` advisory range. pnpm only warns about an unmet peer, so keep the project's own `eslint` at or above it.

## ESLint

`eslint.config.mjs` in the project root. `extends` keeps the Vue parser on `.vue` files and plain JavaScript on `.js` files, and applies everything only to the files listed:

```js
import { defineConfig } from 'eslint/config';
import nomeus from '@oktopost/eslint-plugin-nomeus';

export default defineConfig([
	{
		files: ['src/**/*.{js,vue}'],
		extends: [nomeus],
	},
]);
```

The config is `eslint-plugin-vue`'s `flat/recommended` (Vue 3), the nomeus rules (the entry named `nomeus/rules`), and `eslint-config-prettier` last, so formatting is Prettier's job.

`createConfig()` returns a new copy of the same array each time, for projects that change the entries. It throws for any Vue version other than 3.

### TypeScript

The config sets no TypeScript parser. Add one after it:

```js
import { defineConfig } from 'eslint/config';
import nomeus from '@oktopost/eslint-plugin-nomeus';
import tseslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

export default defineConfig([
	{
		files: ['src/**/*.{ts,vue}'],
		extends: [nomeus],
	},
	{
		files: ['**/*.ts'],
		languageOptions: { parser: tseslint.parser },
	},
	{
		files: ['**/*.vue'],
		languageOptions: {
			parser: vueParser,
			parserOptions: { parser: tseslint.parser, extraFileExtensions: ['.vue'], sourceType: 'module' },
		},
	},
]);
```

## Prettier

`prettier.config.mjs` in the project root:

```js
export { default } from '@oktopost/eslint-plugin-nomeus/prettier.config.js';
```

Or, without a file, in `package.json`:

```json
"prettier": "@oktopost/eslint-plugin-nomeus/prettier.config.js"
```

## Upgrading from 1.x

- Vue 2 support is gone. The default export is the Vue 3 config. `createConfig()` and `createConfig(3)` return it; any other argument throws.
- ESLint, `eslint-plugin-vue`, `eslint-config-prettier` and Prettier are no longer bundled. Add them, and `vue-eslint-parser`, to the project's `devDependencies`. Projects that relied on nomeus for the `eslint` or `prettier` commands lose them until they do, and npm projects with `legacy-peer-deps=true` get no peer installed automatically.
- `vue/html-closing-bracket-newline` is gone from the rules. It never applied: `eslint-config-prettier` turned it off.

## Releasing

1. Set `version` in `package.json` and merge to `main`.
2. Push a tag with the same version (`2.0.0`, no `v`) on a commit of `main`. The Node.js Package workflow checks the tag against `package.json` and `main`, runs lint and tests, and publishes. A prerelease version (`2.1.0-beta.1`) is published under the `next` dist-tag.

## IDE setup

### PhpStorm / WebStorm (and other JetBrains IDEs)

1. **ESLint**: `Settings` → `Languages & Frameworks` → `JavaScript` → `Code Quality Tools` → `ESLint`, enable **Automatic ESLint configuration**.
2. **Prettier**: `Settings` → `Languages & Frameworks` → `JavaScript` → `Prettier`, enable **Automatic Prettier configuration**.
3. **Format on save**: `Settings` → `Tools` → `Actions on Save`, check **Reformat code**.
