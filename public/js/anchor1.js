'use strict';

// ES6
import IonicaServer from './ionicaServer.js';
import Renderer from './renderer';

function anchor1({databus, iobus}) {
  let ionicaServer = new IonicaServer({iobus: iobus});
  let renderer = new Renderer({databus: databus, iobus: iobus, ionica: ionicaServer, coreconfigKey: 'ledlineA'});
}
export default anchor1;