const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

console.log('axios.js Connected');

const getData = () => {
	axios.get('http://localhost:22901').then((response) => {
		console.log(response);
	});
};

const sendData = () => {
	axios
		.put('http://localhost:22901', 'START FTS;NONE;X240', {
			headers: {
				'Content-Type': 'text/plain'
			}
		})
		.then((response) => {
			console.log(response);
		})
		.catch((err) => {
			console.log(err, err.response);
		});
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
