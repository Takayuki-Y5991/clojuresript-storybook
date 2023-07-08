const webpack = require('webpack')

module.exports = {
    "stories": [
      "../public/js/stories/*_stories.js"
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials"
    ],
    "core": {
      "builder": "webpack5"
    },
    webpackFinal: (config) => {
      config.plugins.push(new webpack.ProvidePlugin({
        process: 'process/browser'
      }))
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      });
      return config
    }
  };
  