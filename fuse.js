const fsbx = require('fuse-box');

fsbx.FuseBox.init({
  homeDir: 'src',
  outFile: 'build/bundle.js',
  sourceMap: {
    bundleReference: "sourcemaps.js.map",
    outFile: "build/sourcemaps.js.map",
  },
  plugins: [
    fsbx.BabelPlugin({
      test: /\.jsx$/,
      config: {
        sourceMaps: true,
        presets: ["es2015"],
        plugins: [
          ["transform-react-jsx"]
        ]
      }
    })
  ]
}).devServer(">index.jsx");
