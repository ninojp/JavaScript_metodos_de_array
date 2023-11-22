"use strict";

// const btnFiltrarLivros = document.getElementById('btnFiltrarLivrosFront');
// // console.log(btnFiltrarLivros)
// btnFiltrarLivros.addEventListener("click", filtrarLivros);

const botoes = document.querySelectorAll(".btn");
// console.log(botoes)
botoes.forEach(btns => btns.addEventListener('click', filtrarLivros));

function filtrarLivros(){
    const atualBntClick = document.getElementById(this.id);
    const btnValue = atualBntClick.value
    let livrosFiltrados = btnValue == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == btnValue);
    // console.table(livrosFiltrados);
    exibirOsLivrosNaTela(livrosFiltrados)
};

