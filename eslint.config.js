import { defineConfig, globalIgnores } from 'eslint/config';
import nomeus from './index.js';

export default defineConfig([globalIgnores(['test/fixtures/']), { files: ['**/*.js'], extends: [nomeus] }]);
