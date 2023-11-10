import Menu from './Menu';
import {useRef, useLayoutEffect} from 'react';
import {gsap} from 'gsap';
import {TextPlugin} from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

const Home = () => {
  //CURSOR
  const cursor = useRef();
  useLayoutEffect(() => {
    gsap.set(cursor.current, {xPercent: -50, yPercent: -50});
    let xTo = gsap.quickTo(cursor.current, 'x', {
      duration: 1.5,
      ease: 'back.out(1.7)',
    });
    let yTo = gsap.quickTo(cursor.current, 'y', {
      duration: 1.5,
      ease: 'back.out(1.7)',
    });
    window.addEventListener('mousemove', e => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }, []);

  //TEXT ANIMATION
  const boxRef = useRef();
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.timeScale(1);
    tl.to(boxRef.current, {
      duration: 1,
      opacity: 0.3,
      repeat: 2,
      yoyo: false,
    });
    tl.to(boxRef.current, {
      opacity: 100,
      duration: 6,
      text: `EX-MILITARY, I&apos;M A DEVELOPER WHO IS PASSIONATE ABOUT BUILDING
      BEAUTIFUL, FUNCTIONAL, AND EASY-TO-USE AND NAVIGATE WEBSITES AND
      APPLICATIONS WITH A STRONG EMPHASIS ON RIGOR.`,
    });
  }, []);

  return (
    <div>
      <span
        ref={cursor}
        className="absolute w-6 h-6 border border-amber-400 rounded-full z-50"
      />
      <Menu />

      <div className="flex flex-col">
        <div className="h-screen flex flex-col justify-center pl-36 select-none">
          <h1 className="font-semibold text-9xl tracking-[19px] bg-gradient-to-r from-amber-500  to-amber-400 text-transparent bg-clip-text">
            AURELIEN
            <br />
            FAVREL
          </h1>
          <p
            className="max-w-lg text-lg leading-4 text-soft-yellow"
            ref={boxRef}
          >
            LOADING...
          </p>
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

export default Home;
