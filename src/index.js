app = require('express')();

app.get('/', (req, res) => {
	res.send('Bienvenidos al curso de Azure 🧑‍💻👩‍💻💻🖥️');
});

app.listen(process.env.PORT, () => {
	console.log('Servidor iniciado en http://localhost:3000');
});
