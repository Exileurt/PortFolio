import gsap from 'gsap';
import {ScrollTrigger, TextPlugin} from 'gsap/all';
import {useLayoutEffect, useContext} from 'react';
import {CursorContext} from '../../components/Cursor/cursor';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const About = () => {
  //CURSOR
  const {onEnterCursor, onLeaveCursor} = useContext(CursorContext);
  //ANIMATION
  useLayoutEffect(() => {
    const tl = gsap.timeline({paused: true});
    tl.to('.darkForest', {
      visibility: 'hidden',
      scrollTrigger: {
        scrub: true,
        start: 'top',
        end: 'center-=300',
      },
    });
    tl.to('.darkForest', {
      visibility: 'visible',
      width: 0,
      display: 'flex',
      height: '100vh',
      scrollTrigger: {
        scrub: true,
        start: 'center-=300',
        end: 'center-=200',
      },
    });
    tl.to('.darkForest', {
      width: '100%',
      ease: 'power1.out',
      scrollTrigger: {
        scrub: true,
        start: 'center-=200',
        end: 'center+=200',
      },
    });
    tl.to('.darkForest', {
      delay: 6,
      ease: 'power1.out',
      backgroundPositionY: 0,
      scrollTrigger: {
        scrub: true,
        start: 'center+=200',
        end: 'bottom+=500',
        toggleActions: 'play',
      },
    });
    tl.to('.textPanelOne', {
      visibility: 'hidden',
      scrollTrigger: {scrub: true, start: 'top', end: 'center+=90'},
    });
    tl.fromTo(
      '.textPanelOne',
      {width: 0},
      {
        visibility: 'visible',
        ease: 'power1.out',
        borderRightWidth: 4,
        width: '100%',

        scrollTrigger: {scrub: true, start: 'center+=100', end: 'bottom+=250'},
      }
    );
    tl.to('.textPanelOne', {
      borderRightWidth: 0,
      immediateRender: false,
      scrollTrigger: {scrub: true, start: 'bottom+=200', end: 'bottom+=250'},
    });

    tl.fromTo(
      '.textPanelOne',
      {
        width: '100%',
      },
      {
        width: 0,
        scrollTrigger: {scrub: true, start: 'bottom+=260', end: 'bottom+=300'},
      }
    );
    tl.fromTo(
      '.darkForest',
      {
        width: '100%',
      },
      {
        visibility: 'visible',
        width: 0,
        immediateRender: false,
        scrollTrigger: {scrub: true, start: 'bottom+=300', end: 'bottom+=450'},
      }
    );
    tl.to('.darkForest', {
      visibility: 'hidden',
      scrollTrigger: {scrub: true, start: 'bottom+=455', end: 'bottom+=456'},
    });
  });

  return (
    <div className="darkForest fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-darkForest bg-cover bg-center border-4 border-amber-400 hidden items-center text-amber-400">
      <p
        className="textPanelOne relative ml-[10%] whitespace-nowrap max-w-4xl w-0 h-[19rem] text-6xl font-bold overflow-hidden border-r-4 border-amber-400 "
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
