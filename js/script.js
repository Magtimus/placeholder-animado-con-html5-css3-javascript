superplaceholder({
	el: document.querySelector('.text1'),
	sentences: [ 'Escribe tu Nombre de Usuario', 'Por Favor'],
	options: {

		letterDelay:90, 
		sentenceDelay: 500,
		startOnFocus: false,
		loop: true,
		shuffle: false,
		showCursor: true,
		cursor: '|'
	}
});

superplaceholder({
	el: document.querySelector('.text2'),
	sentences: [ 'Digita tu Contraseña'],
	options: {

		letterDelay:90,
		sentenceDelay: 500,
		startOnFocus: true,
		loop: true,
		shuffle: false,
		showCursor: true,
		cursor: '|'
	}
});