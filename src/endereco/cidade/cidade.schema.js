import joi from 'joiptbr';

const regras = joi.object().keys({
  cidade_id: joi.number().label('Id da Cidade'),
  nome: joi.string().min(3).max(100).required().label('Nome'),
  codigo_cidade: joi.number().required().min(0).max(9999999).label('Código do IBGE da Cidade'),
  estado_id: joi.number().required().label('Estado Id'),
});

module.exports = {
  regras,
};
