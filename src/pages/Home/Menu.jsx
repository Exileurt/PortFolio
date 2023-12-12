import {NavLink} from 'react-router-dom';
import {useContext, useState, useLayoutEffect} from 'react';
import gsap from 'gsap';
import {CursorContext} from '../../components/Cursor/cursor';

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
  useLayoutEffect(() => {
    if (menuIsOpen) {
      let tl = gsap.timeline({paused: true});
      tl.fromTo('#menu', {y: -2000}, {y: 0, ease: 'power1.out', duration: 0.4});
      tl.fromTo('#about', {x: 2000}, {x: 0, ease: 'power1.out', duration: 0.2});
      tl.fromTo(
        '#project',
        {x: 2000},
        {x: 0, ease: 'power1.out', duration: 0.2}
      );
      tl.fromTo(
        '#linkedin',
        {x: 2000},
        {x: 0, ease: 'power1.out', duration: 0.2}
      );
      if (animationMenuIsOpen) {
        tl.play();
      } else if (!menuIsOpen) {
        tl.reverse(2);
        gsap.to('#cross', {rotation: -90, duration: 0.5});
      }
    }
  }, [menuIsOpen, animationMenuIsOpen]);

  //On enter-leave
  const onEnter = ({currentTarget}) => {
    gsap.to(currentTarget, {color: '#FFCA16'});
  };
  const onLeave = ({currentTarget}) => {
    gsap.to(currentTarget, {color: 'white'});
  };

  return (
    <div className="relative">
      <button
        className="absolute top-20 right-20 flex items-center z-40"
        onClick={handleMenuToggle}
        onMouseEnter={onEnterCursor}
        onMouseLeave={onLeaveCursor}
      >
        <svg
          className="w-10 h-10 transition-all duration-300 ease-in-out stroke-white hover:scale-110"
          viewBox="0 0 23 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="-1.5"
            x2="23"
            y2="-1.5"
            transform="matrix(-1 0 0 1 23 3)"
            stroke="0"
            strokeWidth="3"
          />
          <line
            y1="-1.5"
            x2="23"
            y2="-1.5"
            transform="matrix(-1 0 0 1 23 17)"
            strokeWidth="3"
          />
          <line
            y1="-1.5"
            x2="23"
            y2="-1.5"
            transform="matrix(-1 0 0 1 23 10)"
            strokeWidth="3"
          />
        </svg>
      </button>

      {menuIsOpen && (
        <div
          id="menu"
          className="fixed flex justify-center items-center h-screen w-full backdrop-blur-md left-0 top-0 z-40"
        >
          <nav className="relative flex text-white text-9xl font-semibold select-none">
            <button
              onMouseEnter={onEnterCursor}
              onMouseLeave={onLeaveCursor}
              onClick={handleMenuToggle}
            >
              <svg
                className="absolute w-8 h-8 top-4 -left-12 ease-in transition-all hover:scale-125"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.6801 0L25 21.6902L3.3199 0L0 3.29969L21.6914 25.0004L0 46.7018L3.3199 50L25 28.3105L46.6801 50L50 46.7018L28.3086 25.0004L50 3.29969L46.6801 0Z"
                  fill="#F9F2E2"
                />
              </svg>
            </button>
            <ul className="-space-y-5 ">
              <li id="about" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <NavLink
                  to="/"
                  onClick={handleMenuToggle}
                  onMouseEnter={onEnterCursor}
                  onMouseLeave={onLeaveCursor}
                >
                  ABOUT
                </NavLink>
              </li>
              <li id="project" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <NavLink
                  to="/"
                  onClick={handleMenuToggle}
                  onMouseEnter={onEnterCursor}
                  onMouseLeave={onLeaveCursor}
                >
                  PROJECT
                </NavLink>
              </li>
              <li id="linkedin" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <NavLink
                  to="/"
                  onClick={handleMenuToggle}
                  onMouseEnter={onEnterCursor}
                  onMouseLeave={onLeaveCursor}
                >
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
