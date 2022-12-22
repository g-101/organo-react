import './Colaborador.css';

const Colaborador = props => {
  const { nome, cargo, imagem } = props;
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src={imagem} alt="github avatar" />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
