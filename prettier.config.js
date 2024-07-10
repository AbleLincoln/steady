/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  semi: false,
  singleQuote: true,
  organizeImportsSkipDestructiveCodeActions: true,
}

export default config
