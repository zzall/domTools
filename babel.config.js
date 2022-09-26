// const env = process.env.NODE_ENV || 'development';
// const isDevelopment = env === 'development';

module.exports = function (api) {
  api.cache(true);
  const presets = [
    [
      require('@babel/preset-env'),
      {
        // debug: isDevelopment,
        modules: false,
        useBuiltIns: 'usage',
        corejs: {
          version: 3
        },
        targets: {
          node: 'current',
          chrome: "49",
          ios: "10"
        }
      }
    ],
    '@babel/preset-typescript'
  ];
  const plugins = [
    [require('@babel/plugin-transform-runtime')],
  ].filter(Boolean);

  return {
    presets,
    plugins
  };
};
