import {useContext, useState, useLayoutEffect} from 'react';
import gsap from 'gsap';
import {CursorContext} from '../../components/Cursor/cursor';
import cross from '../../assets/cross.svg';

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
      tl.fromTo(
        '#link',
        {x: 2000},
        {x: 0, ease: 'power1.out', duration: 0.2, stagger: 0.1}
      );

      if (animationMenuIsOpen) {
        tl.play();
      } else if (menuIsOpen) {
        tl.reverse(2);
        gsap.to('#cross', {rotation: -90, duration: 0.5});
      }
    }
  }, [menuIsOpen, animationMenuIsOpen]);

  //On enter-leave
  const onEnter = ({currentTarget}) => {
    gsap.to(currentTarget, {color: '#7061A3'});
  };
  const onLeave = ({currentTarget}) => {
    gsap.to(currentTarget, {color: 'white'});
  };

  //Scroll smooth
  function scrollToSection(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').slice(1);

    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({behavior: 'smooth'});
      handleMenuToggle();
    }
  }

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
              <img
                id="cross"
                src={cross}
                alt="cross"
                className="w-8 absolute -left-14 top-4 hover:scale-110"
              />
            </button>
            <ul className="-space-y-5 ">
              <li id="link" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <a
                  href="#section2"
                  onClick={scrollToSection}
                  onMouseEnter={onEnterCursor}
                  onMouseLeave={onLeaveCursor}
                >
                  ABOUT
                </a>
              </li>
              <li id="link" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <a
                  href="#section3"
                  onClick={scrollToSection}
                  onMouseEnter={onEnterCursor}
                  onMouseLeave={onLeaveCursor}
                >
                  PROJECT
                </a>
              </li>
              <li id="link" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <a
                  href="#section4"
                  onClick={scrollToSection}
                  onMouseEnter={onEnterCursor}
                  onMouseLeave={onLeaveCursor}
                >
                  SKILL
                </a>
              </li>
              <li id="link" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <a
                  href="#section5"
                  onClick={scrollToSection}
                  onMouseEnter={onEnterCursor}
                  onMouseLeave={onLeaveCursor}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Menu;
