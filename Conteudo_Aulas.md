# Curso Alura JavaScript: Métodos de Arrays

## Aula 01 - ForEach: Função para cada Elemento

### Aula 01 - Apresentação - Video 1

Nesta aula do curso de JavaScript: métodos de array, o instrutor Guilherme Lima apresenta o projeto AluraBooks. O objetivo do curso é utilizar uma API para extrair informações de uma lista de objetos e exibi-las na tela. Serão criados filtros para livros de front-end, back-end, livros de dados e livros disponíveis. Serão abordadas técnicas de manipulação de elementos no DOM e no JavaScript, além de ordenação de preços. O foco principal será nos métodos especiais do JavaScript, como filter, forEach, map, reduce e sort. O curso é indicado tanto para iniciantes quanto para aqueles que já possuem conhecimento, pois sempre há algo interessante para aprender e analisar. O instrutor espera que seja um momento de aprendizado proveitoso para todos os participantes.

### Aula 01 - Carregando o projeto base - Video 2

Nesta aula, o instrutor inicia os estudos sobre métodos de array com JavaScript. Ele mostra como carregar o projeto base, renomeado para "alura_books", utilizando o Visual Studio Code e a extensão Live Server. O instrutor explica a estrutura da aplicação e destaca o arquivo "equisicao.txt", que contém um endereço para buscar informações de livros em formato JSON. Ele comenta que o desafio será fazer uma requisição para exibir as informações dos livros na tela, utilizando o DOM.

### Aula 01 - Fetch de livros no console - Video 3

Nesta aula, o instrutor mostra como realizar uma requisição para um endpoint e obter um arquivo JSON contendo informações sobre livros. O código JavaScript é organizado em uma pasta chamada "app" e um arquivo chamado "main.js" é criado para realizar a requisição e armazenar os livros em uma variável chamada "livros". É utilizada uma função assíncrona chamada "getBuscarLivrosDaAPI" que utiliza o método "fetch" para fazer a requisição e o método "json()" para transformar a resposta em um objeto JSON. Os livros são exibidos no console utilizando o método "console.log()" e também em forma de tabela utilizando o método "console.table()". No próximo trecho do vídeo, será explicado como manipular o DOM para exibir os livros na tela utilizando métodos especiais de arrays em JavaScript.

### Aula 01 - Como funciona o forEach - Video 4

Nesta aula, o instrutor discute a forma de exibir as informações de um JSON na tela. Ele apresenta a ideia de utilizar um loop for para percorrer a lista de livros, mas aponta que essa abordagem é verbosa. Em seguida, ele propõe o uso do método forEach() para simplificar o código. O forEach() executa uma função para cada elemento do array, permitindo criar uma classe de livro para cada elemento. O instrutor demonstra como utilizar o forEach() e mostra que o resultado é o mesmo obtido com o loop for. Ele também menciona que é possível passar outros parâmetros para a função, como o índice do elemento e o próprio array. A aula termina com a promessa de mostrar como criar uma função com o forEach() para exibir os livros na tela.

### Aula 01 - forEach de livros - Video 5

Nesta aula, o instrutor ensina como exibir uma lista de livros na tela utilizando JavaScript. Ele mostra como selecionar o elemento HTML onde os livros serão inseridos e cria uma função para exibir os livros na tela. Utilizando o loop forEach, ele percorre cada livro da lista e insere suas informações no elemento HTML. Ele também demonstra como alterar dinamicamente o valor dos atributos de uma tag de imagem para exibir a imagem e o texto alternativo de cada livro. No final, ele mostra o resultado da requisição e do loop forEach, exibindo uma lista de livros na tela.

### Aula 01 Conclusão - Nesta aula

Carregamos o projeto base que vamos usar nesse treinamento;  
Realizamos o uma requisição para pegar todos os livros da API de exemplo;  
Entendemos que o método forEach é bastante parecido com o for antigo, basicamente faz o mesmo que ele, mas numa forma bem mais elegante;  
Exibimos os livros da API manipulando o DOM através do método forEach.

## Aula 02 - Map: Novo array modificado

### Aula 02 - Como funciona o map - Video 1

