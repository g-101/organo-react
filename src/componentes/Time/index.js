import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';
import './Time.css';

const Time = props => {
  const { time, colaboradores, aoDeletarColaborador, aoMudarCor, aoFavoritar } = props;

  const mudarCor = evento => aoMudarCor(evento.target.value, time.nome);

  return colaboradores.length > 0 ? (
    <section className="time" style={{ backgroundColor: hexToRgba(time.cor, '0.6') }}>
      <input type="color" className="input-cor" value={time.cor} onChange={mudarCor} />
      <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map(colaborador => {
          // console.log('renderizando colaborador');

          return (
            <Colaborador
              corFundo={time.cor}
              key={colaborador.id}
              colaborador={colaborador}
              aoDeletarColaborador={aoDeletarColaborador}
              aoFavoritar={aoFavoritar}
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
