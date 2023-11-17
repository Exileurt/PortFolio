import gsap from 'gsap';
import {ScrollTrigger, TextPlugin} from 'gsap/all';
import {useLayoutEffect, useContext} from 'react';
import {CursorContext} from '../../components/Cursor/cursor';
import armenian from '../../assets/armenian.png';
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
    <div className="panelTwo hidden fixed justify-center items-center flex-col text-center top-0 left-0 h-screen w-full bg-gradient-to-r">
      <h2 className="text-6xl font-bold text-amber-400 pb-12">
        DIFFERENT STYLE OF WEBSITE
      </h2>
      <div className="fixed left-96 flex justify-center">
        <img
          src={armenian}
          alt="armenian"
          className="imgOne hidden w-1/2 h-auto border-2 border-amber-400"
          onMouseEnter={onEnterCursor}
          onMouseLeave={onLeaveCursor}
        />
      </div>
    </div>
  );
};

export default PanelTwo;
