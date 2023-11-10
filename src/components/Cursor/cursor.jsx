import {useRef, useLayoutEffect} from 'react';
import {gsap} from 'gsap';

const Cursor = () => {
  const cursor = useRef();
  useLayoutEffect(() => {
    gsap.set(cursor.current, {xPercent: -50, yPercent: -50});
    let xTo = gsap.quickTo(cursor.current, 'x', {
      duration: 0.1,
      ease: 'ease',
    });
    let yTo = gsap.quickTo(cursor.current, 'y', {
      duration: 0.1,
      ease: 'ease',
    });
    window.addEventListener('mousemove', e => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }, []);

  const cursorOut = useRef();
  useLayoutEffect(() => {
    gsap.set(cursorOut.current, {xPercent: -50, yPercent: -50});
    let xTo = gsap.quickTo(cursorOut.current, 'x', {
      duration: 1.5,
      ease: 'back.out(1.7)',
    });
    let yTo = gsap.quickTo(cursorOut.current, 'y', {
      duration: 1.5,
      ease: 'back.out(1.7)',
    });
    window.addEventListener('mousemove', e => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }, []);

  return (
    <div>
      <div
        ref={cursor}
        className="fixed w-2 h-2  bg-amber-400 rounded-full z-50
        pointer-events-none"
      />
      <div
        ref={cursorOut}
        className="fixed w-7 h-7 border border-amber-400 rounded-full z-50
        pointer-events-none"
      />
    </div>
  );
};

export default Cursor;
