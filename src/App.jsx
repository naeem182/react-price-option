
import './App.css'
import ProgressLine from './Components/Chart/ProgressLine'
import DaisyNav from './Components/Daisy_nav/DaisyNav'
import NavBar from './Components/Daisy_nav/NavBar/NavBar'
import Phone from './Components/PHONES/Phone'
import PriceOptions from './Components/Price/PriceOptions'

function App() {


  return (
    <>
      <div className=' container mx-auto my-5'>

        <NavBar></NavBar>
        <DaisyNav ></DaisyNav>
      </div>
      <PriceOptions></PriceOptions>
      <ProgressLine></ProgressLine>
      <Phone></Phone>

    </>
  )
}

export default App
