import './Rodape.css';

import fbIcon from '../../imagens/fb.png';
import igIcon from '../../imagens/ig.png';
import twIcon from '../../imagens/tw.png';
import logo from '../../imagens/logo.png';

export const Rodape = () => {
  return (
    <footer>
      <div className="rodape">
        <ul>
          <li>
            <img src={fbIcon} alt="logo do facebook" />
          </li>
          <li>
            <img src={igIcon} alt="logo do instagram" />
          </li>
          <li>
            <img src={twIcon} alt="logo do twitter" />
          </li>
        </ul>
        <img src={logo} alt="logo alura" />
        <p>Desenvolvido por Alura.</p>
      </div>
    </footer>
  );
};
