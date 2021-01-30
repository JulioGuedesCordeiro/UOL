import { UnprocessableEntity, NotFound } from '../exceptions';
import clienteModel from './cliente.model';
import clienteService from './cliente.service';
import Cliente from './Cliente';
import cidadeModel from '../endereco/cidade/cidade.model';
import Schema from './cliente.schema';

module.exports.cadastrar = async (req, res, next) => {
  const { error, value } = Schema.regras.validate(req.body);
  try {
    if (error) {
      const { details } = error;
      const mensagem = details.map((i) => i.message).join(',');
      throw new UnprocessableEntity(mensagem.replace('"', '').replace('"', ''));
    }
    if ((await cidadeModel.obterPorId(value.cidade_id)) == null) {
      throw new NotFound('A cidade informada não foi encontrada');
    }
    const cliente = new Cliente(value);
    cliente.calculaIdadeComBaseNaDataDeNascimento();
    const resultado = await clienteService.salvar(cliente);
    return res.status(200).json({ messagem: 'Cliente cadastrado com sucesso', data: resultado });
  } catch (erro) {
    return next(erro);
  }
};

module.exports.editar = async (req, res, next) => {
  const { error, value } = Schema.regrasNome.validate(req.body);
  try {
    if (error) {
      const { details } = error;
      const mensagem = details.map((i) => i.message).join(',');
      throw new UnprocessableEntity(mensagem.replace('"', '').replace('"', ''));
    }

    const resultado = await clienteModel.obterPorId(req.params.id);
    if (resultado == null) {
      throw new NotFound('O cliente informado não foi encontrado');
    }

    const cliente = new Cliente(resultado.toJSON());
    cliente.alteraNomeNaEdicao(value.nome);

    const clienteDB = await clienteService.salvar(cliente);
    return res.status(200).json({ messagem: 'Cliente atualizado com sucesso', data: clienteDB });
  } catch (erro) {
    return next(erro);
  }
};

module.exports.obterPorNome = async (req, res, next) => {
  try {
    const resultado = await clienteModel.obterPorNome(req.params.nome);
    if (resultado == null) {
      throw new NotFound('O cliente informado não foi encontrado');
    }
    return res.status(200).json({ messagem: 'Cliente encontrado com sucesso', data: resultado });
  } catch (erro) {
    return next(erro);
  }
};

module.exports.deletar = async (req, res, next) => {
  try {
    const resultado = await clienteModel.obterPorId(req.params.id);
    if (resultado == null) {
      throw new NotFound('O cliente informado não foi encontrado');
    }
    const cliente = new Cliente(resultado.toJSON());
    cliente.alteraStatusDoClienteParaDeletado();
    await clienteService.salvar(cliente);
    return res.status(200).json({ messagem: 'Cliente deletado com sucesso' });
  } catch (erro) {
    return next(erro);
  }
};

module.exports.obterPorId = async (req, res, next) => {
  try {
    const resultado = await clienteModel.obterPorId(req.params.id);
    if (resultado == null) {
      throw new NotFound('O cliente informado não foi encontrado');
    }
    return res.status(200).json({ messagem: 'Cliente encontrado com sucesso', data: resultado });
  } catch (erro) {
    return next(erro);
  }
};
