

const mongoose = require('mongoose');
const host = '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;

const readLine = require('readline');

//build connection string
const connect = () => {
	setTimeout(() => mongoose.connect(dbURI, {
	}), 1000);
}


//connection events
mongoose.connection.on('connected', () => {
	console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', (err) => {
	console.log('Mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
	console.log('Mongoose disconnected :(');
});


//windows specific listener
if(process.platform === 'win32') {
	const r1 = readLine.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	r1.on('SIGINT', () => {
		process.emit('SIGINT');
	});
}

//configure graceful shutdown
const gracefulShutdown = (msg) => {
	mongoose.connection.close(() => {
		console.log('Mongoose disconnected through ', msg);
	});
};


// Event Listeners to process graceful shutdowns


// Shutdown invoked by nodemon signal
process.once('SIGUSR2', () => {
	gracefulShutdown('nodemon restart');
	process.kill(process.pid, 'SIGUSR2');
});


// Shutdown invoked by app termination
process.on('SIGINT', () => {
	gracefulShutdown('app termination');
	process.exit(0);
});


// Shutdown invoked by container termination
process.on('SIGTERM', () => {
	gracefulShutdown('app shutdown');
	process.exit(0);
});


// setup connection to DB
connect();


// Import Mongoose schema
require('./travlr');
module.exports = mongoose;

