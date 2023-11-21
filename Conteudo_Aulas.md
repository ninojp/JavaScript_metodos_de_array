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

## Aula 03 - 

### Aula 03 -  - Video 1