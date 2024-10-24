module.exports = function override(config, env) {
  // Ignore TypeScript declaration files
  config.module.rules.push({
    test: /\.d\.ts$/,
    loader: 'ignore-loader',
  });

  return config;
};
