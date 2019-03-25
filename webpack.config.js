function getStyleUse(bundleFilename) {
  return [
    {
      loader: 'file-loader',
      options: {
        name: bundleFilename,
      },
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
      }
    },
  ];
}

module.exports = [
  {
    entry: './home.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-home.js'
    },
    module: {
      rules: [{
        test: /home.scss$/,
        use: getStyleUse('bundle-home.css')
      }]
    },
  },
  {
    entry: "./home.js",
    output: {
      filename: "bundle-home.js"
    },
    module: {
      loaders: [{
        test: /home.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  },
  {
    entry: './biography.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-biography.js'
    },
    module: {
      rules: [{
        test: /biography.scss$/,
        use: getStyleUse('bundle-biography.css')
      }]
    },
  },
  {
    entry: "./biography.js",
    output: {
      filename: "bundle-biography.js"
    },
    module: {
      loaders: [{
        test: /biography.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  },
  {
    entry: './blog.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-biography.js'
    },
    module: {
      rules: [{
        test: /blog.scss$/,
        use: getStyleUse('bundle-blog.css')
      }]
    },
  },
  {
    entry: "./blog.js",
    output: {
      filename: "bundle-blog.js"
    },
    module: {
      loaders: [{
        test: /blog.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  }
];
