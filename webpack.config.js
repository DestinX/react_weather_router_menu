module.exports = {
  entry: './app/app.jsx',
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
      }
    ]
  }
  // , devtool: 'source-map' // Snyggare kod (som orginal) - skriv: debugger;
};
