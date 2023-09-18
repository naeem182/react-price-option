
import './App.css'
import DaisyNav from './Components/Daisy_nav/DaisyNav'
import NavBar from './Components/Daisy_nav/NavBar/NavBar'
import PriceOptions from './Components/Price/PriceOptions'

function App() {


  return (
    <>
      <div className=' container mx-auto my-5'>

        <NavBar></NavBar>
        <DaisyNav ></DaisyNav>
      </div>
      <PriceOptions></PriceOptions>

      <h1 className='text-7xl'>Vite + React</h1>
    </>
  )
}

export default App
