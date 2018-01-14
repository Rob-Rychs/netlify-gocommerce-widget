import baseConfig from "./webpack.config.babel.js";
import path from "path";

const umdConfig = Object.assign({}, baseConfig, {
  entry: {
    "netlify-gocommerce-widget": "./netlify-gocommerce.js"
  },

  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "[name].js",
    library: "netlifyGocommerce",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  devtool: "hidden-source-map"
});

umdConfig.plugins.splice(2, 1); // Remove html plugin

module.exports = umdConfig;
