import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RouterPages from './pages/RouterPages';
import CursorProvider from './components/Cursor/cursor.jsx';

const App = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-very-dark-yellow to-black">
      <CursorProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<RouterPages />} />
          </Routes>
        </Router>
      </CursorProvider>
    </div>
  );
};

export default App;
