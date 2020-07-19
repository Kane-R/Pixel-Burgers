const apiRoutes = require('./api/api.routes');
const htmlRoutes = require('./html/html.routes');

//consolidates all our routes for server.js
module.exports = app => {
    htmlRoutes(app);
    apiRoutes(app);
}

