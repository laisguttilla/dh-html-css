window.onload = function(){

	// Exercício 01 - Início
		console.log('\n## EXERCÍCIO 01 ##\n\n')
		
		var numIntPos = 5
		console.log('\tvariável com número inteiro positivo\t\t\t\t\t\t| var numIntPos\n')
		
		var numIntNeg = -5
		console.log('\tvariável com número inteiro negativo\t\t\t\t\t\t| var numIntNeg\n')
		
		var numDec = 0.5
		console.log('\tvariável com número decimal\t\t\t\t\t\t\t\t\t| var numDec\n')
		
		var minhaString = 'sou uma string, prazer!'
		console.log('\tvariável com string\t\t\t\t\t\t\t\t\t\t\t| var minhaString\n')

		var booleanoVerdadeiro = (1 == '1')
		console.log('\tvariável verdadeira (booleana)\t\t\t\t\t\t\t\t| var booleanoVerdadeiro\n')
	// Exercício 01 - Fim

	// Exercício 02 - Início
		console.log('\n## EXERCÍCIO 02 ##\n\n')
		
		console.log('\tnúmero inteiro positivo\t\t\t\t\t\t\t\t\t\t| '+numIntPos+'\n')
		
		console.log('\tnúmero inteiro negativo\t\t\t\t\t\t\t\t\t\t| '+numIntNeg+'\n')
		
		console.log('\tnúmero decimal\t\t\t\t\t\t\t\t\t\t\t\t| '+numDec+'\n')
		
		console.log('\tstring\t\t\t\t\t\t\t\t\t\t\t\t\t\t| "'+minhaString+'"\n')

		console.log('\tverdadeiro (booleano)\t\t\t\t\t\t\t\t\t\t| '+booleanoVerdadeiro+'\n')
	// Exercício 02 - Fim

	// Exercício 03 - Início
		console.log('\n## EXERCÍCIO 03 ##\n\n')

		var nome = prompt('Insira seu nome, por favor')
		if(nome == '') { nome = 'Fulano'}
		console.log('\tvariável com nome (via prompt)\t\t\t\t\t\t\t\t| var nome\n\tNome\t\t\t\t\t\t\t\t\t\t\t\t\t\t| '+nome+'\n')

		var sobrenome = prompt('Agora insira seu sobrenome')
		if(sobrenome == '') { sobrenome = 'de Tal'}
		console.log('\tvariável com sobrenome (via prompt)\t\t\t\t\t\t\t| var sobrenome\n\tSobrenome\t\t\t\t\t\t\t\t\t\t\t\t\t| '+sobrenome+'\n')

		var nomeCompleto = nome+' '+sobrenome
		console.log('\tvariável com nome + sobrenome por concatenação\t\t\t\t| var nomeCompleto\n\tNome Completo\t\t\t\t\t\t\t\t\t\t\t\t| '+nomeCompleto+'\n')
		alert('Muito obrigado '+nomeCompleto+'!')
	// Exercício 03 - Fim

	// Exercício 04 - Início
		console.log('\n## EXERCÍCIO 04 ##\n\n')

		var nome = 'Clara'
		// console.log(Nome)

		console.log('\terro causado pelo uso de uma variável "Nome" inexistente\n\t| script.js:52 Uncaught ReferenceError: Nome is not defined at window.onload\n\tIsso pois JavaScript é uma linguagem case sensitive (diferencia maiúsculas de minúsculas')
	// Exercício 04 - Fim

	// Exercício 05 - Início
		console.log('\n## EXERCÍCIO 05 ##\n\n')

		var nome = 'Clara'
		console.log('\tvalor "Clara" atralada à variável "nome"\n\n\tconsole.log(nome,sobrenome):\n')
		console.log('\n\t'+nome,sobrenome+'\n\n')

		console.log('\t| Ao utilizarmos a vírgula separamos os parâmetros com espaços.')
	// Exercício 05 - Fim

	// Exercício 06 - Início
		console.log('\n## EXERCÍCIO 06 ##\n\n')

		console.log('\tUma maneira de inserir textos em mais de')
		console.log('\tuma linha no console é usando um "console.log()"')
		console.log('\tpara cada linha desejada. Mas...')

		console.log('\n\tHá outra maneira de quebrarmos linhas no texto exibido no console.\n\tPodemos simplesmente utilizar a barra invertida seguida da letra n.\n\tTambém podemos utilizar outros códigos, como barra invertida + t, que resulta na tabulação (tab).')

	// Exercício 06 - Fim

	// Exercício 07 - Início
		console.log('\n## EXERCÍCIO 07 ##\n\n')

		var valorNulo = null
		console.log('\tvar valorNulo = null\t\t\t\t\t\t\t| console.log(valorNulo): '+valorNulo)

		var naoDefinido = undefined
		console.log('\tvar naoDefinido = undefined\t\t\t\t\t\t| console.log(naoDefinido): '+naoDefinido)
	// Exercício 07 - Fim

	// Exercício 08 - Início
		console.log('\n## EXERCÍCIO 08 ##\n\n')

		var frutas = ['açaí','ameixa','banana','carambola','côco']
		console.log('\tarray "frutas" criado, com 5 índices\n\t| console.log(frutas): '+frutas)

		console.log('\n\tModo 01 | Com forEach:\n\n\t\tfrutas.forEAch(mostrarIndices)\n\n\t\tfunction mostrarIndices(item,index){\n\t\t\tconsole.log((index+1)+")",item,"| frutas["+index+"]")\n\t\t}\n\n')
		frutas.forEach(mostrarIndices)

		function mostrarIndices(item, index) {
			console.log('\t'+(index+1)+')',item,'| frutas['+index+']')
		}

		console.log('\n\tModo 02 | Com map:\n\n\t\tfrutas.map(listarFrutas)\n\n\t\tfunction listarFrutas(item,index){\n\t\t\tconsole.log((index+1)+")",item,"| frutas["+index+"]")\n\t\t}\n\n')
		var frutasListadas = frutas.map(listarFrutas)

		function listarFrutas(item, index){
			console.log('\t'+(index+1)+')',item,'| frutas['+index+']')
		}

		console.log('\n\tModo 03 | Com for:\n\n\t\tfor(let i = 0; i < frutas.length; i++){\n\t\t\tconsole.log((index+1)+")",item,"| frutas["+index+"]")\n\t\t}\n\n')

		for(let i = 0; i < frutas.length; i++){
			console.log('\t'+(i+1)+')',frutas[i],'| frutas['+i+']')
		}
	// Exercício 08 - Fim

	// Exercício 09 - Início
		console.log('\n## EXERCÍCIO 09 ##\n\n')

		var textoDH = '“Digital House, a escola de programação que forma novas gerações de coders e profissionais digitais para imaginar, inovar e criar o que sempre sonharam.”'
		console.log('Texto do exercício:\n\n\t\t'+textoDH+'\n\n')
	// Exercício 09 - Fim

	// Exercício 10 - Início
		console.log('\n## EXERCÍCIO 10 ##\n\n')

		var nomeDeCasado = 'Silva e Silva'
		console.log('\tVariável com um nome de casado')
		var nomeDeCasadoErrado = (nomeDeCasado == 'Junior Neto')
		console.log('\tVariável com a comparação de igualdade do nome correto com o nome errado')
		console.log('\n\tconsole.log(nomeDeCasadoErrado):',nomeDeCasadoErrado+'\n')
		console.log('\tconsole.log(!nomeDeCasadoErrado):',!nomeDeCasadoErrado+'\n\n')
	// Exercício 10 - Fim

	// Exercício 11 - Início
		console.log('\n## EXERCÍCIO 11 ##\n\n')

		var nomeDeCasado = 'Silva e Silva'
		console.log('\tVariável com um nome de casado')
		var nomeDeCasadoCorreto = (nomeDeCasado == 'Silva e Silva')
		console.log('\tVariável com a comparação de igualdade do nomeDeCasadoCorreto com o nome correto')
		console.log('\n\tconsole.log(nomeDeCasadoCorreto):',nomeDeCasadoCorreto+'\n')
		console.log('\tconsole.log(!nomeDeCasadoCorreto):',!nomeDeCasadoCorreto+'\n\n')
	// Exercício 11 - Fim

}