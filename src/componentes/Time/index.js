import Colaborador from '../Colaborador';
import './Time.css';

const Time = props => {
  const { id, nome, primaria, secundaria, colaboradores, aoDeletar } = props;

  return colaboradores.length > 0 ? (
    <section className="time" style={{ backgroundColor: secundaria }}>
      <h3 style={{ borderColor: primaria }}>{nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map(colaborador => {
          console.log('renderizando colaborador');

          return (
            <Colaborador
              fundo={primaria}
              key={id}
              colaborador={colaborador}
              aoDeletar={aoDeletar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ''
  );
};

export default Time;
