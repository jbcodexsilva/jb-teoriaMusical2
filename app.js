// Seleciona a seção HTML onde os resultados serão exibidos.
function pesquisar() {

    // O elemento com o ID "resultados-pesquisa" será o container dos resultados.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
        ("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "Resultado não encontrado. Você precisa digitar algo relacionado a teoria musical ex: escala maior."
        return

        campoPesquisa = campoPesquisa.toUpperCase()

    }

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item do array 'dados'.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase() ||
            titulo.dado.titulo.toUpperCase()
        descricao = dado.descricao.toLowerCase()
        descricao = dado.descricao.toUpperCase()
        tags = dado.tags.toLocaleLowerCase()

        //Se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria uma nova div para cada resultado, com a classe 'item-resultado'.
            resultados += `<div class="item-resultado">
            <h2>${dado.titulo} </h2> <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Saiba mais</a> </div>`;


        }




    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"

    }

    // Atribui o conteúdo HTML gerado à seção de resultados.
    section.innerHTML = resultados;
}
//console.log(dados); // Imprime o conteúdo do array 'dados' no console.