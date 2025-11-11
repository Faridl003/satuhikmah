import React, { useState } from "react";

// You can replace this with your actual program data
const programsData = [
  {
    tag: "Muda Berhikmah",
    title: "Sekolah Pra-Nikah Gen Z: Self Check",
    description:
      "Menikah bukan akhir dari perjalananmu berkarya, justru awal untuk tumbuh bersama pasangan.",
    imageUrl: "/assets/banner/Nikah.png",
    imageAlt: "Sekolah Pra-Nikah Gen Z Event Poster",
  },
  {
    tag: "Kembara Hikmah",
    title: "Kembara Hikmah #2",
    description:
      "Saatnya menepi sejenak, bernafas bersama keindahan alam-Nya, dan menemukan versi terbaik diri kita bersama Kembara Hikmah.",
    imageUrl: "/assets/banner/kembaraHikmah.png",
    imageAlt: "Kembara Hikmah #2 Event Poster",
  },
  {
    tag: "Muda Hikmah",
    title: "Grit for Gen Z",
    description:
      "GRIT FOR GEN Z: Yuk, Bangun Daya Tahan & Karakter Bernilai di Era Serba Cepat!!.",
    imageUrl: "/assets/banner/Genz.png",
    imageAlt: "Digital Skill Workshop Poster",
  },
];

// Reusable Arrow SVG component for navigation
const ArrowIcon = ({ className = "" }) => (
  <svg
    className={`w-6 h-6 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    ></path>
  </svg>
);

// Main Programs Section Component
export default function ProgramsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Group programs into pairs to create slides for the carousel
  const programSlides = [];
  for (let i = 0; i < programsData.length; i += 2) {
    programSlides.push(programsData.slice(i, i + 2));
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? programSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === programSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section
      className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      id="program"
    >
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-12">
          <p className="text-lg font-semibold text-gray-600">On Going</p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Programs
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {/* Map through the slides (each containing two programs) */}
            {programSlides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-8 px-2"
              >
                {/* Map through the programs in the current slide */}
                {slide.map((program, programIndex) => (
                  <div
                    key={programIndex}
                    className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row h-auto md:h-[400px]"
                  >
                    {/* Text Content */}
                    <div className="p-8 lg:p-10 w-full md:w-1/2 flex flex-col justify-center">
                      <span className="bg-gray-100 text-gray-800 text-sm font-medium self-start px-3 py-1.5 rounded-lg">
                        {program.tag}
                      </span>
                      <h3 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">
                        {program.title}
                      </h3>
                      <p className="mt-4 text-sm text-gray-600">
                        {program.description}
                      </p>
                      <a
                        href="#"
                        className="mt-8 inline-flex items-center font-semibold text-gray-900 hover:text-gray-700 transition-colors"
                      >
                        Daftar Sekarang
                        <ArrowIcon className="ml-2 w-5 h-5" />
                      </a>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2 h-[400px] bg-white flex">
                      <img
                        src={program.imageUrl}
                        alt={program.imageAlt}
                        className="w-full h-full object-cover m-0 p-0 block"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-12">
          {/* Carousel Dots */}
          <div className="flex items-center space-x-2">
            {programSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-6 bg-gray-900"
                    : "w-2.5 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ArrowIcon className="w-5 h-5 transform rotate-180" />
            </button>
            <button
              onClick={goToNext}
              className="p-3 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ArrowIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
