# Nomeus
Oktpost eslint rules
## How to install
Add to package.json "devDependences" this line:

```
"eslint": "^9.34.0",
"eslint-plugin-nomeus": "github:Oktopost/nomeus",
"eslint-plugin-vue": "^10.4.0"
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
