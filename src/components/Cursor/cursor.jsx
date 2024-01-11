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
      duration: 0.9,
      ease: 'back.out(1.7)',
    });
    let yTo = gsap.quickTo(cursorOut.current, 'y', {
      duration: 0.9,
      ease: 'back.out(1.7)',
    });
    window.addEventListener('mousemove', e => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }, []);

  const onEnterCursor = () => {
    gsap.to(cursorOut.current, {
      scale: 3,
      backgroundColor: 'white',
      borderColor: 'transparent',
    });
  };
  const onLeaveCursor = () => {
    gsap.to(cursorOut.current, {
      scale: 1,
      backgroundColor: 'transparent',
      borderColor: 'white',
    });
  };

  return (
    <CursorContext.Provider
      value={{cursor, cursorOut, onEnterCursor, onLeaveCursor}}
    >
      {children}
      <div>
        <div
          ref={cursorOut}
          className="fixed w-7 h-7 top-0 left-0 border border-white rounded-full pointer-events-none mix-blend-difference"
        />
      </div>
    </CursorContext.Provider>
  );
};

CursorProvider.propTypes = {
  children: PropTypes.node,
};

export default CursorProvider;
