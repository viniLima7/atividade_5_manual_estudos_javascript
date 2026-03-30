# Introdução 1 
O JavaScript é um tipo de linguagem que implementa itens complexos na página web, ele funciona para websites que vão além de apenas mostrar dados visuais ao usuário. Ele implementa conteúdos que se atualizam em um intervalo de tempo, quando o site utiliza gráficos 2S ou até 3D. 
Resumidamente o JavaScript funciona como um vlaidador de dados, ocasionando na atualização dinamica do site.
Ele é complementar ao HTML e CSS pois é implementado interatividade e dinamismo as duas linguagens referidas.

# Formas de uso no HTML 2

Existem duas maneiras de incorporar JavaScript em um documento HTML:

=> Interno: Uso da tag <script> dentro do <head> ou <body> do documento HTML.
=> Externo: Linkar arquivos JavaScript externos usando a tag <script src=”caminho/para/arquivo.js”></script>.

# Variáveis, tipos e escopo 3
O que é uma variável?
    Variável em programação é um espaço reservado na memória do computador usado para armazenar dados (como números, textos ou valores lógicos) que podem ser modificados durante a execução de um programa.
Como declarar uma variável?
    Para declar uma variável temos que definir o tipo, o nome, e em alguns casos o valor. No JavaScript existem três tipos de variáveis principais que podemos usar: const, let e var.
    
    const => É um tipo de variável moderno do JavaScript e quando você define o valor dessa variável ele não pode mais ser alterado ao longo do código.
    let => É também uma variável moderna do JavaScript, mas ao contrário do tipo const o let permite o valor ser alterado ao longo do código.
    var => É um tipo antigo que pode ser alterado assim como o let, mas o grande problema é que essa variável "vaza" pelo código e por isso não usamos.


# Operadores, comparações e lógica 4 
Operadores aritméticos principais.
Módulo(%) - Retorna o inteiro restante da divisão. 
    Exemplo: 
        12 % 5 = 2;[[
Incremento(++) - Aumenta o valor da variávl em 1.
    Exemplo:]]
        variavel X = 3; //x retorna 3
        variavel y = ++x; //x retorna 4, y retorna 4
Descremento(--) - Subtrai um de seu operando.
    Exemplo:
        variavel x = 3 //x retorna 3
        variavel y = --x //x retorna 2, y retorna 2
Negação(-) - Retorna a negação do operando.
    Exemplo:
        Se X é 3, então -x retorna -3
Adição(+) - Tenta converter o operando em um número, sempre que possível.
    Exemplo:
        +"3" retorna 3. +true retorna 1
Exponenciação(**) - Calcula a base elevado á potência.2S
    Exemplo:
        2 ** 3 retorna 8;

Operadores relacionais principais:
Igualdade Estrita(===) - Retorna true se os operandos forem iguais e do mesmo tipo;
Diferença Estrita(!==) - Retorna true se os operandos não forem iguais ou não forem do mesmo tipo.
Maior que(>) - Retorna true se o operando da esquerda for maior que o da direita.
Menor que(<) - Retorna true se o operando da esquerda for menor que o da direita.
Maior ou igual(>=) - Retorna true se o operando da esquerda for maior ou igual ao da direita.
Menor ou igual(<=) - Retorna true se o operando da esquerda for menor ou igual ao da direita.

Operadores lógicos principais:
AND(&&) → Retorna true apenas se todas as condições forem verdadeiras.
OR(||) → Retorna true se pelo menos uma condição for verdadeira.
NOT(!) → Inverte o valor lógico da condição.

Diferença entre "==" e "===";
O que significa cada um:
Igualdade simples(==) - Compara apenas os valores, permitindo conversão automática de tipos.
Igualdade estrita (===) - Compara valores e tipos ao mesmo tempo, sem realizar conversão.
    


# Estruturas condicionais 5
if...Else
A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

Switch
A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case.


# Manipulação de página com JavaScript 8
O document representa toda a página HTML carregada no navegador e é a partir dele que conseguimos acessar e modificar os elementos da página. Para selecionar elementos, pode ser usado o getElementById(), que busca pelo id de forma rápida, ou o querySelector(), que é mais moderno e permite usar seletores CSS. Quando precisamos pegar vários elementos ao mesmo tempo, usamos o querySelectorAll().

Nos formulários, algumas propriedades são bem úteis. A .value serve para pegar ou alterar o que o usuário digitou em um campo, enquanto a .checked mostra se um checkbox ou botão está marcado. Já o checkValidity() ajuda a verificar se os dados foram preenchidos corretamente.

Para mexer no conteúdo da página, usamos o .textContent, que altera o texto de um elemento. Também podemos mudar o visual com o .style, que permite modificar cores, tamanhos e outras propriedades diretamente. O classList ajuda a adicionar ou remover classes CSS, facilitando a mudança de estilos.

Além disso, o JavaScript permite responder às ações do usuário usando o addEventListener(), que pode detectar cliques e outras interações. O DOMContentLoaded garante que o código só vai rodar depois que a página carregar completamente.

Por fim, também dá para criar e remover elementos na página. O createElement() cria novos elementos, o appendChild() adiciona eles na página, e o remove() serve para excluir elementos. Tudo isso faz com que o site fique mais dinâmico e funcional.n
paulo 8 5 9
