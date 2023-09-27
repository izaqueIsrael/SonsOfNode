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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
            <button className="button header__button">SAIBA MAIS</button>
          </div>
        </article>
        <figcaption className="header__image">
          <Image
            src={headerImage}
            alt="cyberpunk"
            objectFit="cover"
            style={{ width: '100%', height: 'auto', maxHeight: '100vh' }}
          />
        </figcaption>
      </div>
    </header>
  );
};
