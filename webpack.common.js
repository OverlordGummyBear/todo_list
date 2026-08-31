import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

//good to know
//https://webpack.js.org/concepts/
//https://webpack.js.org/guides/asset-management/
//These are all npm installed with "npm install --save-dev"
//webpack webpack-cli html-webpack-plugin style-loader css-loader html-loader webpack-dev-server webpack-merge
//Webpack server command "npx webpack serve"

export default {
  entry: "./src/index.js",
  output: { //output from running webpack
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true, //clean the dist directory every time we create a new output
  },
  plugins: [
    new HtmlWebpackPlugin({ //enable us to include html files in webpack
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      { //enable us to use css files
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], //the loader order matters. Chain is executed right to left
      },
      { //enable us to include html files and process them with html-loader (needed for html-webpack-plugin's template)
        test: /\.html$/i,
        use: ["html-loader"],
      },
      { //enable us to use images in our JavaScript where we will need to import the files
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};