Nesta aula, o instrutor aborda o uso do método map() em JavaScript. O map() é utilizado para invocar uma função de callback para cada elemento de um array e retorna um novo array como resultado. O instrutor demonstra um exemplo prático multiplicando cada elemento de um array por dois. Ele destaca que o map() não altera o array original, mas cria uma cópia com os novos valores. Além disso, o map() retorna um valor, ao contrário do método forEach(), e é possível utilizar o retorno da função para realizar outras ações.  
O método map invoca a função passada por argumento para cada elemento do array e devolve um novo Array como resultado.  
E essa é a principal diferença entre os métodos map e forEach. Sendo assim, o forEach manipula os dados reais de um array e o map cria um novo array.

### Aula 02 - Desconto com map - Video 2

Nesta aula, o instrutor organiza o código em arquivos separados e implementa a funcionalidade de aplicar descontos nos preços dos livros. Ele utiliza os métodos forEach e map para percorrer a lista de livros e realizar as operações necessárias. Além disso, ele utiliza o spread operator e o método toFixed para fazer cópias de objetos e formatar os valores exibidos na tela.

### Aula 02 Conclusão - Nesta aula

Aprendemos que o método map executa uma função para cada elemento do array e devolve um novo array como resultado;  
Aplicamos um desconto através do método map nos preços de cada livro do nosso projeto e entendemos a diferença entre os métodos forEach e map.

## Aula 03 - Filter: aplicando filtros diferentes

### Aula 03 - filter - Video 1

Nesta aula, o palestrante discute a implementação de filtros em um projeto. Ele explica o funcionamento do método filter em JavaScript, que cria um novo array com base em uma função que retorna um valor booleano. O objetivo é filtrar elementos de um array de acordo com determinados critérios, como categorias de livros. O palestrante demonstra exemplos práticos de como utilizar o método filter para criar novos conjuntos de elementos. Ele destaca a importância desse método para a criação de filtros em projetos.

### Aula 03 - Como funciona o filter - Video 2

Nesta aula, o instrutor explica como aplicar o método filter em botões de uma página web. Ele cria um novo arquivo chamado metodoFilter.js e adiciona-o ao projeto. Em seguida, ele adiciona um evento de clique a um botão específico. Ao clicar no botão, é executada a função filtrarLivrosDeFront(), que utiliza o método filter para filtrar os livros da categoria "front-end" e armazená-los em uma variável chamada livrosFiltrados. Os livros filtrados são exibidos no console utilizando console.table(livrosFiltrados). O instrutor menciona a possibilidade de aplicar o mesmo comportamento a outros botões de categorias diferentes, como "back-end" e "dados", e promete abordar esse assunto no próximo vídeo.

### Aula 03 - Filter de livros - Video 3

Nesta aula, o instrutor mostra como otimizar o código ao atribuir a mesma função a vários botões. Ele utiliza o método document.querySelectorAll para selecionar todos os botões com a classe .btn e atribui a lista resultante a uma variável chamada botoes. Em seguida, ele utiliza o método forEach para percorrer cada botão da lista e atribuir a função filtrarLivros a cada um deles.

No entanto, o instrutor percebe que todos os botões estão filtrando os livros de front-end, o que não é o comportamento desejado. Ele explica que é necessário identificar qual botão foi clicado para saber qual é a categoria correspondente. Para isso, ele utiliza o método getElementById para obter o botão específico que foi clicado e, em seguida, utiliza a propriedade value para obter a categoria desse botão.

Com a categoria identificada, o instrutor utiliza a função filter para filtrar os livros com base nessa categoria. Ele utiliza o método console.table para exibir os livros filtrados no console. O instrutor demonstra que, ao clicar nos diferentes botões, apenas os livros da categoria correspondente são exibidos no console.

O próximo desafio mencionado pelo instrutor é exibir esses livros filtrados na tela.

### Aula 03 - Livros filtrados na tela - Video 4

