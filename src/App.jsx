
import './App.css'
import DaisyNav from './Components/Daisy_nav/DaisyNav'
import NavBar from './Components/Daisy_nav/NavBar/NavBar'

function App() {


  return (
    <>
      <div className=' container mx-auto my-5'>

        <NavBar></NavBar>
        <DaisyNav ></DaisyNav>
      </div>

      <h1 className='text-7xl'>Vite + React</h1>
    </>
  )
}

export default App
