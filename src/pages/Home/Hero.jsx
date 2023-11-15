import Menu from './Menu';
import ScrollDriven from '../../components/scrollDriven/scrollDriven';
import {useContext, useRef, useLayoutEffect} from 'react';
import {gsap} from 'gsap/all';
import {TextPlugin} from 'gsap/TextPlugin';
import {ScrollTrigger} from 'gsap/all';
import {CursorContext} from '../../components/Cursor/cursor';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  //CURSOR
  const {onEnterCursor, onLeaveCursor} = useContext(CursorContext);
  //TEXT ANIMATION
  const boxRef = useRef();
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.timeScale(1);
    tl.to(boxRef.current, {
      duration: 0.5,
      opacity: 0.3,
      repeat: 2,
      yoyo: false,
    });
    tl.to(boxRef.current, {
      opacity: 100,
      duration: 3,
      text: `EX-MILITARY, I&apos;M A DEVELOPER WHO IS PASSIONATE ABOUT BUILDING
      BEAUTIFUL, FUNCTIONAL, AND EASY-TO-USE AND NAVIGATE WEBSITES AND
      APPLICATIONS WITH A STRONG EMPHASIS ON RIGOR.`,
    });
  }, []);
  //SCROLL TRIGGER
  useLayoutEffect(() => {
    gsap.to('.textHero', {
      width: 0,
      scrollTrigger: {scrub: true, start: 'top', end: 'center'},
    }),
      gsap.to('.textHero', {
        visibility: 'hidden',
        scrollTrigger: {
          scrub: true,
          start: 'center',
          end: 'center',
        },
      }),
      [];
  });

  return (
    <div>
      <Menu />
      <ScrollDriven />

      <div className="flex flex-col">
        <div className="h-screen flex flex-col justify-center pl-36 select-none">
          <div className="textHero fixed">
            <h1
              className="max-w-3xl font-semibold text-9xl tracking-[19px] bg-gradient-to-r from-amber-500  to-amber-400 text-transparent bg-clip-text"
              onMouseEnter={onEnterCursor}
              onMouseLeave={onLeaveCursor}
            >
              AURELIEN
            </h1>
            <h1
              className="max-w-xl font-semibold text-9xl tracking-[19px] bg-gradient-to-r from-amber-500  to-amber-400 text-transparent bg-clip-text "
              onMouseEnter={onEnterCursor}
              onMouseLeave={onLeaveCursor}
            >
              FAVREL
            </h1>
            <p
              className="max-w-lg min-h-16 max-h-16 text-lg leading-4 text-soft-yellow overflow-hidden"
              onMouseEnter={onEnterCursor}
              onMouseLeave={onLeaveCursor}
              ref={boxRef}
            >
              LOADING...
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-28 right-28 flex items-end text-soft-yellow">
        <p className="pr-8 leading-3">scroll down</p>
        <div className="flex flex-col items-center">
          <div className="h-40 w-px bg-soft-yellow" />
          <div className="absolute bottom-0 h-3 w-3 bg-soft-yellow rotate-45" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
