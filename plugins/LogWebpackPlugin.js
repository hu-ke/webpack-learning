class LogWebpackPlugin {
    constructor(doneCallback, emitCallback) {
        this.doneCallback = doneCallback
        this.emitCallback = emitCallback
    }
    apply(compiler) {
        compiler.hooks.afterEmit.tap('LogWebpackPlugin', (compilation, callback) => {
            console.log('afterEmit')
        })
        compiler.hooks.emit.tap('LogWebpackPlugin', () => {
            this.emitCallback()
        })
        compiler.hooks.done.tap('LogWebpackPlugin', () => {
            this.doneCallback()
        })
        compiler.hooks.compilation.tap('LogWebpackPlugin', (compilation) => {
            compilation.hooks.processAssets.tap(
                {
                  name: 'LogWebpackPlugin',
                //   stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS, // see below for more stages
                },
                (assets) => {
                  console.log('List of assets and their sizes:');
                  Object.entries(assets).forEach(([pathname, source]) => {
                    console.log(`— ${pathname}: ${source.size()} bytes`);
                  });
                }
              )
            console.log('3.编译ing')
        })
        compiler.hooks.compile.tap('LogWebpackPlugin', () => {
            console.log('2.开始编译')
        })
        compiler.hooks.run.tap('LogWebpackPlugin', (compiler) => {
            console.log('1.开始run.')
        })
    }
}

module.exports = LogWebpackPlugin