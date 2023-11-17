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
        end: 'bottom+=1600',
      },
    });
    tl.to('.bouncePanelTwo', {
      duration: 2,
      x: 80,
      ease: 'bounce.out',
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <div className="panelTwo hidden fixed flex-col justify-center items-center text-center top-0 left-0 h-screen w-full bg-gradient-to-r from-very-dark-yellow to-black">
      <h2 className="text-6xl font-bold text-amber-400 pb-12">PROJECT</h2>

      <div className="flex flex-wrap gap-6 justify-center max-w-6xl">
        <img
          src={armenian}
          alt="armenian"
          className="w-1/3 h-auto border-2 border-amber-400 opacity-50 transition-all ease-in hover:scale-150  hover:opacity-100"
          onMouseEnter={onEnterCursor}
          onMouseLeave={onLeaveCursor}
        />
        <img
          src={armenian}
          alt="armenian"
          className="w-1/3 h-auto border-2 border-amber-400 opacity-50"
          onMouseEnter={onEnterCursor}
          onMouseLeave={onLeaveCursor}
        />
        <img
          src={armenian}
          alt="armenian"
          className="w-1/3 h-auto border-2 border-amber-400 opacity-50"
          onMouseEnter={onEnterCursor}
          onMouseLeave={onLeaveCursor}
        />
        <img
          src={armenian}
          alt="armenian"
          className="w-1/3 h-auto border-2 border-amber-400 opacity-50"
          onMouseEnter={onEnterCursor}
          onMouseLeave={onLeaveCursor}
        />
      </div>
    </div>
  );
};

export default PanelTwo;
