import { useState } from 'react';

import { timesData, colaboradoresInicial } from './data';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
  const [colaboradores, setColaboradores] = useState(colaboradoresInicial);
  const [times, setTimes] = useState(timesData);

  const aoNovoColaboradorAdicionado = colaborador => {
    // debugger;
    const id = 'c' + colaboradores.length;
    colaborador = { ...colaborador, id };
    setColaboradores([...colaboradores, colaborador]);
  };
  const deletarColaborador = () => {
    console.log('deletando colaborador');
  };

  const mudarCorTime = (cor, nome) => {
    setTimes(
      times.map(time => {
        if (time.nome === nome) {
          time.corSecundaria = cor;
        }
        return time;
      })
    );
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        times={timesData.map(time => time.nome)}
      />
      {timesData.map(time => (
        <Time
          key={time.nome}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorTime}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
