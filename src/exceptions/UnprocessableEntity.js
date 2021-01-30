const AbstractError = require('./AbstractError');

class UnprocessableEntity extends AbstractError {
  constructor(message = 'Não foi possível processar as instruções.') {
    super(422, message);
  }
}

module.exports = UnprocessableEntity;
