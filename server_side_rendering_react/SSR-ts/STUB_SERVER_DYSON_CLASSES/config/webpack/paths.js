const path = require('path')

module.exports = {
  // remember to update paths in webpack.server.js as well!
  argosModules: new RegExp(`@argos|@jsluna|@sainsburys-tech/bolt|@sainsburys-tech/tokens`),
}
