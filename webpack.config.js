module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        loader: [
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      }
    ],
  },
};