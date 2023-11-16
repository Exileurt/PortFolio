import Hero from './Hero';
import PanelOne from './PanelOne';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import {useLayoutEffect} from 'react';
gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to('.aboutDisplay', {
      visibility: 'visible',
      scrollTrigger: {scrub: true, start: 'center-=300'},
    });
  }, []);

  return (
    <div>
      <PanelOne />
      <Hero />

      <div className="flex justify-center h-screen bg-gradient-to-r from-very-dark-yellow to-black"></div>
      <div className="flex justify-center h-screen bg-gradient-to-r from-very-dark-yellow to-black"></div>
      <div className="flex justify-center h-screen bg-gradient-to-r from-very-dark-yellow to-black"></div>
    </div>
  );
};

export default Menu;
