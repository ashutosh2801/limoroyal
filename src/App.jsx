import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import FloatingActions from './components/FloatingActions'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
  document.body.classList.add("preload");
  AOS.init({
    duration: 800,
    once: true,
  });
  setTimeout(() => {
    document.body.classList.remove("preload");
  }, 800); // match AOS duration
}, []);


  return (
    <>
      <Header />
      <main className='min-h-screen flex flex-col'>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default App
