import estadoModel from './estado.model';

module.exports.listar = async (req, res, next) => {
  try {
    const resultado = await estadoModel.listar();
    return res.status(200).json({ messagem: 'Estados encontrados com sucesso', data: resultado });
  } catch (erro) {
    return next(erro);
  }
};
