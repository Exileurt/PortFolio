import Menu from './Menu';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

import gradiant from '../../assets/gradient/gradient.png';
import gradiant2 from '../../assets/gradient/gradient2.png';
import gradiant3 from '../../assets/gradient/gradient3.png';
import gradiant4 from '../../assets/gradient/gradient4.png';

const Home = () => {
  return (
    <div className="bg-dark-d text-light-white m-0 border border-black z-10">
      <span className="z-0">
        <img
          src={gradiant}
          alt="gradiant"
          className="absolute left-1/2 transform -translate-x-1/2"
        />
        <img
          src={gradiant2}
          alt="gradiant2"
          className="absolute -bottom-96 right-0"
        />
        <img
          src={gradiant3}
          alt="gradiant3"
          className="absolute -bottom-[90rem] left-0"
        />
        <img
          src={gradiant4}
          alt="gradiant4"
          className="absolute -bottom-[170rem] right-0"
        />
      </span>

      <Menu />
      <div id="section1">
        <Section1 />
      </div>
      <div id="section2">
        <Section2 />
      </div>

      <div id="section3">
        <Section3 />
      </div>
      <div id="section4">
        <Section4 />
      </div>
      <div id="section5">
        <Section5 />
      </div>
    </div>
  );
};

export default Home;
