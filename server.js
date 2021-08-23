const app = require(`./app`);
const env = process.env.NODE_APP || `development`;
const {
	appSpecific,
} = require(`./config`);

// Starts app to listen to the selected port
const port = process.env.PORT || appSpecific[env].port;

app.listen(port, () => {
	console.log(`Getir-Backend app listening on port ${port}`);
});