Nesta aula, o instrutor discute sobre a funcionalidade de exibir os livros na tela ao clicar nos botões correspondentes. Ele sugere utilizar a função exibirOsLivrosNaTela presente no método forEach para substituir o console.table e exibir os livros na tela. Porém, ao clicar novamente nos botões, os livros são repetidos. Para resolver esse problema, ele propõe modificar o elemento elementoParaInserirLivros no método forEach e limpar o conteúdo do elemento utilizando a propriedade .innerHTML e atribuindo uma string vazia. Dessa forma, apenas os livros correspondentes serão exibidos na tela. O instrutor destaca a reutilização do código já desenvolvido e a possibilidade de cruzar informações entre os métodos forEach e filter para realizar o filtro dos botões.

### Aula 03 Conclusão - Nesta aula:

Realizamos testes na documentação oficial do JavaScript para entender como o método filter funciona;

Atribuímos um evento de click no botão para filtrar os livros por categoria através do filter;

Exibimos os livros filtrados por categoria e que estejam disponíveis.

## Aula 04 - Sort: Ordenando a lista

### Aula 04 - Como funciona o sort - Video 1

Nesta aula, o instrutor discute sobre o método array.prototype.sort() em JavaScript, que é responsável por ordenar os elementos de um array. Ele explica que a ordenação não é necessariamente estável e depende da conversão dos elementos para string e da pontuação de código unicode de cada caractere. O instrutor mostra exemplos de ordenação de frutas e números para ilustrar como a função de comparação pode ser utilizada para definir a ordem dos elementos. Ele também menciona que elementos undefined são classificados no final do array. Para obter uma ordenação estável, o instrutor cria uma função de comparação que retorna a diferença entre os valores a e b. Ele demonstra como usar essa função para obter a ordenação desejada e destaca a importância de aplicar esse conhecimento em projetos que necessitam de ordenação.

### Aula 04 - sort de livros - Video 2

Nesta aula, o instrutor ensina como implementar a ordenação por preço em um projeto utilizando o método sort() em JavaScript. Ele cria uma função chamada ordenarLivrosPorPreco que utiliza o sort() para ordenar os livros por preço. Além disso, ele explica a importância de chamar a função exibirOsLivrosNaTela para mostrar os livros ordenados corretamente. O instrutor também mostra como passar uma função de comparação para o sort(), utilizando a sintaxe (a, b) => a.preco - b.preco, para ordenar os livros de acordo com o critério desejado. No final, ele testa a funcionalidade e os livros são exibidos corretamente na tela, ordenados pelo preço.

### Aula 04 - Livros indisponíveis - Video 3

Nesta aula, o instrutor discute sobre a implementação de uma funcionalidade no projeto AluraBooks que permite aos usuários saberem se um livro está disponível ou não. Ele mostra como utilizar a propriedade "quantidade" de cada livro para verificar se ele está disponível. O instrutor cria uma função chamada "verificarDisponibilidadeDoLivro" que retorna a classe correspondente ao estado do livro (disponível ou indisponível). Ele também mostra duas formas de implementar essa verificação: utilizando um "if" tradicional e utilizando o operador ternário. Por fim, o instrutor menciona que ainda falta implementar a funcionalidade de exibir os livros indisponíveis e a ordenação por preço, que serão os próximos desafios do projeto.

### Aula 04 - Filtrando livros disponíveis - Video 4

Nesta aula, aprendemos como implementar filtros para exibir apenas os livros disponíveis em um projeto. Utilizamos o método .filter para percorrer a lista de livros e verificar as condições estabelecidas. Verificamos o valor do botão no arquivo index.html e, se for igual a "disponível", filtramos os livros com base na quantidade disponível. Caso contrário, o filtro é feito com base na categoria selecionada anteriormente. Ao final, verificamos se os filtros estão funcionando corretamente, exibindo apenas os livros disponíveis quando o botão correspondente é selecionado. A implementação foi bem-sucedida e a variável livrosFiltrados foi atualizada de acordo com as condições estabelecidas.

### Aula 04 Conclusão - Nesta aula

Aprendemos como funciona o método de ordenação de array sort;

Ordenamos os livros da aplicação por preço;

Melhoramos a experiência do usuário da aplicação, aplicando uma opacidade nos livros indisponíveis.

## Aula 05 - Sort: Ordenando a lista

### Aula 05 -  - Video 1
