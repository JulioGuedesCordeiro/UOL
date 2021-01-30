import { UnprocessableEntity, NotFound } from '../../exceptions';
import estadoModel from '../estado/estado.model';
import cidadeModel from './cidade.model';
import cidadeService from './cidade.service';
import cidade from './cidade';
import Schema from './cidade.schema';

module.exports.cadastrar = async (req, res, next) => {
  const { error, value } = Schema.regras.validate(req.body);
  try {
    if (error) {
      const { details } = error;
      const mensagem = details.map((i) => i.message).join(',');
      throw new UnprocessableEntity(mensagem.replace('"', '').replace('"', ''));
    }
    if ((await estadoModel.verificaExistenciaEstado(value.estado_id)) == null) {
      throw new NotFound('O Estado informado não é existente');
    }
    if (
      (await cidadeModel.obterCidadePorNomeNoEstadoInformado(value.nome, value.estado_id)) != null
    ) {
      throw new NotFound('A cidade informada já existe no estado indicado');
    }
    const resultado = await cidadeService.salvar(new cidade(value));
    return res.status(200).json({ messagem: 'Cidade cadastrada com sucesso', data: resultado });
  } catch (erro) {
    return next(erro);
  }
};

module.exports.obterPorNome = async (req, res, next) => {
  try {
    const resultado = await cidadeModel.obterPorNome(req.params.nome);
    if (resultado == null) {
      throw new NotFound('A cidade informada não foi encontrada');
    }
    return res.status(200).json({ messagem: 'Cidade encontrada com sucesso', data: resultado });
  } catch (erro) {
    return next(erro);
  }
};


module.exports.obterPorEstado = async (req, res, next) => {
  try {
    const { pagina, quantidade, estado } = req.query;
    const lista = await cidadeModel.obterPorEstado(pagina, quantidade, estado);
    const { models, pagination } = lista;
    return res.status(200).json({ data: models, pagination });
  } catch (erro) {
    return next(erro);
  }
};