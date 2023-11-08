import { Route, Routes } from 'react-router'
import Home from './Home/Home.jsx'

function RouterPages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default RouterPages
