const env = process.env.NODE_APP || `development`;
const { database } = require(`./config`);
const express = require(`express`);
const app = express();
const { "errors" : { NotFoundError } } = require(`./helpers`);
const { mongo } = require(`./database`);

// Database connection
mongo.connect(database[env].mongo);

// JSON Request Parser
app.use(express.json());

// Body Request Parser
app.use(express.urlencoded({"extended": false}));

// Routes
require(`./routes/routes.js`)(app);

// Catch 404 (Not Found) Error
app.use((req) => {
	throw new NotFoundError(`Route ${req.url} Not Found.`);
});

module.exports = app;
