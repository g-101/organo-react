import './ListaSuspensa.css';

const ListaSuspensa = props => {
  const { label, itens, valor, aoAlterar, obrigatorio } = props;
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={evento => aoAlterar(evento.target.value)}
        required={obrigatorio}
        value={valor}
      >
        <option value=""></option>;
        {itens.map(item => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
