import gsap from 'gsap';
import {ScrollTrigger, TextPlugin} from 'gsap/all';
import {useLayoutEffect, useContext} from 'react';
// import {CursorContext} from '../../components/Cursor/cursor';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const PanelTwo = () => {
  //CURSOR
  //const {onEnterCursor, onLeaveCursor} = useContext(CursorContext);
  //ANIMATION
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to('.panelTwo', {
      visibility: 'visible',
      display: 'flex',
      height: '100vh',
      scrollTrigger: {
        scrub: true,
        start: 'bottom+=200',
        end: 'bottom+=500',
      },
    });
    tl.to('.imgOne', {
      x: -600,
      scrollTrigger: {scrub: true, start: 'bottom+=800', end: 'bottom+=1000'},
    });
  });

  return (
    <div className="panelTwo bg-amoccidental bg-cover hidden fixed justify-center flex-col text-center top-0 left-0 h-screen w-full  backdrop-blur-sm border-4 border-amber-400">
      <h2 className="font-bold text-6xl text-amber-400 max-w-3xl text-left ml-32">
        I USE THESE SKILL TO CREATE VARIOUS WEBSITES, LIKE LEARNING WEBSITE..
      </h2>
    </div>
  );
};

export default PanelTwo;
