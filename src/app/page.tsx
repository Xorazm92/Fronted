import Image from "next/image";
import fanta from '../../public/fanta.png';
import chicken from '../../public/meat.png'; 
import bisquit from '../../public/bisquit.png'

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4">
        <h3 className="text-lg font-semibold text-green-800 mb-4">Kategoriyalar</h3>
        <ul className="space-y-2">
          <li>
            <a href="/category/meat" className="text-gray-700 hover:text-green-800 hover:bg-gray-100 p-2 rounded block">
              Go'sht va Baliq
            </a>
          </li>
          <li>
            <a href="/category/food" className="text-gray-700 hover:text-green-800 hover:bg-gray-100 p-2 rounded block">
              Asosiy oziq-ovqatlar
            </a>
          </li>
          <li>
            <a href="/category/ready" className="text-gray-700 hover:text-green-800 hover:bg-gray-100 p-2 rounded block">
              Tayyor oziq-ovqatlar
            </a>
          </li>
          <li>
            <a href="/category/drinks" className="text-gray-700 hover:text-green-800 hover:bg-gray-100 p-2 rounded block">
              Ichimliklar
            </a>
          </li>
          <li>
            <a href="/category/electronics" className="text-gray-700 hover:text-green-800 hover:bg-gray-100 p-2 rounded block">
              Mobil telefon va kompyuter...
            </a>
          </li>
          <li>
            <a href="/category/beauty" className="text-gray-700 hover:text-green-800 hover:bg-gray-100 p-2 rounded block">
              Go'zallik & Sog'lik
            </a>
          </li>
          <li>
            <a href="/category/oil" className="text-gray-700 hover:text-green-800 hover:bg-gray-100 p-2 rounded block">
              Oliyiv do'kon
            </a>
          </li>
          <li>
            <a href="/category/books" className="text-gray-700 hover:text-green-800 hover:bg-gray-100 p-2 rounded block">
              Kitoblar
            </a>
          </li>
          <li>
            <a href="/category/sweets" className="text-gray-700 hover:text-green-800 hover:bg-gray-100 p-2 rounded block">
              Shirinliklar
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-5">
        <header className="text-center bg-green-100 p-5 rounded-lg">
          <h1 className="text-2xl text-green-800">Yangi O'rqa Do'koni</h1>
          <p className="text-gray-600 mt-2">
            Xush kelibsiz! Sizga eng yaxshi mahsulotlarni yetkazib berish uchun shu yerdamiz.
          </p>
        </header>
        <section className="mt-5">
          <div className="p-5">
            <p className="text-gray-700 leading-relaxed">
              Biz, Yangi O'rqa do'koni, O'zbekistonga sifatli mahsulotlar yetkazib berishda
              yetakchimiz. Fanta, tovuq go'shti va boshqa mahsulotlarimiz bilan sizning har
              bir kuningizni yanada mazali qilamiz! Bepul yetkazib berish xizmati bilan
              sizga qulaylikni ta'minlaymiz.
            </p>
            <p className="text-gray-700 mt-2">
              Aloqa uchun: <strong className="text-green-800">1833-2178</strong>
            </p>
          </div>
          <div className="p-5">
            <h2 className="text-xl text-green-800">Yangi Mahsulotlar</h2>
            <div className="flex gap-5 mt-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <Image
                  src={fanta.src}
                  alt="Fanta"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <p className="text-gray-700 mt-2">Fanta (0.33L)</p>
                <p className="text-red-600 font-bold mt-1">7,040 UZS</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <Image
                  src={chicken.src}
                  alt="Chicken"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <p className="text-gray-700 mt-2">Tovuq Go'shti</p>
                <p className="text-red-600 font-bold mt-1">7,040 UZS</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <Image
                  src={bisquit.src} // Agar biscuit rasm yo'q bo'lsa, meat rasmidan foydalanamiz
                  alt="Biscuit"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <p className="text-gray-700 mt-2">Lemon Biscuit</p>
                <p className="text-red-600 font-bold mt-1">7,040 UZS</p>
              </div>
            </div>
          </div>
        </section>
        <footer className="text-center mt-5 text-gray-500">
          <p>© 2025 Yangi O'rqa. Barcha huquqlar himoyalangan.</p>
        </footer>
      </div>
    </div>
  );
}