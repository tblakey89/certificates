module.exports = function(config) {
  config.set({
    basePath: './public/app',
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      '*!(.module|.spec).js',
      '!(bower_components)/**/*!(.module|.spec).js',
      '**/*.spec.js'
    ],
    autoWatch: true,
    frameworks: ['jasmine'],
    preprocessors: {
      '**/*.js': ['webpack']
    },
    browsers: ['Chrome'],
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-webpack'
    ]
  });
};