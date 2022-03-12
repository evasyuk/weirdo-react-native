module.exports = function(api) {
  api.cache(true)
  return {
    // env: {
    //   production: {
    //     plugins: ['react-native-paper/babel'],
    //   },
    // },
    presets: [['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }]],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.js', '.jsx', '.tsx', '.ts'],
          alias: {
            '@weirdo': ['modules', 'packages'],
          },
        },
      ],
      [
        '@babel/plugin-transform-react-jsx',
        {
          runtime: 'automatic',
        },
      ],
      'react-native-paper/babel',
    ],
  }
}
