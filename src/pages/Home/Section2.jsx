import {useContext} from 'react';
import {CursorContext} from '../../components/Cursor/cursor';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {TextPlugin} from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

import pp from '../../assets/pp.png';

const Section2 = () => {
  const {onEnterCursor, onLeaveCursor} = useContext(CursorContext);
  //About - Paris
  useGSAP(() => {
    gsap.set('.about', {
      xPercent: -200,
      yPercent: -100,
    });
    gsap.to('.about', {
      xPercent: 0,
      yPercent: 0,
      scrollTrigger: {
        start: 'top+=400',
        end: 'top+=600',
        scrub: true,
      },
    });
    gsap.set('.paris', {xPercent: -300});
    gsap.to('.paris', {
      xPercent: 0,
      scrollTrigger: {start: 'top+=500', end: 'top+=700', scrub: true},
    });
  });
  //Profil
  useGSAP(() => {
    gsap.fromTo(
      '.profil',
      {
        yPercent: 100,
        scale: 1.4,
      },
      {
        yPercent: 0,
        scale: 1.2,
        duration: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.profilTrigger',
          start: 'top-=700',
          toggleActions: 'play pause resume reverse',
        },
      }
    );
  });
  //Text
  useGSAP(() => {
    gsap.set('.textProfil', {xPercent: 100});
    gsap.to('.textProfil', {
      xPercent: 0,
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.textProfil',
        start: 'top-=500',
        toggleActions: 'play pause resume reverse',
      },
    });
    gsap.set('.textProfilTwo', {xPercent: 100});
    gsap.to('.textProfilTwo', {
      xPercent: 0,
      text: 'MY UNCONVENTIONAL BACKGROUND HAS TAUGHT ME THE IMPORTANCE OF ATTENTION TO DETAIL, PERSEVERANCE, AND PROBLEM-SOLVING. I AM PASSIONATE ABOUT THE ART OF BRINGING IDEAS TO LIFE THROUGH CODE, USING TECHNOLOGIES SUCH AS JAVASCRIPT, REACT, TAILWIND, AND GSAP.',
      color: 'white',
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.textProfilTwo',
        start: 'top-=600',
        toggleActions: 'play pause resume reverse',
      },
    });
  });

  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="flex justify-between  h-5/6 w-11/12 max-sm:flex-col max-sm:items-center overflow-hidden">
        <div className="flex flex-col min-w-fit max-sm:items-center">
          <h2
            className="about playfair text-6xl select-none"
            onMouseEnter={onEnterCursor}
            onMouseLeave={onLeaveCursor}
          >
            About.
          </h2>
          <h3
            className="paris text-xl"
            onMouseEnter={onEnterCursor}
            onMouseLeave={onLeaveCursor}
          >
            Based in France, PARIS.
          </h3>
        </div>
        <div className="flex items-center max-sm:flex-col">
          <div className="flex flex-col items-end max-w-xl text-right m-10 overflow-hidden max-sm:text-center max-sm:m-2 max-sm:items-center">
            <p
              className="textProfil text-xl sm:text-3xl"
              onMouseEnter={onEnterCursor}
              onMouseLeave={onLeaveCursor}
            >
              EX-MILITARY, AS FREELANCER, I AM A DEVELOPER WHO IS PASSIONATE
              ABOUT CRAFTING ELEGANT, MODERN WEBSITES AND APPLICATIONS WITH A
              STRONG EMPHASIS ON PRECISION.
            </p>
            <p
              className="textProfilTwo text-xs max-w-sm sm:text-sm"
              onMouseEnter={onEnterCursor}
              onMouseLeave={onLeaveCursor}
            >
              MY UNCONVENTIONAL BACKGROUND HAS TAUGHT ME THE IMPORTANCE OF
              ATTENTION TO DETAIL, PERSEVERANCE, AND PROBLEM-SOLVING. I AM
              PASSIONATE ABOUT THE ART OF BRINGING IDEAS TO LIFE THROUGH CODE,
              USING TECHNOLOGIES SUCH AS JAVASCRIPT, REACT, TAILWIND, AND GSAP.
            </p>
          </div>
          <div className="hidden profilTrigger w-96 overflow-hidden max-sm:w-40 sm:min-w-[18rem] md:block">
            <img src={pp} alt="pp" className="profil" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
