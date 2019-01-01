module.exports = {
  // mode: "production",
  // entry: "./src/js/accordion.js",
  // output: {
  //   filename: "bundle.js",
  //   path: __dirname + "/public"
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // {
      //   test: /\.(css|sass)$/,
      //   use: ["style-loader", "css-loader", "sass-loader"]
      // }
    ]
  }
}