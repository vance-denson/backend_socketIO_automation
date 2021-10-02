console.log('fetch.js Connected');

const getBtn = document.getElementById('get-btn');
const sendBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
	return fetch(url, {
		method: method,
		body: data,
		headers: data ? { 'Content-type': 'text/html' } : {}
	}).then((response) => {
		return response;
	});
};

const getData = () => {
	sendHttpRequest('GET', 'http://localhost:22901').then((responseData) => {
		console.log(responseData);
	});
};

const sendData = () => {
	sendHttpRequest('POST', 'http://localhost:22901', 'START FTS;NONE;X240').then((responseData) => {
		console.log(responseData);
	});
};

getBtn.addEventListener('click', getData);
sendBtn.addEventListener('click', sendData);
