import Image from 'next/image';
import headerImage from '@/images/header/header__image.png';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <article className="header__texts">
          <div className="header__texts__container">
            <h1 className="title header__title">Sons of </h1>
            <h2 className="title header__title header__title_dark">Node</h2>
            <p className="text header__text">
              Modelando Código, Não Combustão: Nós Somos os Filhos do Node!
            </p>
          </div>
        </article>
        <figcaption className="header__image">
          <Image
            src={headerImage}
            alt="cyberpunk"
            style={{ width: '100%', height: 'auto', maxHeight: '100vh' }}
          />
        </figcaption>
      </div>
    </header>
  );
};
