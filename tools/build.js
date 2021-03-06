

/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log("GENERATING WEBPACK MINI".blue);

webpack(webpackConfig).run((err, stats) => {
  if(err){
    console.log(err.bold.red);
    return 1;
  }
  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.errors.map(error => console.log(error.red));
  }
  if(jsonStats.hasWarnings){
    console.log('WARNING: '.yellow);
    jsonStats.warning.map(warning => console.log(warning.yellow));
  }
  console.log(`Webpack stats: ${stats}`);

  console.log('Application build in PRODUCTION MODE SUCCESS'.bold);

  return 0;
});
