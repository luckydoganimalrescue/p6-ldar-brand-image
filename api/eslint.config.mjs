import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '.pnpm-store/',
    '.vscode/',
    'events/',
    'package.json',
    'samconfig.toml',
    'template.yaml',
    'tsconfig.json',
  ],
  plugins: {
  },
  languageOptions: {
  },
  rules: {
  },
  settings: {
  },
})
