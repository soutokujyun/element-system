module.exports={
    devServer:{
        open: true
    },
    configureWebpack: {
        resolve :{
            alias: {
                'src': path.resolve(__dirname, '../src'),
                'components': path.resolve(__dirname, '../src/components'),
                'api': path.resolve(__dirname, '../src/api'),
                'utils': path.resolve(__dirname, '../src/utils'),
                'store': path.resolve(__dirname, '../src/store'),
                'router': path.resolve(__dirname, '../src/router')
            }
        }
    }
}