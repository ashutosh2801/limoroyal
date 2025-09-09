import { PhoneIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end space-y-3 z-50  md:hidden">
        {/* <a href="https://wa.me/4167255466" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition" >
            <FaWhatsapp className="h-6 w-6" />
        </a> */}
        <a href="tel:4167255466" className="flex items-center space-x-2 text-white">
            {/* <span className="webBG rounded-full shadow-lg transition px-3 py-2 font-semibold">416-725-5466</span> */}
            <span className="webBG rounded-full shadow-lg hover:bg-yellow-800 transition p-3"><PhoneIcon className="h-5 w-5" /></span>
        </a>
    </div>
  );
}
