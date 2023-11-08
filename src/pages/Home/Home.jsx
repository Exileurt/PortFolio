import Menu from './Menu';
import {useRef, useLayoutEffect} from 'react';
import {gsap} from 'gsap';
import {TextPlugin} from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

const Home = () => {
  const boxRef = useRef();

  useLayoutEffect(() => {
    console.log(boxRef);
    gsap.to(boxRef.current, {
      duration: 3,
      text: `EX-MILITARY, I&apos;M A DEVELOPER WHO IS PASSIONATE ABOUT BUILDING
      BEAUTIFUL, FUNCTIONAL, AND EASY-TO-USE AND NAVIGATE WEBSITES AND
      APPLICATIONS WITH A STRONG EMPHASIS ON RIGOR.`,
    });

    return () => {};
  }, []);

  return (
    <div>
      <Menu />
      <div className="flex flex-col">
        <div className="h-screen flex flex-col justify-center pl-36 select-none">
          <h1 className="font-semibold text-9xl tracking-[19px] text-amber-400">
            AURELIEN
            <br />
            FAVREL
          </h1>
          <p
            className="max-w-lg text-lg leading-4 text-soft-yellow"
            ref={boxRef}
          >
            YRETILIM-XE , I A M RELOPEVED OWH SI ENIOTSAP TUOB GNIDLIUB .
            LUFITUAEB , LANOITCNUF , DNA ESAE-OT-ESU DNA ETAGIVAN STESBEW DNA
            .SNOITCILPPA HTIW A GNORTS SIHPSAME NO RIGOR.
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
