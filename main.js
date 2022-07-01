function Funcionario(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
}
Funcionario.prototype.falar = function () {
  console.log(`Meu nome é ${this.nome}`)
}

Funcionario.prototype.falar2 = function () {
  console.log(`Eu prefiro que me chamem de ${this.sobrenome}`)
}

const f1 = new Funcionario('André', 'Fronckowiak')

f1.falar()
f1.falar2()

