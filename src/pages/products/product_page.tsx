import React from "react";

// Ikon untuk placeholder gambar
const ImagePlaceholderIcon = () => (
  <svg
    className="w-16 h-16 text-gray-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
  </svg>
);

// Ikon untuk daftar fitur
const CheckIcon = ({ className = "" }) => (
  <svg
    className={`w-5 h-5 mr-3 flex-shrink-0 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

// Ikon untuk kartu harga
const BoxIcon = () => (
  <svg
    className="w-6 h-6 text-gray-800"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m0 0v10l8 4m0-14L4 7m8 4v10M4 7v10l8 4"
    ></path>
  </svg>
);

// Data untuk pembicara
const speakersData = [
  {
    name: "Dewi Nur Aisyah, PHD",
    credentials: "Host of Inspiring Talkshow, UCL, Woman of The Year 2020",
    topic: '"Menggapai Mimpi Bersama Pasangan Hidup"',
    imageUrl:
      "https://images.unsplsh.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format=fit-crop&ixlib-rb-4.0.3&id=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ratih Nur Esti Anggraini, PHD",
    credentials: "PhD University of Bristol, UK",
    topic: '"Dilema Perempuan Berkarir"',
    imageUrl:
      "https://images.unsplash.com/photo-1541413807952-df54c9223565?q=80&w=1974&auto=format=fit-crop&ixlib-rb-4.0.3&id=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Monika Pury Oktora, PHD",
    credentials: "Host of Inspiring Talkshow, UCL, Woman of The Year 2020",
    topic: '"Menggapai Mimpi Bersama Pasangan Hidup"',
    imageUrl: "",
  },
  {
    name: "Productivity masterclass",
    credentials: "Self paced",
    topic: "$55",
    imageUrl: "",
  },
  {
    name: "Communication skills",
    credentials: "Self paced",
    topic: "$75",
    imageUrl: "",
  },
];

// Data untuk paket harga
const pricingData = [
  {
    plan: "Single",
    price: "32.000",
    includes: ["1 Webinar Pilihan", "1 E-Book", "1 PPT Materi"],
  },
  {
    plan: "Triple",
    price: "87.000",
    includes: ["3 Webinar Pilihan", "3 E-Book", "3 PPT Materi"],
  },
  {
    plan: "Bundling",
    price: "125.000",
    includes: ["Webinar Full Salah Satu Series", "5 E-Book", "5 PPT Materi"],
  },
];

// Komponen Kartu Harga
const PricingCard = ({ plan, price, includes }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{plan}</h3>
        <p className="mt-2 text-4xl font-bold text-gray-900">
          <span className="text-2xl align-top">Rp</span>
          {price}
        </p>
      </div>
      <BoxIcon />
    </div>
    <hr className="my-6 border-gray-200" />
    <p className="text-sm font-semibold text-gray-600">Includes:</p>
    <ul className="mt-4 space-y-3 text-gray-700 flex-grow">
      {includes.map((item, index) => (
        <li key={index} className="flex items-center">
          <CheckIcon className="text-green-500" />
          {item}
        </li>
      ))}
    </ul>
    <button className="mt-8 w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors">
      Hubungi Admin
    </button>
  </div>
);

// Komponen utama
export default function WebinarPage() {
  return (
    <main className="bg-white">
      {/* Bagian Hero dan Pembicara */}
      <section className="p-4 sm:p-6 lg:p-8">
        <div className="bg-yellow-100 rounded-3xl py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <img
                  src="/assets/banner/hijab.png"
                  alt="Hijab & PhD Mom Webinar"
                  className="rounded-xl object-cover w-full h-full pt-9"
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="inline-block bg-white text-yellow-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                  Best Deal
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
                  Bundling Series Hijab & PhD Mom
                </h2>
                <p className="mt-3 text-base text-gray-700">
                  Belajar dari 5 sosok Muslimah hebat yang membuktikan: Hijab
                  bukan penghalang meraih gelar, ilmu, cinta, dan keberkahan,
                  bergerak dari Amerika hingga Eropa.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckIcon /> 5 Rekaman Webinar
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> 5 E-Book
                  </li>
                  <li className="flex items-center">
                    <CheckIcon /> 5 PPT Materi
                  </li>
                </ul>
                <button className="mt-8 bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors">
                  Hubungi Admin
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-24 text-center">
            <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Webinars
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Series Hijab & PhD Mom
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              5 Inspirasi, 1 Tujuan: Muslimah Tangguh Menaklukkan Dunia
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {speakersData.map((speaker, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  {speaker.imageUrl ? (
                    <img
                      src={speaker.imageUrl}
                      alt={speaker.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <ImagePlaceholderIcon />
                  )}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-500">{speaker.credentials}</p>
                <p className="mt-1 text-base text-gray-700">{speaker.topic}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button className="border border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              View all
            </button>
          </div>
        </div>
      </section>

      {/* Bagian Pilihan Paket Webinar */}
      <section className="bg-white p-4 sm:p-6 lg:p-8">
        <div className="bg-yellow-100 rounded-3xl py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Pricing
              </p>
              <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
                Pilihan Paket Webinar
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingData.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Informasi Terbaru */}
      <section className="bg-white p-4 sm:p-6 lg:p-8">
        <div className="relative bg-gray-800 py-20 rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/Card.jpg"
              alt="Community"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Dapatkan Informasi Webinar Terbaru dari Kami
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Mari bergabung dengan komunitas kami dan ikuti media sosial kami
              untuk selalu update dengan kabar dan kegiatan terbaru.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="bg-white text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors w-full sm:w-auto">
                Join Our Community
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-gray-800 transition-colors w-full sm:w-auto">
                Follow Us on Instagram
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
