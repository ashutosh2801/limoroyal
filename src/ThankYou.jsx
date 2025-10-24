import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div>
        <Helmet>
            <title>Thank You Limo Royale | Book Your Luxury Chauffeur Service Today</title>
            <meta name="description" content="Travel like royalty with Limo Royale. Premium fleet, expert chauffeurs, and personalized service for corporate, airport, or special events. Book now!" />
            <meta name="keywords" content="airport chauffeur service, airport limo service" />
            <link rel="canonical" href="https://limoroyal.com/thank-you" />
            <meta name="robots" content="index, follow"/>
        </Helmet>

        <div className="flex flex-col justify-center items-center h-screen bg-black text-center">
            <CheckCircleIcon className="webColor w-20 h-20 mb-4" />
            <h1 className="text-3xl font-bold mb-2 text-white">Thank You!</h1>
            <p className="webFontColor mb-6 max-w-md">
                Your message has been successfully submitted. We’ll get back to you as soon as possible.
            </p>
            <button onClick={() => navigate("/")} className="book-now-link px-6 py-2 transition cursor-pointer">
                Back to Home
            </button>
        </div>
    </div>
  );
}
