import Image from "next/image";
import Ucell from '../../../public/ucell.png'
import Beline from '../../../public/beline.png'
import Uzmobile from '../../../public/uztelecom.png'
import Mobi from '../../../public/mobi.png'

export default function Order() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4">
        <h3 className="text-lg font-semibold text-green-800 mb-4">Kategoriyalar</h3>
        <ul className="space-y-2">
          {["Uyali aloqa", "Internet", "Kommunal xizmatlar", "To'lov turlari"].map((category) => (
            <li key={category}>
              <a
                href="#"
                className="text-gray-700 hover:text-green-800 hover:bg-gray-100 p-2 rounded block transition-colors duration-200"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Logolar */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {[
            { src: Ucell, alt: "Ucell", name: "Ucell" },
            { src: Mobi, alt: "Mobi", name: "Mobi" },
            { src: Uzmobile, alt: "Uzmobile", name: "Uzmobile" },
          ].map((logo) => (
            <div key={logo.name} className="text-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={80}
                className="mx-auto object-contain"
              />
              <p className="text-gray-700 mt-2">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}