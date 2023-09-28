import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/images/logo.png';
import Menu from '@/images/menu.png';
import git from '@/images/git.png';

const Navbar = ({ handlePopupIsOpen }) => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link className="header__logo" href="/">
          <Image src={Logo} alt="Logo" width={50} />
        </Link>
        <button className="navbar__button" onClick={() => handlePopupIsOpen()}>
          <Image className="logo" src={Menu} alt="Menu" width={55} />
        </button>
        <ul className="navbar__content">
          <Link className="navbar__link" href="/">
            <li className="text navbar__link">Home</li>
          </Link>
          <Link className="navbar__link" href="/about">
            <li className="text navbar__link">Sobre Nós</li>
          </Link>
          <a
            className="navbar__link"
            href="https://github.com/SonsOfNode/SonsOfNode/tree/web"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="inverted-colors"
              src={git}
              alt="github"
              style={{ width: '3rem', height: '3rem' }}
            />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
