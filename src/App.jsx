import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RouterPages from './pages/RouterPages';
import ScrollDriven from './components/scrollDriven/scrollDriven';
import gsap from 'gsap';
import {useLayoutEffect, useRef} from 'react';

const App = () => {
  const cursor = useRef();
  useLayoutEffect(() => {
    gsap.set('.flair', {xPercent: -50, yPercent: -50});
    let xTo = gsap.quickTo(cursor.current, 'x', {
      duration: 2.5,
      ease: 'back.out(1.7)',
    });
    let yTo = gsap.quickTo(cursor.current, 'y', {
      duration: 2.5,
      ease: 'back.out(1.7)',
    });
    window.addEventListener('mousemove', e => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-very-dark-yellow to-black">
      <Router>
        <div
          ref={cursor}
          className="relative -top-2 -left-2 w-4 h-4 rounded-full bg-amber-400 z-50"
        ></div>
        <ScrollDriven />
        <Routes>
          <Route path="/*" element={<RouterPages />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
