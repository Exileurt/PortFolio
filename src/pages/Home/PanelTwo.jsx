import gsap from 'gsap';
import {ScrollTrigger, TextPlugin} from 'gsap/all';
import {useLayoutEffect, useContext} from 'react';
import {CursorContext} from '../../components/Cursor/cursor';
import armenian from '../../assets/armenian.png';
import portfolio from '../../assets/portfolio.png';

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
        start: 'bottom+=2000',
        end: 'bottom+=2000',
      },
    });
    tl.to('.imgOne', {
      x: -600,
      scrollTrigger: {scrub: true, start: 'bottom+=1500', end: 'bottom+=1500'},
    });
    tl.to('.imgOne', {
      x: -600,
      scrollTrigger: {scrub: true, start: 'bottom+=1500', end: 'bottom+=1500'},
    });
  });
  //TEXT ANIMATION
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to('.textCreate', {
      visibility: 100,
      color: '#FFD60A',
      text: 'I CREATE VARIOUS WEBSITES,',
      scrollTrigger: {
        scrub: true,
        start: 'bottom+=2500',
        end: 'bottom+=2900',
      },
    });
  });

  return (
    <div className="panelTwo bg-gradient-to-r from-very-dark-yellow to-black hidden fixed items-center flex-col text-center top-0 left-0 h-screen w-full">
      <div className="flex flex-col justify-evenly h-full">
        <div className="text-center tracking-[1rem] text-soft-yellow text-4xl font-bold max-w-4xl">
          <h2 className="textCreate">
            <br />
          </h2>
          <h2 className=" mt-10 tracking-[0.5rem]">LIKE LEARNING WEBSITE...</h2>
        </div>
        <div className="relative mt-0">
          <a
            href="https://armenian-occidental.com"
            className="flex items-center -my-3 "
          >
            <img
              src={armenian}
              alt="armenian"
              className="h-[30rem] z-10 hover:scale-110"
              onMouseEnter={onEnterCursor}
              onMouseLeave={onLeaveCursor}
            />
            <img
              src={portfolio}
              alt="portfolio"
              className="absolute left-[38rem] h-80 w-auto z-0"
            />
          </a>
          <a
            href="https://armenian-occidental.com"
            className="text-soft-yellow text-xl tracking-widest"
            onMouseEnter={onEnterCursor}
            onMouseLeave={onLeaveCursor}
          >
            armenian-occidental.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default PanelTwo;
