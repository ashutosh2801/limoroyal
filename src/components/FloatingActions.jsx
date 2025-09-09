import { PhoneIcon } from "@heroicons/react/24/solid";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 flex-col items-end space-y-3 z-50 flex md:hidden">
        <a href="tel:4167255466" className="flex items-center space-x-2 text-white">
            <span className="webBG rounded-full shadow-lg hover:bg-yellow-800 transition p-3"><PhoneIcon className="h-5 w-5" /></span>
        </a>
    </div>
  );
}
