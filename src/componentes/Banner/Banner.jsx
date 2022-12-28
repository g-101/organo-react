import './Banner.css';
import banner from '../../imagens/banner.png';

export const Banner = () => {
  // JSX
  return (
    <header className="banner">
      <img src={banner} alt="O banner principal da página do Organo" />
    </header>
  );
};
