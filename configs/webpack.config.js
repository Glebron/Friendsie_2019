var path = require('path');

module.exports ={
    entry: "./dev/js/index.js",
    output: {
        path: path.resolve(__dirname,"./build/js/"),
        filename: "index.js"
    },
    mode: 'none',
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
      }
    }

