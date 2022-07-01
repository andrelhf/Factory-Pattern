# Pattern Escolhido
Foi escolhido o Factory Pattern

# Explicação
## main.js
Este arquivo possui uma implementação que não utiliza o Factory Pattern

## main2.js
Este arquivo possui uma implementação que utiliza o Factory Pattern

# Vantagens do Factory Patttern
Você evita acoplamentos firmes entre o criador e os produtos concretos.
Princípio de responsabilidade única. Você pode mover o código de criação do produto para um único local do programa, facilitando a manutenção do código.
Princípio aberto/fechado. Você pode introduzir novos tipos de produtos no programa sem quebrar o código cliente existente.

# Desvantagens do Factory Pattern
O código pode se tornar mais complicado, pois você precisa introduzir muitas subclasses novas para implementar o padrão. O melhor cenário é quando você está introduzindo o padrão em uma hierarquia existente de classes criadoras.

# Uma das muitas vantagens da Factory Pattern é a utilização dela no TypeScript, afinal a utilização dela é a base de como as cadeias de heranças no JavaScript funciona. Este padrão ataca principalmente o uso de recursos, permitindo que escondamos a complexidade de criar uma nova instancia a partir do cliente através da clonagem de um objeto já existente e modificação de seus parâmetros. O objeto clonado age como um protótipo para o novo objeto que será instanciado.


# Professor tentei mas não consegui fazer o video, acabei por explicar via texto o que fiz.

No arquivo main.js eu utilizo uma classe construtora chamada funcionario e uso metodos prototypes para herdar as caracteristicas da classe pai e assim realizar a criação do funcionario, onde eu realizo a chamada de duas funções que herdam caracteristicas da classe construtora. Nesse metodo eu realizo a criação de um metodo construtor sem nenhum pattern

No arquivo main2.js eu utilizo uma função construtora chamada PessoaFactory que tem como parametro nome e sobrenome e através dessa função que cria pessoas, ela também que cria funcionário que também é uma pessoa e neste caso para a construção do código eu utilizei o factory method, onde a função filha herda as caracteristicas da função pai que seria PessoaFactory e funcionario tem nome e sobrenome, mas ja a função funcionario tem como parametro cargo, ou seja, ela herda nome e sobrenome e ainda tem mais um parametro que é o cargo.
