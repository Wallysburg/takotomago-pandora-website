import webpack from 'webpack';
import WebPackDevServer from 'webpack-dev-server';

const config = require('../../../webpack.config.dev');

function createWebpackDevServer() {
  new WebPackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    inline: true,
    contentBase: 'src/static/',
    historyApiFallback: true,
    proxy: {
      '*': 'http://localhost:3005'
    }
  }).listen(8080, 'localhost', (err, result) => {
    if (err) {
      return console.log(err);
    }

    return console.log('Development Server is listening at http://localhost:8080');
  });
}

export default createWebpackDevServer;
