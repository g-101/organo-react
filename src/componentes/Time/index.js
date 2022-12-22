import Colaborador from '../Colaborador';
import './Time.css';

const Time = props => {
  console.log('time: ', props.colaboradores);
  const colaboradores = props.colaboradores.map(colaborador => (
    <Colaborador
      nome={colaborador.nome}
      cargo={colaborador.cargo}
      imagem={colaborador.imagem}
      key={colaborador.imagem}
    />
  ));

  return props.colaboradores.length > 0 ? (
    <section style={{ backgroundColor: props.secundaria }} className="time">
      <h3 style={{ borderColor: props.primaria }}>{props.nome}</h3>
      <div className="colaboradores">{colaboradores}</div>
    </section>
  ) : (
    ''
  );
};

export default Time;
