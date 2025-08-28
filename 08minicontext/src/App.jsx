import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './components/Login'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
     <h1> lets start contextAPI</h1>
     <Login/>
     <Profile/>  //All components inside Usercontextprovider can use that data.
    </Usercontextprovider>
  )
}

export default App
