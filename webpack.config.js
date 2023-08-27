module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              limit: 1000,
              name: "img/[name].[contenthash:7].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              limit: 1000,
              name: "fonts/[name].[contenthash:7].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(webm|mp4|ogv)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "videos/[name].[contenthash:7].[ext]"
            }
          }
        ]
      }
    ]
  }
};
