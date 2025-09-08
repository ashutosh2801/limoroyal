import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      
    </>
  )
}

export default App
