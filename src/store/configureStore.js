if (process.env.NODE_ENV === 'production'){
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
//dynamic imports not supported in es6 hence es5 require method is utilized.
