# Nomeus
Oktpost eslint rules
## How to install
Add to package.json "devDependencies" this line:

```
"eslint-plugin-nomeus": "github:Oktopost/nomeus",
```

Create an eslint.config.mjs file in your project's root.

The example below applies the rules only to files inside the src/vue directory.

```
import nomeusConfig from 'eslint-plugin-nomeus';

export default [
    ...nomeusConfig.map(config => ({
       ...config,
       files: ['src/vue/**/*.{js,vue}']
    }))
];
```


## 💻 IDE Setup

To get real-time error highlighting and auto-formatting, configure your IDE to work with ESLint and Prettier.

### For PHPStorm / WebStorm (and other JetBrains IDEs)

1.  **ESLint**:
    * Navigate to `Settings` -> `Languages & Frameworks` -> `JavaScript` -> `Code Quality Tools` -> `ESLint`.
    * Enable **`Automatic ESLint configuration`**. The IDE will automatically find and use your `eslint.config.js` file.

2.  **Prettier**:
    * Navigate to `Settings` -> `Languages & Frameworks` -> `JavaScript` -> `Prettier`.
    * Enable **`Manual Prettier configuration`**. Add path to `node_modules/eslint-plugin-nomeus`.

3.  **Enable Format on Save (Important!)**:
    * Navigate to `Settings` -> `Tools` -> `Actions on Save`.
    * Check the box for **`Reformat code`**. This will run Prettier every time you save a file.
