module.exports = {
  pluginOptions: {
    electronBuilder: {
      externals: ['ffi-napi', 'ref-napi'],
      preload: './src/preload.js',
      builderOptions: {

      }
    }
  }
}