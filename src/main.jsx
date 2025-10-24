import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Lazy-loaded pages
const Home = lazy(() => import("./Home.jsx"));
const CorporateLimoService = lazy(() => import("./CorporateLimoService.jsx"));
const ExecutiveCarHire = lazy(() => import("./ExecutiveCarHire.jsx"));
const CasinoLimoService = lazy(() => import("./CasinoLimoService.jsx"));
const AirportTransfers = lazy(() => import("./AirportTransfers.jsx"));
const WeddingCars = lazy(() => import("./WeddingCars.jsx"));
const LadiesNightOutLimoService = lazy(() =>
  import("./LadiesNightOutLimoService.jsx")
);
const Events = lazy(() => import("./Events.jsx"));
const AirportMeetandGreetServices = lazy(() =>
  import("./AirportMeetandGreetServices.jsx")
);
const Promotions = lazy(() => import("./Promotions.jsx"));
const BacheloretteServices = lazy(() =>
  import("./BacheloretteServices.jsx")
);
const LongDistanceLimoService = lazy(() =>
  import("./LongDistanceLimoService.jsx")
);
const LuxuryChauffeuringServices = lazy(() =>
  import("./LuxuryChauffeuringServices.jsx")
);
const About = lazy(() => import("./About.jsx"));
const LuxuryLimousine = lazy(() => import("./LuxuryLimousine.jsx"));
const BusCharter = lazy(() => import("./BusCharter.jsx"));
const AreasServed = lazy(() => import("./AreasServed.jsx"));
const Fleet = lazy(() => import("./Fleet.jsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const OnlineReservations = lazy(() => import("./OnlineReservations.jsx"));
const Login = lazy(() => import("./Login.jsx"));
const LuxuryJetCharter = lazy(() => import("./LuxuryJetCharter.jsx"));
const CloseProtectionService = lazy(() =>
  import("./CloseProtectionService.jsx")
);
const SeaportsTransport = lazy(() => import("./SeaportsTransport.jsx"));
const Sitemap = lazy(() => import("./Sitemap.jsx"));
const Thankyou = lazy(() => import("./Thankyou.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="corporate-limo-service"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <CorporateLimoService />
          </Suspense>
        }
      />
      <Route
        path="executive-car-hire"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ExecutiveCarHire />
          </Suspense>
        }
      />
      <Route
        path="casino-limo-service"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <CasinoLimoService />
          </Suspense>
        }
      />
      <Route
        path="airport-transfers"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <AirportTransfers />
          </Suspense>
        }
      />
      <Route
        path="wedding-cars"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <WeddingCars />
          </Suspense>
        }
      />
      <Route
        path="ladies-night-out-limo-service"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LadiesNightOutLimoService />
          </Suspense>
        }
      />
      <Route
        path="luxury-chauffeuring-services-to-londons"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Events />
          </Suspense>
        }
      />
      <Route
        path="airport-meet-and-greet-services"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <AirportMeetandGreetServices />
          </Suspense>
        }
      />
      <Route
        path="promotions"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Promotions />
          </Suspense>
        }
      />
      <Route
        path="birthdays-bachelor-and-bachelorette-limo-service"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <BacheloretteServices />
          </Suspense>
        }
      />
      <Route
        path="long-distance-limo-service"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LongDistanceLimoService />
          </Suspense>
        }
      />
      <Route
        path="luxury-chauffeuring-services"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LuxuryChauffeuringServices />
          </Suspense>
        }
      />
      <Route
        path="luxury-jet-charter"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LuxuryJetCharter />
          </Suspense>
        }
      />
      <Route
        path="close-protection-service"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <CloseProtectionService />
          </Suspense>
        }
      />
      <Route
        path="seaports-transport"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <SeaportsTransport />
          </Suspense>
        }
      />
      <Route
        path="about"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="luxury-limousine"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LuxuryLimousine />
          </Suspense>
        }
      />
      <Route
        path="bus-charter"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <BusCharter />
          </Suspense>
        }
      />
      <Route
        path="areas-served"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <AreasServed />
          </Suspense>
        }
      />
      <Route
        path="fleet"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Fleet />
          </Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="online-reservations"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <OnlineReservations />
          </Suspense>
        }
      />
      <Route
        path="login"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        }
      />
    <Route
        path="sitemap"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Sitemap />
          </Suspense>
        }
      />
    <Route
        path="thank-you"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Thankyou />
          </Suspense>
        }
      />
    </Route>
  )
);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
