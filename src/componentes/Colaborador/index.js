import { AiFillCloseCircle } from 'react-icons/ai';
import './Colaborador.css';

const Colaborador = ({ colaborador, corFundo, aoDeletar }) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle className="deletar" onClick={aoDeletar} />

      <div className="cabecalho" style={{ backgroundColor: corFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="colaborador-rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
