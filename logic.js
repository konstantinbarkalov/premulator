'use strict';
const masterPixelCount = 960;
const composePixelCount = 30 * 5;
function Logic(sio) {
  const that = this;
  function init() {
    setInterval(() => {
      let masterPixels = new Array(masterPixelCount);
      for (let i = 0; i < masterPixelCount; i++) {
        let rgb = {
          r: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          b: Math.floor(Math.random() * 256),
        }
        masterPixels[i] = rgb;
      }
      let composePixels = new Array(composePixelCount);
      for (let i = 0; i < composePixelCount; i++) {
        let rgb = {
          r: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          b: Math.floor(Math.random() * 256),
        }
        composePixels[i] = rgb;
      }
      sio.emit('rendered', {compose: composePixels});
    }, 500); 
  }
  init();
}
function logicFactory(...args) {
  return new Logic(...args);
}
module.exports = logicFactory;