import Colaborador from '../Colaborador';
import './Time.css';

const Time = props => {
  const { time, colaboradores, aoDeletar, mudarCor } = props;

  const onMudarCor = evento => mudarCor(evento.target.value, time.nome);
  return colaboradores.length > 0 ? (
    <section className="time" style={{ backgroundColor: time.corPrimaria }}>
      <input value={time.cor} onChange={onMudarCor} type="color" className="input-cor" />
      <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map(colaborador => {
          // console.log('renderizando colaborador');

          return (
            <Colaborador
              fundo={time.corPrimaria}
              key={colaborador.id}
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
