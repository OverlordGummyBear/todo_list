import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "development",
  devtool: "eval-source-map", //any error messages reference files and lines from development code
  devServer: { 
    watchFiles: ["./src/index.html"], //tell Webpack to watch for changes in the html file as html files are not automatically included in being watched for changes
  },
});