import HttpServer from './http/server';
import ExpressServer from './express/server';

const serverSideRender = require(`${__dirname}/../app/routes/serverSideRender`);

const expressServer = new ExpressServer();
const httpServer = new HttpServer(expressServer.app);

serverSideRender(expressServer.app);

httpServer.start();
