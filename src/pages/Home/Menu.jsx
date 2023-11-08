import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import hamburger from '../../assets/hamburger.svg';
import cross from '../../assets/cross.svg';

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="relative">
      <button
        className="absolute top-12 right-12 flex items-center "
        onClick={handleMenuToggle}
      >
        <p className="text-soft-yellow pr-4 transition-all hover:text-amber-300">
          menu
        </p>
        <img src={hamburger} alt="hamburger" className="w-8" />
      </button>

      {menuIsOpen && (
        <div className="fixed flex justify-center items-center h-screen w-full backdrop-blur-md left-0 top-0 z-50">
          <button onClick={handleMenuToggle}>
            <img
              src={cross}
              alt="cross"
              className="absolute w-8 h-8 top-12 right-12"
            />
          </button>

          <nav className="flex text-white text-9xl font-semibold">
            <ul className="-space-y-5">
              <li>
                <NavLink to="#">ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="#">REPORT</NavLink>
              </li>
              <li>
                <NavLink to="#">LINKEDIN</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Menu;
