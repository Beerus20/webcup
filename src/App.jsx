// import { useState } from 'react'
import './App.css'
import Home from './pages/home.page';
import { login } from './services/services';
// import { createRoot } from 'react-dom/client'

function App() {
  // const [count, setCount] = useState(0)

  const handleClick = () => {
    login("BALLAIN", "ROOT123456");
  }
  return (
    <>
      <Home/>
      <button onClick={handleClick}>Post</button>
    </>
  )
}

export default App
