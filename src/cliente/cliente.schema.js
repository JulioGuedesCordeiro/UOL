import joi from 'joiptbr';

const regras = joi.object().keys({
  cliente_id: joi.number().label('Id do cliente'),
  nome: joi.string().min(3).max(100).required().label('Nome'),
  sexo: joi.string().valid('MASCULINO', 'FEMININO', 'OUTRO').required().label('Sexo'),
  data_nascimento: joi
    .date()
    .greater('1920-01-01')
    .less('2003-01-01')
    .required()
    .label('Data de Nascimento'),
  cidade_id: joi.number().required().label('Cidade id'),
});

const regrasNome = joi.object().keys({
    nome: joi.string().min(3).max(100).required().label('Nome'),
  });

module.exports = {
  regras,
  regrasNome
};
