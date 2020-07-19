const express = require('express');
const exphbs  = require('express-handlebars');
const routes  = require('./routes/index.routes.js');
const db      = require('./models');

//syncs our database
// =============================================================
db.sequelize.sync();

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8070;

//Middle-ware
// =============================================================

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directories
app.use(express.static('public'));

// Sets up handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
// =============================================================
routes(app);

// require("./routes/api-routes.js")(app); <- Working code if needed

// Starting our Express app
// =============================================================
app.listen(PORT, () => console.log(`App listening on PORT:${PORT}`) );