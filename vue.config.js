module.exports = {
    filenameHashing: false,
    chainWebpack: config => {
        config.optimization.delete('splitChunks')
    },
    pages: {
        weicomment: {
            entry: 'src/main.js',
            filename: 'index.html'
        }
    }
    
}