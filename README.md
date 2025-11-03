# Nomeus
Oktpost eslint rules
## How to install
Add to package.json "devDependencies" this line:

```
"@oktopost/eslint-plugin-nomeus": "^1.0.3",
```

Create an eslint.config.mjs file in your project's root.

The example below applies the rules only to files inside the src/vue directory.

```
import nomeusConfig from '@oktopost/eslint-plugin-nomeus';

export default [
    ...nomeusConfig.map(config => ({
       ...config,
       files: ['src/vue/**/*.{js,vue}']
    }))
];
```

Create an .prettierrc.js file in your project's root.

The example below applies the rules only to files inside the src/vue directory.

```
const configPromise = import('@oktopost/eslint-plugin-nomeus/prettier.config.js');

module.exports = configPromise.then(importedConfig => {
	return importedConfig.default || importedConfig;
});
```


## 💻 IDE Setup

To get real-time error highlighting and auto-formatting, configure your IDE to work with ESLint and Prettier.

### For PHPStorm / WebStorm (and other JetBrains IDEs)

1.  **ESLint**:
    * Navigate to `Settings` -> `Languages & Frameworks` -> `JavaScript` -> `Code Quality Tools` -> `ESLint`.
    * Enable **`Automatic ESLint configuration`**. The IDE will automatically find and use your `eslint.config.js` file.

2.  **Prettier**:
    * Navigate to `Settings` -> `Languages & Frameworks` -> `JavaScript` -> `Prettier`.
    * Enable **`Automatic Prettier configuration`**. The IDE will automatically find and use your `.prettierrc.js` file.

3.  **Enable Format on Save (Important!)**:
    * Navigate to `Settings` -> `Tools` -> `Actions on Save`.
    * Check the box for **`Reformat code`**. This will run Prettier every time you save a file.
