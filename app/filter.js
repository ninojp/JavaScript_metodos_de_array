"use strict";

// const btnFiltrarLivros = document.getElementById('btnFiltrarLivrosFront');
// // console.log(btnFiltrarLivros)
// btnFiltrarLivros.addEventListener("click", filtrarLivros);

const botoes = document.querySelectorAll(".btn");
// console.log(botoes)
botoes.forEach(btns => btns.addEventListener('click', filtrarLivros));

function filtrarLivros(){
    const atualBntClick = document.getElementById(this.id);
    const categoriaBtn = atualBntClick.value
    let livrosFiltrados = livros.filter(livro => 
        livro.categoria === categoriaBtn
    );
    // console.table(livrosFiltrados);
    exibirOsLivrosNaTela(livrosFiltrados)
};

