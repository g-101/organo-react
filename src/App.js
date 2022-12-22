import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

const times = [
  {
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF',
  },
  {
    nome: 'Data Science',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2',
  },
  {
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8',
  },
  {
    nome: 'UX e Design',
    corPrimaria: '#D86EBF',
    corSecundaria: '#FAE95F5',
  },
  {
    nome: 'Mobile',
    corPrimaria: '#FEBA05',
    corSecundaria: '#FFF5D9',
  },
  {
    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF',
  },
];

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = colaborador => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };
  console.log('colaboradores: ', colaboradores);
  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        times={times.map(time => time.nome)}
      />
      {times.map(time => (
        <Time
          key={time.nome}
          nome={time.nome}
          primaria={time.corPrimaria}
          secundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;
