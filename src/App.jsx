import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import MainPage from './components/MainPage'
import Footer from './components/Footer'


function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className=''>
        <BrowserRouter>

          <Routes>
            <Route element={<Header />} path='/Header' />
            <Route element={<MainPage />} path='/MainPage' />
            <Route element={<Footer />} path='/Footer' />
          </Routes>
          
        </BrowserRouter>
    </div>
  )
}

export default App
