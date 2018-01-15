var path = require("path");
var postCSSImport = require("postcss-import");
var postCSSNested = require("postcss-nested");
var postCSSNext = require("postcss-cssnext");

module.exports = {
  name: "client",
  target: "web",
  resolve: {
    extensions: [".js", "jsx"],
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        // Transform our own .(less|css) files with PostCSS and CSS-modules
        test: /\.(css)$/,
        include: /modal\.css/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          {
            loader: `postcss-loader`,
            options: {
              sourceMap: true,
              plugins: () => [postCSSImport(), postCSSNested(), postCSSNext()]
            }
          }
        ]
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/
      }
    ]
  }
};
