import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
    const id = uuidv4();
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
          time.cor = cor;
        }
        return time;
      })
    );
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        // aoColaboradorCadastrado={colaborador => adicionarNovoColaborador(colaborador)}
        aoCadastrarColaborador={cadastrarColaborador}
        times={times.map(time => time.nome)}
      />
      {times.map(time => (
        <Time
          key={time.nome}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          aoMudarCor={mudarCorTime}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
