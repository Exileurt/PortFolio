import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import screen from '../../assets/screen.svg';
import paint from '../../assets/paint.svg';
import community from '../../assets/community.svg';

const Section4 = () => {
  //Skill
  useGSAP(() => {
    gsap.set('.skill', {xPercent: -200});
    gsap.to('.skill', {
      xPercent: 0,
      scrollTrigger: {
        start: 'center',
        end: 'center+=200',
        scrub: true,
      },
    });
  });
  //Skills
  useGSAP(() => {
    gsap.set('.skills', {scale: 0});
    gsap.to('.skills', {
      scale: 1,
      scrollTrigger: {start: 'center+=100', end: 'center+=400', scrub: true},
    });
  });
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="relative flex justify-center items-center h-5/6 w-11/12">
        <h2 className="skill absolute top-0 left-0 playfair text-6xl select-none">
          Skills.
        </h2>
        <div className="skills flex max-w-[30rem] flex-wrap">
          <div className="mx-10 select-none">
            <h4 className="text-xl font-extrabold flex">
              <img src={screen} alt="screen" className="mr-4" />
              FRONT END
            </h4>

            <ul className="ml-10">
              <li>REACT</li>
              <li>GSAP</li>
              <li>TAILWIND</li>
              <li>JAVASCRIPT</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </div>
          <div className="mx-10 select-none">
            <h4 className="flex text-xl font-extrabold">
              <img src={paint} alt="paint" className="mr-4" />
              DESIGN
            </h4>

            <ul className="ml-10 select-none">
              <li>FIGMA</li>
              <li>PHOTOSHOP</li>
              <li>AFTER EFFECT</li>
              <li>BASE UX</li>
              <li>BASE UI</li>
            </ul>
          </div>
          <div className="mt-8 mx-10">
            <h4 className="flex text-xl font-extrabold">
              <img src={community} alt="community" className="mr-4" />
              COMMUNITY
            </h4>

            <ul className="ml-10 select-none">
              <li>GITHUB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
