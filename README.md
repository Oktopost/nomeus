# Nomeus

Shared ESLint and Prettier configuration for Oktopost Vue 3 projects.

## Install

The package is published to GitHub Packages, so the project needs `@oktopost:registry=https://npm.pkg.github.com` in its `.npmrc`.

ESLint, the Vue and Prettier ESLint plugins and Prettier are peer dependencies: the project installs and updates them itself.

```
pnpm add -D @oktopost/eslint-plugin-nomeus eslint eslint-plugin-vue eslint-config-prettier prettier
```

| Peer | Range |
|---|---|
| `eslint` | `^10.15.0` |
| `eslint-plugin-vue` | `^10.8.0` |
| `eslint-config-prettier` | `^10.1.8` |
| `prettier` | `^3.8.0`, optional, only for `prettier.config.js` |

## ESLint

`eslint.config.mjs` in the project root. The example applies the rules only to files inside `src`:

```js
import nomeusConfig from '@oktopost/eslint-plugin-nomeus';

export default [
	...nomeusConfig.map((config) => ({
		...config,
		files: ['src/**/*.{js,vue}']
	}))
];
```

`createConfig()` returns a fresh copy of the same array, for projects that change the entries.

The config is `eslint-plugin-vue`'s `flat/recommended` (Vue 3), the nomeus rules in `index.js`, and `eslint-config-prettier` last, so formatting is Prettier's job.

## Prettier

`.prettierrc.js` in the project root:

```js
const configPromise = import('@oktopost/eslint-plugin-nomeus/prettier.config.js');

module.exports = configPromise.then((importedConfig) => importedConfig.default || importedConfig);
```

## Upgrading from 1.x

- Vue 2 support is gone. The default export is the Vue 3 config, and `createConfig()` takes no argument (`createConfig(3)` still works).
- ESLint, `eslint-plugin-vue`, `eslint-config-prettier` and Prettier are no longer bundled. Add them to the project's `devDependencies`.

## Releasing

1. Set `version` in `package.json` and merge to `main`.
2. Push a tag with the same version (`2.0.0`, no `v`). The Node.js Package workflow runs the tests, checks that the tag matches `package.json`, and publishes.

## IDE setup

### PhpStorm / WebStorm (and other JetBrains IDEs)

1. **ESLint**: `Settings` → `Languages & Frameworks` → `JavaScript` → `Code Quality Tools` → `ESLint`, enable **Automatic ESLint configuration**.
2. **Prettier**: `Settings` → `Languages & Frameworks` → `JavaScript` → `Prettier`, enable **Automatic Prettier configuration**.
3. **Format on save**: `Settings` → `Tools` → `Actions on Save`, check **Reformat code**.
