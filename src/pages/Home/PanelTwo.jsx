import gsap from 'gsap';
import {ScrollTrigger, TextPlugin} from 'gsap/all';
import {useLayoutEffect, useContext} from 'react';
import {CursorContext} from '../../components/Cursor/cursor';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const PanelTwo = () => {
  //CURSOR
  const {onEnterCursor, onLeaveCursor} = useContext(CursorContext);
  //ANIMATION
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to('.panelTwo', {
      visibility: 'visible',
      display: 'flex',
      height: '100vh',
      scrollTrigger: {
        scrub: true,
        start: 'bottom+=15000',
        end: 'bottom+=1500',
      },
    });
    tl.to('.imgOne', {
      x: -600,
      scrollTrigger: {scrub: true, start: 'bottom+=1500', end: 'bottom+=1500'},
    });
  });
  //BUTTON HOVER
  const onEnter = ({currentTarget}) => {
    gsap.to(currentTarget, {
      backgroundColor: '#714F19',
      fontWeight: 'bolder',
      duration: 0.5,
      ease: 'power1.out',
      borderColor: 'yellow',
    });
    onEnterCursor();
  };
  const onLeave = ({currentTarget}) => {
    gsap.to(currentTarget, {
      backgroundColor: '',
      fontWeight: 'normal',
      duration: 0.5,
      ease: 'power1.out',
      borderColor: '',
    });
    onLeaveCursor();
  };

  return (
    <div className="panelTwo bg-amoccidental bg-cover hidden fixed justify-center flex-col text-center top-0 left-0 h-screen w-full   border-4 border-amber-400">
      <div className="flex flex-col items-center max-w-2xl ml-32 border-l-4 border-b-4 border-amber-400 backdrop-blur-sm space-y-4 p-4">
        <h2 className="font-bold text-6xl text-amber-400 text-left">
          I USE THESE SKILL TO CREATE VARIOUS WEBSITES, LIKE LEARNING WEBSITE..
        </h2>
        <a
          href="https://armenian-occidental.com"
          className="max-w-xl px-12 py-2 border-2 border-white rounded-full text-white"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          WEBSITE
        </a>
      </div>
    </div>
  );
};

export default PanelTwo;
