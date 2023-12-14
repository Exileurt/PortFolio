import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import link from '../../assets/link.svg';

const Section3 = () => {
  //Portfolio
  useGSAP(() => {
    gsap.set('.portfolio', {fontSize: '50rem', xPercent: -50});
    gsap.to('.portfolio', {
      fontSize: '3.75rem',
      xPercent: 0,
      scrollTrigger: {
        start: 'center-=800',
        end: 'center-=600',
        scrub: true,
        markers: true,
      },
    });
  });

  //Link
  useGSAP(() => {
    gsap.set('.portfolioLink', {xPercent: -100});
    gsap.to('.portfolioLink', {
      xPercent: 0,
      scrollTrigger: {
        start: 'center-=500',
        end: 'center-=400',
        markers: true,
        scrub: true,
      },
    });
  });

  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="flex justify-between h-5/6 w-11/12">
        <div className="flex flex-col justify-center items-end w-1/2 overflow-hidden">
          <div className="portfolioLink flex justify-between items-center w-full h-28 border-b p-10 font-light">
            <h3>
              01. <span className="ml-12">Armenian learning website.</span>
            </h3>
            <img src={link} alt="link" />
          </div>
          <div className="portfolioLink flex justify-between items-center w-full h-28 border-b p-10">
            <h3>
              01. <span className="ml-12">Porsche website.</span>
            </h3>
            <img src={link} alt="link" />
          </div>
          <div className="portfolioLink flex justify-between items-center w-full h-28 border-b p-10">
            <h3>
              01. <span className="ml-12">Garrytus website.</span>
            </h3>
            <img src={link} alt="link" />
          </div>
          <a href="#" className="portfolioLink mt-2 text-right">
            MORE.
          </a>
        </div>

        <h2 className="portfolio playfair text-6xl">Portfolio.</h2>
      </div>
    </div>
  );
};

export default Section3;
