import path from 'path';
import Express from 'express';

require('css-modules-require-hook/preset');

function registerClientApp(app) {
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../views'));
  app.use(Express.static(path.join(__dirname, '../../app/static')));
}

export default class ExpressServer {

  constructor() {
    this.app = new Express();

    registerClientApp(this.app);
  }
}
