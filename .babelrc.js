const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [['@babel/preset-env', {modules: isTest ? 'commonjs' : false}], '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    isTest ? 'dynamic-import-node-babel-7' : null
  ].filter(Boolean)
}