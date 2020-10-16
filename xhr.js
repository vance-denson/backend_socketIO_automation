console.log('xhr.js JS Connected');

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const commandString = document.getElementById('postString');

const urlString = 'http://localhost:22901';

const sendHttpRequest = (method, url, command) => {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response);
			} else {
				resolve(xhr.response);
			}
		};
		xhr.onerror = () => {
			reject('There was an error');
		};
		xhr.send(command);
	});
	return promise;
};

const getData = () => {
	sendHttpRequest('GET', urlString).then((responseData) => {
		console.log(responseData);
	});
};

const postData = () => {
	sendHttpRequest('POST', urlString, 'START FTS;NONE;X240')
		.then((responseData) => {
			console.log(responseData);
		})
		.catch((err) => {
			console.log(err);
		});
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
