import moment from 'moment';

module.exports = class Cliente {
  constructor(body) {
    this.cliente_id = body.cliente_id;
    this.nome = body.nome;
    this.sexo = body.sexo;
    this.data_nascimento = body.data_nascimento;
    this.cidade_id = body.cidade_id;
    this.idade = body.idade;
    this.status = 'ATIVO';
  }

  calculaIdadeComBaseNaDataDeNascimento() {
    const dataAtual = moment(new Date());
    const dataNascimento = moment(this.data_nascimento);
    const duracao = moment.duration(dataAtual.diff(dataNascimento));
    this.idade = Math.trunc(duracao.asYears());
  }

  alteraNomeNaEdicao(nomeCliente) {
    this.nome = nomeCliente;
  }

  alteraStatusDoClienteParaDeletado() {
    this.status = 'DELETADO';
  }
};
