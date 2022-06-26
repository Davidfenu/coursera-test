const saludo = {
	palabra: 'Hello',	
};

(function () {
	saludo.hablar = function (persona) {
		return (saludo.palabra + ' ' + persona);
	}
}());


const despedida = {
	palabra: 'Good Bye!'
};

(function () {
	despedida.hablar = function (persona) {
		return (despedida.palabra + " " + persona);
	}
}());

(function () {
	var nombres = ['Yaakov','John','Jen','Jacob','Paul','Frank','Larry','Paula','Laura','Jim'];
	for (var i = 0; i < nombres.length; i++) {
	var nombre = nombres[i];
	var firstLetter = nombre.charAt(0).toLowerCase();
	if (firstLetter === 'j') {
		console.log(despedida.hablar(nombre));
		document.write(despedida.hablar(nombre) + '<br>');
	} 

	else {
			console.log(saludo.hablar(nombre));
			document.write(saludo.hablar(nombre + '<br>'));
	}
	}
})();