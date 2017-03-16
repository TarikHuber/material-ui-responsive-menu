module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ResponsiveMenu',
      externals: {
        react: 'React'
      }
    }
  }
}
