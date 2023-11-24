import gsap from 'gsap';
import {ScrollTrigger, TextPlugin} from 'gsap/all';
import {useLayoutEffect, useContext} from 'react';
import {CursorContext} from '../../components/Cursor/cursor';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const About = () => {
  //CURSOR
  const {onEnterCursor, onLeaveCursor} = useContext(CursorContext);
  //ANIMATION OPEN PANEL
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to('.darkForest', {
      visibility: 'hidden',
      scrollTrigger: {
        scrub: true,
        start: 'top',
        end: 'center-=200',
      },
    });
    tl.to('.darkForest', {
      visibility: 'visible',
      width: 0,
      display: 'flex',
      height: '100vh',
      scrollTrigger: {
        scrub: true,
        start: 'center-=200',
        end: 'center+=400',
      },
    });
    tl.to('.darkForest', {
      width: '100%',
      ease: 'power1.out',
      scrollTrigger: {
        scrub: true,
        start: 'center+=400',
        end: 'bottom+=1000',
      },
    });
    tl.fromTo(
      '.darkForest',
      {
        width: '100%',
      },
      {
        visibility: 'visible',
        width: 0,
        immediateRender: false,
        scrollTrigger: {
          scrub: true,
          start: 'bottom+=2500',
          end: 'bottom+=3500',
        },
      }
    );
    tl.to('.darkForest', {
      visibility: 'hidden',
      scrollTrigger: {
        scrub: true,
        start: 'bottom+=3500',
        end: 'bottom+=4000',
      },
    });
  });
  //ANIMATION TEXT ON PANEL
  useLayoutEffect(() => {
    const tl = gsap.timeline({ease: 'power1.out'});
    tl.to('.darkForest', {
      delay: 6,
      backgroundPositionY: 0,
      scrollTrigger: {
        scrub: true,
        start: 'bottom+=1000',
        end: 'bottom+=2000',
      },
    });
    tl.to('.textPanelOne', {
      visibility: 'hidden',
      scrollTrigger: {scrub: true, start: 'top', end: 'bottom+=1000'},
    });
    tl.fromTo(
      '.textPanelOne',
      {width: 0},
      {
        visibility: 'visible',
        borderRightWidth: 4,
        width: '100%',
        scrollTrigger: {
          scrub: true,
          start: 'bottom+=1000',
          end: 'bottom+=2000',
        },
      }
    );
    tl.to('.textPanelOne', {
      borderRightWidth: 0,

      scrollTrigger: {
        scrub: true,
        start: 'bottom+=2000',
        end: 'bottom+=2050',
      },
    });

    tl.fromTo(
      '.textPanelOne',
      {
        width: '100%',
        immediateRender: true,
      },
      {
        width: 0,
        scrollTrigger: {
          scrub: true,
          start: 'bottom+=2000',
          end: 'bottom+=2500',
        },
      }
    );
  });

  return (
    <div className="darkForest fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-darkForest bg-cover bg-center border-4 border-amber-400 hidden items-center text-amber-400">
      <p
        className="textPanelOne relative ml-[10%] whitespace-nowrap max-w-4xl w-0 h-[19rem] text-6xl font-bold overflow-hidden border-r-4 border-amber-400 select-none"
        onMouseEnter={onEnterCursor}
        onMouseLeave={onLeaveCursor}
      >
        TO CREATE CREATIVE
        <br /> WEBSITES, I WORK WITH <br /> CUTTING-EDGE TECHNOLOGIES
        <br /> LIKE REACT, GSAP, TAILWIND <br /> AND MORE...
      </p>
    </div>
  );
};

export default About;
