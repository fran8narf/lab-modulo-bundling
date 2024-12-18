export default {
    entry: ['./src/index.js'],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: "babel-loader"
            }
        ]
    }
}