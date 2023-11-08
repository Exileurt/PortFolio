import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RouterPages from './pages/RouterPages';
import ScrollDriven from './components/scrollDriven/scrollDriven';

const App = () => {
  return (
    <div className="h-screen relative bg-gradient-to-r from-very-dark-yellow to-black">
      <Router>
        <ScrollDriven />
        <Routes>
          <Route path="/*" element={<RouterPages />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
