import {useRef, useState} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import cross from '../../assets/cross.svg';
import arrow1 from '../../assets/arrow1.svg';
import link from '../../assets/link.svg';
import armenian from '../../assets/armenian.jpg';
import armenian1 from '../../assets/armenian1.jpg';
import armenian2 from '../../assets/armenian2.png';

const Section3 = () => {
  const container = useRef();
  const [linkOneIsOpen, setLinkOneIsOpen] = useState(false);
  const [animationlinkOne, setAnimationLinkOne] = useState(false);
  const linkOneHandleToggle = () => {
    if (linkOneIsOpen) {
      setAnimationLinkOne(false);
      setTimeout(() => {
        setLinkOneIsOpen(false);
      }, 500);
    } else {
      setAnimationLinkOne(true);
      setLinkOneIsOpen(true);
    }
  };

  //Link WebsiteOne -animation
  useGSAP(() => {
    let tl = gsap.timeline();
    if (linkOneIsOpen) {
      tl.set('.imageTwo', {xPercent: 100});
      tl.set('.imageThree', {xPercent: 100});
      tl.set('.imageFour', {xPercent: 100});
      tl.to('.imageOne', {xPercent: 0, duration: 2, ease: 'power1.out'});
      tl.to('.imageTwo', {xPercent: 0, duration: 3, ease: 'power1.out'});
      tl.to('.imageThree', {xPercent: 0, duration: 3, ease: 'power1.out'});
      tl.to('.imageFour', {xPercent: 0, duration: 2, ease: 'power1.out'});
      tl.repeat(1);
    }

    const tlWebsiteOne = gsap.timeline();
    if (animationlinkOne) {
      tlWebsiteOne.set('.websiteOne', {xPercent: 100});
      tlWebsiteOne.set('.functionnality', {xPercent: -100});
      tlWebsiteOne.set('.functionnalityList', {xPercent: -100});
      tlWebsiteOne.to('.websiteOne', {xPercent: 0, duration: 0.5});
      tlWebsiteOne.to('.functionnality', {xPercent: 0, duration: 0.5});
      tlWebsiteOne.to('.functionnalityList', {xPercent: 0, duration: 0.5});
    } else {
      tlWebsiteOne.to('.websiteOne', {xPercent: 100, duration: 0.5});
    }
  }, [linkOneIsOpen, animationlinkOne]);
  // BG transition
  const {contextSafe} = useGSAP({scope: container});

  const onHover = contextSafe(() => {
    gsap.set('.bgLinkOne', {yPercent: 100});
    gsap.to('.bgLinkOne', {yPercent: 0});
  });
  const onLeave = contextSafe(() => {
    gsap.set('.bgLinkOne', {yPercent: 0});
    gsap.to('.bgLinkOne', {yPercent: 100});
  });
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
    gsap.fromTo(
      '.portfolio',
      {x: 1000},
      {
        fontSize: '3.75rem',
        x: 0,
        y: 0,
        scrollTrigger: {
          start: 'center-=700',
          end: 'center-=400',
          scrub: true,
          immediateRender: false,
        },
      }
    );
  });

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden">
      <div className="relative flex justify-between items-center h-5/6 w-11/12">
        <div className="flex flex-col justify-center items-end w-1/2 pr-6 overflow-hidden">
          <div
            ref={container}
            className="portfolioLink relative flex justify-between items-center w-full h-28 border-b p-10 font-light overflow-hidden z-10"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <span className="absolute bgLinkOne bottom-0 left-0 bg-slate-200/10 h-full w-full z-0" />
            <h3 className="select-none">
              01. <span className="ml-12">Armenian learning website.</span>
            </h3>
            <button onClick={linkOneHandleToggle} className="z-10">
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

        {linkOneIsOpen && (
          <div className=" relative  w-1/2 h-4/6 rounded-md overflow-hidden">
            <div className="websiteOne flex flex-col items-center w-full h-full bg-black/20 p-5 rounded-md">
              <button>
                <img
                  src={cross}
                  alt="cross"
                  onClick={linkOneHandleToggle}
                  className="absolute top-5 left-5 w-6 hover:scale-105"
                />
              </button>
              <div className="relative w-3/4 flex rounded-md overflow-hidden">
                <img src={armenian} alt="armenian" className="imageOne z-0" />
                <img
                  src={armenian1}
                  alt="armenian1"
                  className="h-full w-full absolute top-0 left-0 imageTwo z-10"
                />
                <img
                  src={armenian2}
                  alt="armenian2"
                  className="h-full w-full absolute top-0 left-0 imageThree z-20"
                />
                <img
                  src={armenian}
                  alt="armenian"
                  className="h-full w-full absolute top-0 left-0 imageFour z-30"
                />
              </div>

              <div className="flex mt-2 items-center justify-between w-3/4">
                <div className="mx-6 select-none overflow-hidden">
                  <h4 className="functionnality text-lg font-extraboldflex">
                    FUNCTIONNALITY
                  </h4>
                  <ul className="functionnalityList text-sm">
                    <li>- LANGUAGE SWITCHER</li>
                    <li>- PAGES TRANSITION</li>
                    <li>- WORD GAME</li>
                    <li>- DARKMODE</li>
                    <li>- PARALLAX</li>
                    <li>- REACT ROUTER</li>
                  </ul>
                </div>

                <a
                  href="https://armenian-occidental.com"
                  rel="noreferrer"
                  target="_blank"
                  className="flex rounded-full px-4 py-2 border hover:bg-slate-200/20"
                >
                  WEBSITE
                  <img src={arrow1} alt="arrow1" className="-rotate-[140deg]" />
                </a>
              </div>
            </div>
          </div>
        )}

        <h2 className="portfolio absolute top-0 right-0 playfair text-6xl select-none">
          Portfolio.
        </h2>
      </div>
    </div>
  );
};

export default Section3;
