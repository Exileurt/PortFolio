import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import pp from '../../assets/pp.png';

const Section2 = () => {
  useGSAP(() => {
    let timeline = gsap.timeline();
    timeline.to('.about', {
      x: 200,
      scrollTrigger: {
        start: 'top+=200',
        end: 'top+=400',
        markers: true,
        scrub: true,
      },
    });
  });

  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="flex justify-between h-5/6 w-11/12">
        <div>
          <h2 className="about playfair text-6xl">About.</h2>
          <h3 className="text-xl">Based in France, PARIS.</h3>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col items-end max-w-xl text-right m-10">
            <p className="text-3xl">
              EX-MILITARY, AS FREELANCER, I AM A DEVELOPER WHO IS PASSIONATE
              ABOUT CRAFTING ELEGANT, MODERN WEBSITES AND APPLICATIONS WITH A
              STRONG EMPHASIS ON PRECISION.
            </p>
            <p className="text-sm max-w-sm">
              MY UNCONVENTIONAL BACKGROUND HAS TAUGHT ME THE IMPORTANCE OF
              ATTENTION TO DETAIL, PERSEVERANCE, AND PROBLEM-SOLVING. I AM
              PASSIONATE ABOUT THE ART OF BRINGING IDEAS TO LIFE THROUGH CODE,
              USING TECHNOLOGIES SUCH AS JAVASCRIPT, REACT, TAILWIND, AND GSAP.
            </p>
          </div>
          <img src={pp} alt="pp" className="" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
