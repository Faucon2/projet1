//module node js 

// module de récupération de la bibliotheque http
var http = require('http');

// module de recuperation de des urls vers les page web

var url = require('url');

//module de recuperation des paramettres

var querystring = require('querystring');

var server = http.createServer(function (req, res){

	var page = url.parse(req.url).pathname;
	var params = querystring.parse(url.parse(req.url).query);
	console.log(page);

	res.writeHead(200, {"Content-Type": "text/plain"});
	//res.write('bien le bonjour');

	if (page =='/'){
		res.write('vous êtes à l\'accueil, que puis-je pour vous?');
	}else if (page == '/page/index.html'){
		res.write('Bienvenue sur index.html');
	}else if(page == '/maison/07/chambre') { 
		res.write('hello c\'est privée ici!!');
		if ('prenom' in  params && 'nom' in params){
			res.write('vous vous appellez ' + params['prenom'] + ' ' + params['nom']);
		}else if ('!prenom' in params && '!nom' in params){
		 res.write('Vous devez bien avoir un prénom et un nom, non ?');
			}

	}else {
		 res.writeHead(404, {"Content-Type": "text/plain"});
  			res.write("404 Not Found\n");
	}
	res.end();

});

server.listen(8080);