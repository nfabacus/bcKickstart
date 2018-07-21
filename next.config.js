const webpack = require('webpack');
require('dotenv').config();
module.exports = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.MNEMONIC': JSON.stringify(process.env.MNEMONIC),
        'process.env.INFURAAPI': JSON.stringify(process.env.INFURAAPI),
        'process.env.DEPLOYED_CONTRACT_ADDRESS': JSON.stringify(process.env.DEPLOYED_CONTRACT_ADDRESS),
      })
    );
    return config;
  }
};