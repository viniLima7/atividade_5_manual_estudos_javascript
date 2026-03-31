# Introdução 1 
O JavaScript é um tipo de linguagem que implementa itens complexos na página web, ele funciona para websites que vão além de apenas mostrar dados visuais ao usuário. Ele implementa conteúdos que se atualizam em um intervalo de tempo, quando o site utiliza gráficos 2S ou até 3D. 
Resumidamente o JavaScript funciona como um vlaidador de dados, ocasionando na atualização dinamica do site.
Ele é complementar ao HTML e CSS pois é implementado interatividade e dinamismo as duas linguagens referidas.

# Formas de uso no HTML 2

Existem duas maneiras de incorporar JavaScript em um documento HTML:

=> Interno: Uso da tag <script> dentro do <head> ou <body> do documento HTML.
=> Externo: Linkar arquivos JavaScript externos usando a tag <script src=”caminho/para/arquivo.js”></script>.

# Variáveis, tipos e escopo 3
## O que é uma variável?

Variável em programação é um espaço reservado na memória do computador usado para armazenar dados (como números, textos ou valores lógicos) que podem ser modificados durante a execução de um programa.

## Como declarar uma variável?

Para declar uma variável temos que definir o tipo, o nome, e em alguns casos o valor. No JavaScript existem três tipos de variáveis principais que podemos usar: const, let e var.
    
    const => É um tipo de variável moderno do JavaScript e quando você define o valor dessa variável ele não pode mais ser alterado ao longo do código.
    let => É também uma variável moderna do JavaScript, mas ao contrário do tipo const o let permite o valor ser atualizado ao longo do código.
    var => É um tipo antigo que pode ser redeclarado, mas o grande problema é que esse tipo de variável "vaza" pelo código por conta do seu escopo global e por isso usamos o let no lugar da var.

## Como podem ser usadas?

A __const__ ela pode ser usada para, por exemplo, criar um id ou definir uma porta fixa.

Já a __let__ por ser um valor variável ela acaba sendo mais utíl para casos como uma variável controladora que vária o valor em 1 em 1 

A __var__ por ser um caso muito peculiar e ter o escopo global iremos usar somente em casos específicos em que precisaremos chamar ela em outro bloco ou função, mas só em casos específicos.

## Escopos

É o contexto atual de __execução__, em que __valores__ e expressões são "visíveis" ou podem ser referenciadas. Se uma variável ou outra expressão não estiver "no escopo atual", então não está disponível para uso. Os escopos também podem ser em camadas em uma hierarquia, de modo que os escopos filhos tenham acesso aos escopos pais, mas não vice-versa.

### Escopo Global

É possível acessar variáveis com escopo global de qualquer lugar no programa.

### Escopo de Função

Quando você cria variáveis em uma função JavaScript com as palavras-chave var, let ou const, as variáveis são locais em relação à função. Assim, elas só podem ser acessadas dentro da função. As variáveis locais são criadas quando uma função é iniciada e são efetivamente excluídas quando a execução da função termina.

### Escopo de Bloco

Os blocos são usados para agrupar uma ou várias instruções. É possível usar as palavras-chave const ou let para declarar uma variável local de escopo de bloco. Não é possível usar a palavra-chave var para declarar variáveis com escopo de bloco.

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


# Estruturas de repetição 6

## For

A instrução __for__ cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

### Sintaxe

    for ([inicialização]; [condição]; [expressão final]){
        declaração
    }

### Inicialização

   Uma expressão (incluindo expressões de atribuição) ou declarações variáveis. Geralmente usada para iniciar o contador de variáveis. Esta expressão pode, opcionalmente, declarar novas variáveis com a palavra chave var. Essas variáveis não são locais no loop, isto é, elas estão no mesmo escopo que o loop for está. Variáveis declaradas com let são locais para a declaração.

### Condição

Uma expressão para ser avaliada antes de cada iteração do loop. Se esta expressão for avaliada para true, declaração será executado. Este teste da condição é opcional. Se omitido, a condição sempre será avaliada como verdadeira. Se a expressão for avaliada como falsa, a execução irá para a primeira expressão após a construção loop for.

 ### Expressão final

Uma expressão que será validada no final de cada iteração de loop. Isso ocorre antes da próxima avaliação da condição. Geralmente usado para atualizar ou incrementar a variável do contador.

### Declaração

Uma declaração que é executada enquanto a condição for verdadeira. Para executar múltiplas condições dentro do loop, use uma instrução de bloco ({...}) para agrupar essas condições. Para não executar declarações dentro do loop, use uma instrução vazia (;).

## While 

### Sintaxe

    while (condição) {
        rotina
    }

### Condição

Uma expressão avaliada antes de cada passagem através do laço. Se essa condição for avaliada como verdadeira, a rotina é executada. Quando a condição for avaliada como falsa, a execução continua na declaração depois do laço while.

### Rotina

Uma declaração que é executada enquanto a condição é avaliada como verdadeira. Para executar multiplas declarações dentro de um laço, use uma declaração em bloco ({ ... }) para agrupar essas declarações.

# Funções 7

Uma função é um bloco de código reutilizável que executa uma tarefa específica.
A declaração de uma função é feita com function, seguida do nome, parênteses e chaves, onde fica o código que será executado.
    A chamada de uma função acontece ao usar o nome dela seguido de parênteses, fazendo com que o código interno seja executado.
        Uma função com parâmetro recebe valores dentro dos parênteses, permitindo trabalhar com dados externos.
            Uma função com retorno utiliza return para devolver um valor, que pode ser armazenado ou usado em outra parte do código.


# Manipulação de página com JavaScript 8
O document representa toda a página HTML carregada no navegador e é a partir dele que conseguimos acessar e modificar os elementos da página. Para selecionar elementos, pode ser usado o getElementById(), que busca pelo id de forma rápida, ou o querySelector(), que é mais moderno e permite usar seletores CSS. E o querySelectorAll() é usado quando precisa-se pegar vários elementos ao mesmo tempo.
A .value serve para pegar ou alterar o que o usuário digitou em um campo, enquanto a .checked mostra se um checkbox ou botão está marcado. Já o checkValidity() ajuda a verificar se os dados foram preenchidos corretamente em um formulário.

Para mexer no conteúdo da página, o .textContent, pode alterar o texto de um elemento. O visual pode ser ajustado com o .style, assim modificando cores, tamanhos... O classList ajuda a adicionar ou remover classes CSS, facilitando a mudança de estilos.

Além disso, o addEventListener(), pode detectar cliques e outras interações, assim respondendo às ações do usuário. E o DOMContentLoaded garante que o código só vai rodar depois que a página carregar completamente.

Já o createElement() cria novos elementos, o appendChild() adiciona eles na página, e o remove() serve para excluir elementos. Assim fazendo o site ficar mais funcional.

