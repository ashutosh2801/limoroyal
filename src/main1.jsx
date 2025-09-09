import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import CorporateLimoService from './CorporateLimoService.jsx'
import ExecutiveCarHire from './ExecutiveCarHire.jsx'
import CasinoLimoService from './CasinoLimoService.jsx'
import AirportTransfers from './AirportTransfers.jsx'
import WeddingCars from './WeddingCars.jsx'
import LadiesNightOutLimoService from './LadiesNightOutLimoService.jsx'
import Events from './Events.jsx'
import AirportMeetandGreetServices from './AirportMeetandGreetServices.jsx'
import Promotions from './Promotions.jsx'
import BacheloretteServices from './BacheloretteServices.jsx'
import LongDistanceLimoService from './LongDistanceLimoService.jsx'
import LuxuryChauffeuringServices from './LuxuryChauffeuringServices.jsx'
import About from './About.jsx'
import LuxuryLimousine from './LuxuryLimousine.jsx'
import BusCharter from './BusCharter.jsx'
import AreasServed from './AreasServed.jsx'
import Fleet from './Fleet.jsx'
import Contact from './Contact.jsx'
import OnlineReservations from './OnlineReservations.jsx'
import Login from './Login.jsx'
import LuxuryJetCharter from './LuxuryJetCharter.jsx'
import CloseProtectionService from './CloseProtectionService.jsx'
import SeaportsTransport from './SeaportsTransport.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='corporate-limo-service' element={< CorporateLimoService />} />
      <Route path='executive-car-hire' element={< ExecutiveCarHire />} />
      <Route path='casino-limo-service' element={< CasinoLimoService />} />
      <Route path='airport-transfers' element={< AirportTransfers />} />
      <Route path='wedding-cars' element={< WeddingCars />} />
      <Route path='ladies-night-out-limo-service' element={< LadiesNightOutLimoService />} />
      <Route path='luxury-chauffeuring-services-to-londons' element={< Events />} />
      <Route path='airport-meet-and-greet-services' element={< AirportMeetandGreetServices />} />
      <Route path='promotions' element={< Promotions />} />
      <Route path='birthdays-bachelor-and-bachelorette-limo-service' element={< BacheloretteServices />} />
      <Route path='long-distance-limo-service' element={< LongDistanceLimoService />} />
      <Route path='luxury-chauffeuring-services' element={< LuxuryChauffeuringServices />} />
      <Route path='luxury-jet-charter' element={< LuxuryJetCharter />} />
      <Route path='close-protection-service' element={< CloseProtectionService />} />
      <Route path='seaports-transport' element={< SeaportsTransport />} />
      <Route path='about' element={< About />} />
      <Route path='luxury-limousine' element={< LuxuryLimousine />} />
      <Route path='bus-charter' element={< BusCharter />} />
      <Route path='areas-served' element={< AreasServed />} />
      <Route path='fleet' element={< Fleet />} />
      <Route path='contact' element={< Contact />} />
      <Route path='online-reservations' element={< OnlineReservations />} />
      <Route path='login' element={< Login />} />
    </Route>
  )
)

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
