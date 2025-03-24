import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './Pages/LandingPage'
import Footer from './components/Footer'
import Facilities from './Pages/Facilities'
import RoomRates from './Pages/RoomRates'
import FacilitiesComp from './components/trying/FacilitiesComp'
import ContactUs from './Pages/ContactUs'
import Events from './Pages/Events'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className=''>
        <BrowserRouter>

          <Routes>
            <Route element={<Header />} path='/Header' />
            <Route element={<LandingPage />} path='/LandingPage' />
            <Route element={<Footer />} path='/Footer' />
            <Route element={<Facilities />} path='/Facilities' />
            <Route element={<RoomRates />} path='/RoomRates' />
            <Route element={<FacilitiesComp />} path='/FacilitiesComp' />
            <Route element={<ContactUs />} path='/ContactUs' />
            <Route element={<Events />} path='/Events'  />
          </Routes>
          
        </BrowserRouter>
    </div>
  )
}

export default App
