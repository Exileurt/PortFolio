import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {TextPlugin} from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

import pp from '../../assets/pp.png';

const Section2 = () => {
  //About - Paris
  useGSAP(() => {
    gsap.set('.about', {
      x: -300,
      y: -200,
    });
    gsap.to('.about', {
      x: 0,
      y: 0,
      scrollTrigger: {
        start: 'top+=400',
        end: 'top+=600',
        scrub: true,
        markers: true,
      },
    });
    gsap.set('.paris', {x: -300});
    gsap.to('.paris', {
      x: 0,
      scrollTrigger: {start: 'top+=500', end: 'top+=700', scrub: true},
    });
  });
  //Profil
  useGSAP(() => {
    gsap.set('.profil', {
      yPercent: 100,
      scale: 1.2,
      width: '25rem',
    });
    gsap.to('.profil', {
      yPercent: 0,
      scale: 1.0,
      delay: -1.5,
      scrollTrigger: {start: 'top+=500', end: 'top+=800', scrub: true},
    });
  });
  //Text
  useGSAP(() => {
    gsap.set('.textProfil', {xPercent: 100});
    gsap.to('.textProfil', {
      xPercent: 0,
      scrollTrigger: {start: 'top+=600', end: 'top+=700', scrub: true},
    });
    gsap.set('.textProfilTwo', {xPercent: 100});
    gsap.to('.textProfilTwo', {
      xPercent: 0,
      text: 'MY UNCONVENTIONAL BACKGROUND HAS TAUGHT ME THE IMPORTANCE OF ATTENTION TO DETAIL, PERSEVERANCE, AND PROBLEM-SOLVING. I AM PASSIONATE ABOUT THE ART OF BRINGING IDEAS TO LIFE THROUGH CODE, USING TECHNOLOGIES SUCH AS JAVASCRIPT, REACT, TAILWIND, AND GSAP.',
      color: 'white',
      scrollTrigger: {start: 'top+=700', end: 'top+=800', scrub: true},
    });
  });

  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="flex justify-between h-5/6 w-11/12">
        <div>
          <h2 className="about playfair text-6xl">About.</h2>
          <h3 className="paris text-xl">Based in France, PARIS.</h3>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col items-end max-w-xl text-right m-10 overflow-hidden">
            <p className="textProfil text-3xl">
              EX-MILITARY, AS FREELANCER, I AM A DEVELOPER WHO IS PASSIONATE
              ABOUT CRAFTING ELEGANT, MODERN WEBSITES AND APPLICATIONS WITH A
              STRONG EMPHASIS ON PRECISION.
            </p>
            <p className="textProfilTwo text-sm max-w-sm">
              MY UNCONVENTIONAL BACKGROUND HAS TAUGHT ME THE IMPORTANCE OF
              ATTENTION TO DETAIL, PERSEVERANCE, AND PROBLEM-SOLVING. I AM
              PASSIONATE ABOUT THE ART OF BRINGING IDEAS TO LIFE THROUGH CODE,
              USING TECHNOLOGIES SUCH AS JAVASCRIPT, REACT, TAILWIND, AND GSAP.
            </p>
          </div>
          <div className="w-[25rem] h-[32rem] overflow-hidden">
            <img src={pp} alt="pp" className="profil overflow-hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
