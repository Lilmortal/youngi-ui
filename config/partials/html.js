const HtmlWebpackPlugin = require("html-webpack-plugin");
const chalk = require("chalk");

const html = ({
  title,
  description,
  filename = "index.html",
  template = "index.ejs",
} = {}) => (config) => {
  if (!title) {
    console.log(
      chalk.red("This application does not have a title, please provide one.")
    );
  }

  if (!description) {
    console.log(
      chalk.red(
        "This application does not have a meta description, please provide one to improve the SEO experience."
      )
    );
  }

  return {
    plugins: [
      // Get the template and create an index.html with the <script> tags that points to our bundle files injected.
      // This is useful because we don't want the hassle of changing the <script> location when we rename/add/remove
      // our bundle names.
      new HtmlWebpackPlugin({
        title,
        description,
        filename,
        template,
      }),
    ],
  };
};

module.exports = html;
