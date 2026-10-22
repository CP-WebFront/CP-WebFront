import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Produtos from './pages/Produtos'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#141414] pt-4">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
        <Footer />
      </div>
      
    </Router>
  )
}

export default App
