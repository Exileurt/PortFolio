import screen from '../../assets/screen.svg';
import paint from '../../assets/paint.svg';
import community from '../../assets/community.svg';

const section4 = () => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="relative flex justify-center items-center h-5/6 w-11/12">
        <h2 className="absolute top-0 left-0 playfair text-6xl">Skills.</h2>
        <div className="flex max-w-[30rem] flex-wrap">
          <div className="mx-10">
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
          <div className="mx-10">
            <h4 className="flex text-xl font-extrabold">
              <img src={paint} alt="paint" className="mr-4" />
              DESIGN
            </h4>

            <ul className="ml-10">
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

            <ul className="ml-10">
              <li>GITHUB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section4;
