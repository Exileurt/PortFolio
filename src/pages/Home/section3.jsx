import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import link from '../../assets/link.svg';
import armenian from '../../assets/armenian.jpg';

const Section3 = () => {
  //Portfolio
  useGSAP(() => {
    gsap.set('.portfolio', {
      fontSize: '50rem',
      x: -200,
      y: -150,
    });
    gsap.to('.portfolio', {
      x: 1000,
      scrollTrigger: {
        start: 'center-=1200',
        end: 'center-=700',
        scrub: true,
      },
    });
    gsap.to('.portfolio', {
      fontSize: '3.75rem',
      x: 0,
      y: 0,
      immediateRender: false,
      scrollTrigger: {
        start: 'center-=700',
        end: 'center-=400',
        scrub: true,
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
        scrub: true,
      },
    });
  });
  //Image slider
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.set('.imageTwo', {xPercent: 100});
    tl.set('.imageThree', {xPercent: 100});
    tl.to('.imageOne', {xPercent: 0, duration: 2});
    tl.to('.imageTwo', {xPercent: 0, duration: 2});
    tl.to('.imageThree', {xPercent: 0, duration: 2});

    tl.repeat(1);
  });
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="relative flex justify-center items-center h-5/6 w-11/12">
        <div className="flex flex-col justify-center items-end w-1/2 overflow-hidden">
          <div className="portfolioLink flex justify-between items-center w-full h-28 border-b p-10 font-light">
            <h3 className="select-none">
              01. <span className="ml-12">Armenian learning website.</span>
            </h3>
            <button>
              <img src={link} alt="link" className="hover:scale-105" />
            </button>
          </div>

          <div className="portfolioLink flex justify-between items-center w-full h-28 border-b p-10">
            <h3 className="select-none">
              02. <span className="ml-12 select-none">Coming soon</span>
            </h3>

            <img src={link} alt="link" />
          </div>
          <div className="portfolioLink relative flex justify-between items-center w-full h-28 border-b p-10">
            <h3 className="select-none">
              03. <span className="ml-12">Coming soon</span>
            </h3>

            <img src={link} alt="link" />

            <a
              href="#"
              className="portfolioLink absolute -bottom-10 right-0 text-right"
            >
              MORE.
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center w-1/2 h-4/6 bg-black/30 p-5 m-10">
          <div className="relative w-3/4 flex rounded-md object-cover overflow-hidden border">
            <img src={armenian} alt="armenian" className="imageOne z-0" />
            <div className="bg-black h-full w-full absolute top-0 left-0 imageTwo z-10" />
            <div className="bg-white h-full w-full absolute top-0 left-0 imageThree z-20 " />
          </div>

          <div className="flex items-center justify-between w-3/4">
            <div className="mx-6 select-none">
              <h4 className="text-lg font-extrabold flex">FRONT END</h4>
              <ul className="text-sm">
                <li>LANGUAGE SWITCHER</li>
                <li>PAGES ANIMATION</li>
                <li>WORD GAME</li>
                <li>DARKMODE</li>
                <li>PARALLAX</li>
                <li>REACT ROUTER</li>
              </ul>
            </div>
            <div>
              <a
                href="https://armenian-occidental.com"
                className="rounded-full px-4 py-2 border"
              >
                WEBSITE
              </a>
            </div>
          </div>

          <h2 className="portfolio absolute top-0 right-0 playfair text-6xl select-none">
            Portfolio.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Section3;
