module.exports = {
    filenameHashing: false,
    chainWebpack: config => {
        config.optimization.delete('splitChunks');
        config.entry('weicomment')
        .add('./src/weicomment.js')
        .end()
    },
    // pages: {
    //     main: {
    //         entry: 'src/main.js',
    //         filename: 'index.html'
    //     },
    //     weicomment: {
    //         entry: 'src/weicomment.js'
    //     }
    // },
    publicPath: './',
}
