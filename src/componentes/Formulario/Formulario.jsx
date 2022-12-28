import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

export const Formulario = ({ aoCadastrarColaborador, times, aoCadastrarTime }) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');

  const submeterColaborador = evento => {
    evento.preventDefault();

    aoCadastrarColaborador({
      id: uuidv4(),
      nome,
      cargo,
      imagem,
      time,
    });

    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };

  const submeterTime = evento => {
    evento.preventDefault();

    aoCadastrarTime({
      id: uuidv4(),
      nome: nomeTime,
      cor: corTime,
    });

    setNomeTime('');
    setCorTime('');
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={submeterColaborador}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome"
          valor={nome}
          aoAlterar={valor => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o cargo"
          valor={cargo}
          aoAlterar={valor => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterar={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterar={valor => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form className="formulario" onSubmit={submeterTime}>
        <h2>Preencha os dados para criar um novo time</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterar={valor => setNomeTime(valor)}
        />
        <Campo
          type="color"
          obrigatorio={true}
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterar={valor => setCorTime(valor)}
        />

        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};
