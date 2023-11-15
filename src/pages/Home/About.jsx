import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import {useLayoutEffect} from 'react';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({paused: true});
    tl.to('.darkForest', {
      visibility: 'hidden',
      scrollTrigger: {
        scrub: true,
        start: 'top',
        end: 'center-=300',
      },
    });
    tl.to('.darkForest', {
      visibility: 'visible',
      display: 'flex',
      height: '100vh',
      scrollTrigger: {
        scrub: true,
        start: 'center-=300',
        end: 'center-=200',
      },
    });
    tl.to('.darkForest', {
      width: '100%',
      scrollTrigger: {
        scrub: true,
        start: 'center-=200',
        end: 'center+=200',
      },
    });
    tl.to('.darkForest', {
      delay: 6,
      backgroundPositionY: 0,
      scrollTrigger: {
        scrub: 1,
        start: 'center+=200',
        end: 'bottom+=500',
        toggleActions: 'play',
      },
    });
  });

  return (
    <div className="darkForest fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-darkForest bg-cover bg-center border-4 border-amber-400 hidden justify-center items-center text-amber-400"></div>
  );
};

export default About;
