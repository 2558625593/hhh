module.exports={
    devServer:{
        proxy: {
            "api":{
                target: "http://106.13.85.240:7002/",
                changeOrigin: true, //允许跨域
                pathRewrite: { "^/api": "" }  //
            }
        }
    }
}