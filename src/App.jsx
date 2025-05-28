import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/navigation/Navigation'
import Home from './pages/Home/Home'
import Counter from './pages/Counter/Counter'
import Learning from './pages/Learning/Learning'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
