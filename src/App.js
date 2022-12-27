import { useState } from 'react';

import { timesData, colaboradoresInicial } from './data';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
  const [colaboradores, setColaboradores] = useState(colaboradoresInicial);
  const [times, setTimes] = useState(timesData);

  const cadastrarColaborador = colaborador => {
    // debugger;

    setColaboradores([...colaboradores, colaborador]);
  };
  const deletarColaborador = id => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  };

  const mudarCorTime = (cor, nome) => {
    setTimes(
      times.map(time => {
        if (time.nome === nome) {
          time.cor = cor;
        }
        return time;
      })
    );
  };
  const cadastrarTime = novoTime => {
    setTimes([...times, novoTime]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        aoCadastrarTime={cadastrarTime}
        aoCadastrarColaborador={cadastrarColaborador}
        times={times.map(time => time.nome)}
      />
      {times.map(time => (
        <Time
          key={time.nome}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletarColaborador={deletarColaborador}
          aoMudarCor={mudarCorTime}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
