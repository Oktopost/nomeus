# Nomeus
Eslint custom rules

## How to install
1. Add to package.json "devDependences" this line:

```
"eslint-plugin-nomeus": "github:Oktopost/Nomeus",
```

2. Add to .eslinrc.js "nomeus" plugin and rule:

```
"plugins": ["nomeus"],
"rules": {
  "nomeus/semi": ["warn", "always"],
}
 ```
 
 ## Rules
There is only one ("semi") rule so far, it inherited from standart eslint "semi" rule, but exclude semicolons for objects and functions.
