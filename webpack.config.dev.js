module.exports = {
    entry: "./src/Index.tsx",
    output: {
        filename: './bundle.js'
    },
    
    mode: "development",

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {loader: 'ts-loader'}
                ]
            }
        ]
    }

}