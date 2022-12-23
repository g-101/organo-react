import './Colaborador.css';

const Colaborador = ({ nome, cargo, imagem, fundo }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: fundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="colaborador-rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
