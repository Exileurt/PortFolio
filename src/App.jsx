import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RouterPages from './pages/RouterPages';
import ScrollDriven from './components/scrollDriven/scrollDriven';
import Cursor from './components/Cursor/cursor.jsx';

const App = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-very-dark-yellow to-black">
      <Router>
        <Cursor />
        <ScrollDriven />
        <Routes>
          <Route path="/*" element={<RouterPages />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
