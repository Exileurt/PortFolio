import Hero from './Hero';
import PanelOne from './PanelOne';
import PanelTwo from './PanelTwo';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  return (
    <div>
      <PanelTwo />
      <PanelOne />
      <Hero />

      <div className="flex justify-center h-screen bg-gradient-to-r from-very-dark-yellow to-black"></div>
      <div className="flex justify-center h-screen bg-gradient-to-r from-very-dark-yellow to-black"></div>
      <div className="flex justify-center h-screen bg-gradient-to-r from-very-dark-yellow to-black"></div>
    </div>
  );
};

export default Menu;
