import {NavLink} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';
import gsap from 'gsap';
import hamburger from '../../assets/hamburger.svg';
import cross from '../../assets/cross.svg';
import {CursorContext} from '../../components/Cursor/Cursor';

const Menu = () => {
  const {onEnterCursor, onLeaveCursor} = useContext(CursorContext);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [animationMenuIsOpen, setAnimationMenuIsOpen] = useState(false);

  //Handle Menu
  const handleMenuToggle = () => {
    if (menuIsOpen) {
      setAnimationMenuIsOpen(false);
      setTimeout(() => {
        setMenuIsOpen(false);
      }, 1000);
    } else {
      setAnimationMenuIsOpen(true);
      setMenuIsOpen(true);
    }
  };

  //Background-text transition
  useEffect(() => {
    let tl = gsap.timeline({paused: true});
    tl.fromTo('#menu', {y: -2000}, {y: 0, ease: 'power1.out', duration: 0.4});
    tl.fromTo('#about', {x: 2000}, {x: 0, ease: 'power1.out', duration: 0.2});
    tl.fromTo('#project', {x: 2000}, {x: 0, ease: 'power1.out', duration: 0.2});
    tl.fromTo(
      '#linkedin',
      {x: 2000},
      {x: 0, ease: 'power1.out', duration: 0.2}
    );
    if (animationMenuIsOpen) {
      tl.play();
    } else {
      tl.reverse(2);
      gsap.to('#cross', {rotation: -90, duration: 0.5});
    }
  }, [animationMenuIsOpen]);

  //On enter-leave
  const onEnter = ({currentTarget}) => {
    gsap.to(currentTarget, {color: '#FFCA16'});
  };
  const onLeave = ({currentTarget}) => {
    gsap.to(currentTarget, {color: 'white'});
  };

  //Cursor

  return (
    <div className="relative">
      <button
        className="absolute top-12 right-12 flex items-center"
        onClick={handleMenuToggle}
        onMouseEnter={onEnterCursor}
        onMouseLeave={onLeaveCursor}
      >
        <img src={hamburger} alt="hamburger" className="w-8" />
      </button>

      {menuIsOpen && (
        <div
          id="menu"
          className="fixed flex justify-center items-center h-screen w-full backdrop-blur-md left-0 top-0 z-40"
        >
          <button
            onMouseEnter={onEnterCursor}
            onMouseLeave={onLeaveCursor}
            onClick={handleMenuToggle}
          >
            <img
              id="cross"
              src={cross}
              alt="cross"
              className="absolute w-8 h-8 top-12 right-12"
            />
          </button>

          <nav className="flex text-white text-9xl font-semibold">
            <ul className="-space-y-5 ">
              <li id="about" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <NavLink to="/" onClick={handleMenuToggle}>
                  ABOUT
                </NavLink>
              </li>
              <li id="project" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <NavLink to="/" onClick={handleMenuToggle}>
                  PROJECT
                </NavLink>
              </li>
              <li id="linkedin" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <NavLink to="/" onClick={handleMenuToggle}>
                  LINKEDIN
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Menu;
