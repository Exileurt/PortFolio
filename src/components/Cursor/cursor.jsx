import {createContext, useRef, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import {gsap} from 'gsap';

export const CursorContext = createContext();

const CursorProvider = ({children}) => {
  const cursor = useRef();

  useLayoutEffect(() => {
    const handleMouseDown = () => {
      gsap.to(cursorOut.current, {
        scale: 2,
        ease: 'ease',
      });
    };
    const handleMouseUp = () => {
      gsap.to(cursorOut.current, {
        scale: 1,
        ease: 'ease',
      });
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
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

  const onEnterCursor = () => {
    gsap.to(cursorOut.current, {
      scale: 2,
    });
  };
  const onLeaveCursor = () => {
    gsap.to(cursorOut.current, {scale: 1});
  };

  return (
    <CursorContext.Provider
      value={{cursor, cursorOut, onEnterCursor, onLeaveCursor}}
    >
      {children}
      <div>
        <div
          ref={cursorOut}
          className="fixed w-7 h-7 top-0 left-0 bg-white/20 rounded-full z-50 pointer-events-none"
        />
      </div>
    </CursorContext.Provider>
  );
};

CursorProvider.propTypes = {
  children: PropTypes.node,
};

export default CursorProvider;
