import './Campo.css';

const Campo = ({ type = 'text', label, valor, obrigatorio = false, placeholder, aoAlterar }) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = evento => {
    aoAlterar(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default Campo;
