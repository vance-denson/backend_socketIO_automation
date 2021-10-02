import io from 'socket.io-client';

testClient = new io();

console.log('index.js Connected');

const port = 22901;
const host = 'localhost';

const client = new Socket();
client.connect({ port: port, host: host }, function() {
	console.log('Socket Connected');
	// client.write('Is Initialized');
});

client.on('data', function(data) {
	console.log(`Received: ${data.toString()}`);
	client.destroy(); // kill client after server's response
});

client.on('end', function() {
	console.log('Reqested to end Socket Connection');
});
