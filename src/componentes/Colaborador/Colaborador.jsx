import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Colaborador.css';

export const Colaborador = ({ colaborador, corFundo, aoDeletarColaborador, aoFavoritar }) => {
  const deletarColaborador = () => {
    aoDeletarColaborador(colaborador.id);
  };

  const favoritar = () => {
    aoFavoritar(colaborador.id);
  };

  return (
    <div className="colaborador">
      <AiFillCloseCircle size={25} className="deletar" onClick={deletarColaborador} />

      <div className="cabecalho" style={{ backgroundColor: corFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="colaborador-rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <AiFillHeart size={25} onClick={favoritar} color="#ff0000" />
          ) : (
            <AiOutlineHeart size={25} onClick={favoritar} />
          )}
        </div>
      </div>
    </div>
  );
};
