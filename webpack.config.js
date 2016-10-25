var webpack = require('webpack');

module.exports = {
  // entry: './app/app.jsx', // To only run the app.
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!bootstrap/dist/js/bootstrap.min.js',
    // 'foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  // $ and jQuery tells react to interpret $ for jquery so jquery doesnt need to be loaded on each component
  plugins: {
    // new webpack.ProvidePlugin({
    //   '$': 'jQuery',
    //   'jQuery': 'jquery'
    // })
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: { // Lägg till alias för alla componenter så man slipper ange hela path vid require();
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx'] // Leta efter dessa extensions vid körning av webpack
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader', // Går igenom en loader -> Babel
        query: {
          presets: ['react', 'es2015', 'stage-0'] // Kod anpassas till standarder
        },
        test: /\.jsx?$/, // filter på vilka filer som ska köras genom loader babel
        exclude: /(node_modules|bower_components)/ // exkludera directory
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  }
  // , devtool: 'source-map' // Snyggare kod (som orginal) - skriv: debugger;
};
