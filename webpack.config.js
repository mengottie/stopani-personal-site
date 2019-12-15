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
      filename: './style-bundle-home.js'
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
      filename: "./bundle-home.js"
    },
    module: {
      rules: [{
        test: /home.js$/,
        loader: 'babel-loader',
        query: { presets: ['env'] }
      }]
    },
  },
  {
    entry: './biography.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: './style-bundle-biography.js'
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
      filename: "./bundle-biography.js"
    },
    module: {
      rules: [{
        test: /biography.js$/,
        loader: 'babel-loader',
        query: { presets: ['env'] }
      }]
    },
  },
  {
    entry: './blog.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: './style-bundle-biography.js'
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
      filename: "./bundle-blog.js"
    },
    module: {
      rules: [{
        test: /blog.js$/,
        loader: 'babel-loader',
        query: { presets: ['env'] }
      }]
    },
  },
  {
    entry: './interview-a-9.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: './style-bundle-interview-a-9.js'
    },
    module: {
      rules: [{
        test: /interview-a-9.scss$/,
        use: getStyleUse('bundle-interview-a-9.css')
      }]
    },
  },
  {
    entry: "./interview-a-9.js",
    output: {
      filename: "./bundle-interview-a-9.js"
    },
    module: {
      rules: [{
        test: /interview-a-9.js$/,
        loader: 'babel-loader',
        query: { presets: ['env'] }
      }]
    }
  },
  {
    entry: './review-a-9.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: './style-bundle-review-a-9.js'
    },
    module: {
      rules: [{
        test: /review-a-9.scss$/,
        use: getStyleUse('bundle-review-a-9.css')
      }]
    },
  },
  {
    entry: "./review-a-9.js",
    output: {
      filename: "./bundle-review-a-9.js"
    },
    module: {
      rules: [{
        test: /review-a-9.js$/,
        loader: 'babel-loader',
        query: { presets: ['env'] }
      }]
    }
  }
];
