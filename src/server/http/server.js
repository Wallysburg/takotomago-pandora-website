import { Server } from 'http';

import startWebDevServer from './../react-dev-server/server';

const port = process.env.PORT || 3005;
const env = process.env.NODE_ENV || 'production';

export default class HttpServer {

  constructor(app) {
    this.httpServer = new Server(app);
    this.expressServer = app;
  }

  start() {
    if (env === 'development') {
      startWebDevServer();
    }

    this.httpServer.listen(port, (err) => {
      if (err) {
        return console.error(err);
      }
      console.info(`Server running on http://localhost:${port} [${env}]`);

      return 'Succes';
    });
  }
}
