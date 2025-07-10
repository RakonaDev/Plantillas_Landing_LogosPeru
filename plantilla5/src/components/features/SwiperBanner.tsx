
import Banner1 from "../../assets/banner/banner1.webp"

import './SwiperBanner.css'


const bannerData = {
  // Using placeholder images from placehold.co
  // You can replace these with your actual image URLs later.
  image: Banner1,
  title: 'Tu salud, en manos confiables',
  slogan: 'En nuestros consultorios médicos, recibirás atención personalizada de profesionales certificados que se preocupan por tu bienestar.',

  whatsappLink: '#',
  facebookLink: 'https://www.facebook.com/DLogosPeru/?locale=es_LA',
  twitterLink: '#',
  instagramLink: 'https://www.instagram.com/dlogosperu/?hl=es'
};


const BannerSlider = () => {

  return (

    <div className="relative w-full h-screen overflow-hidden font-inter bg-slate-200" id="inicio">

      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl transition-opacity m-6 duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${bannerData.image})` }}
      >

        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
      </div>


      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-5">

        <h1 className="text-3xl Nove-font-bold md:text-5xl lg:text-6xl font-extrabold mb-4 animate-fadeInUp">
          {bannerData.title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fadeInUp delay-200">
          {bannerData.slogan}
        </p>
        
        <div className="flex justify-center gap-6 mt-0">
          <a
            href={bannerData.whatsappLink}
            target="_blank" // Opens link in a new tab
            rel="noreferrer" // Security best practice for target="_blank"
            className="flex items-center justify-center p-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300 shadow-lg transform hover:scale-105"
            aria-label="WhatsApp" // Accessibility label
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.6-3.807-1.6-5.836 0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12c-1.933 0-3.812-.579-5.441-1.571l-6.059 1.624zm8.007-4.229l-.497-.245c-1.127-.577-2.316-.92-3.519-.92-4.148 0-7.5 3.352-7.5 7.5 0 1.554.484 2.993 1.304 4.195l-1.378 5.031 5.176-1.394c1.196.76 2.531 1.169 3.905 1.169h.005c4.148 0 7.5-3.352 7.5-7.5 0-2.029-.792-3.896-2.083-5.361l-.497-.245zm5.556 1.932c-3.153-1.637-5.558-4.639-6.858-7.955l-1.126-2.903c-.22-.567-.024-1.225.543-1.444l4.316-1.748c.567-.219 1.226-.024 1.445.543l.794 2.053c.22.567.024 1.225-.543 1.444l-2.001.81c-.567.219-.79.882-.497 1.45l2.001 3.25c.293.476.126 1.097-.393 1.343l-1.272.645z" />
            </svg>
          </a>


          <a
            href={bannerData.facebookLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
            aria-label="Facebook"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.815c-3.235 0-4.185 1.264-4.185 4.074v2.926z" />
            </svg>
          </a>


          <a
            href={bannerData.twitterLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center p-3 rounded-full bg-blue-400 hover:bg-blue-500 transition-colors duration-300 shadow-lg transform hover:scale-105"
            aria-label="Twitter"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.222 0-5.55 2.92-4.707 6.104-4.015-.2-7.575-2.115-9.988-5.012-.424.722-.666 1.564-.666 2.47 0 1.7.868 3.21 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.041c0 3.163 2.222 5.8 5.143 6.398-.544.148-1.119.224-1.705.224-.417 0-.82-.041-1.215-.116.814 2.54 3.177 4.385 5.836 4.439-2.204 1.72-4.99 2.766-8.054 2.766-1.564 0-3.045-.091-4.503-.263 2.855 1.815 6.207 2.879 9.803 2.879 11.758 0 18.156-9.458 18.156-17.653 0-.269-.006-.53-.018-.79z" />
            </svg>
          </a>


          <a
            href={bannerData.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors duration-300 shadow-lg transform hover:scale-105"
            aria-label="Instagram"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.691 4.771-4.919 4.919-.058.003-1.265.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.691-4.771 4.919-4.919.058-.003 1.265-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>


      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;           
            transform: translateY(50px); 
          }
          to {
            opacity: 1;           
            transform: translateY(0);   
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInUp.delay-200 {
            animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default BannerSlider;