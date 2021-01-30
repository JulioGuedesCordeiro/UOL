module.exports = class Cidade {
    constructor(body) {
      this.cidade_id = body.cidade_id;
      this.nome = body.nome;
      this.codigo_cidade = body.codigo_cidade;
      this.estado_id = body.estado_id;
    }
  };
  