import Colaborador from '../Colaborador';
import './Time.css';

const Time = props => {
  return props.colaboradores.length > 0 ? (
    <section className="time" style={{ backgroundColor: props.secundaria }}>
      <h3 style={{ borderColor: props.primaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map(colaborador => (
          <Colaborador
            fundo={props.primaria}
            key={colaborador.id}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ''
  );
};

export default Time;
