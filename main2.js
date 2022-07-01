function PessoaFactory(nome, sobrenome) {
  PessoaFactory.prototype.Pessoa = function () {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  PessoaFactory.prototype.Funcionario = function (cargo) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.cargo = cargo
  }

  PessoaFactory.prototype.criaPessoa = function () {
    return new PessoaFactory.prototype.Pessoa()
  }

  PessoaFactory.prototype.criaFuncionario = function (cargo) {
    return new PessoaFactory.prototype.Funcionario(cargo)
  }
}

const pessoaFactory = new PessoaFactory('André', 'Fronckowiak')
const funcionario1 = pessoaFactory.criaFuncionario('Suporte')

console.log(funcionario1.cargo)
