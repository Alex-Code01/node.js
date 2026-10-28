//index.js
(async() =>{
    const database = require('./db');
    const Produto = require('./produto');
    const usuario = require('./usuario');

    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Produto.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'Mouse USB mão de aço'
        })
        const resultadoCreate01 = await Produto.create({
            nome: 'Teclado',
            preco: 25,
            descricao: 'Teclado USB mão de aço'
        })
        console.log
        const usuarioCreate = await usuario.create({
            nome: 'Alex',
            idade: 35,
            senha: 'bomdiabrasil@bolsonarofugiu'
        })
        console.log(resultadoCreate);
        console.log(resultadoCreate01);
        console.log(usuarioCreate);
    } catch (error) {
        console.log(error);
    }
})();