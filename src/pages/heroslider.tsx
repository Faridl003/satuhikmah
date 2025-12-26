import { useState, useRef, useEffect } from "react";

const slides = [
  {
    src: "/images/slide1.jpg",
    alt: "Peserta Kembara Hikmah berdiskusi di alam terbuka",
    title: "Kembara Hikmah #2",
    subtitle:
      "Sebuah perjalanan alam mendekat kepada Allah dan menemukan versi terbaik diri sendiri bersama Kembara Hikmah hadir kembali 🙌🏻",
  },
  {
    src: "/images/slide2.jpg",
    alt: "Sekolah Pra Nikah Gen Z",
    title: "Sekolah Pra Nikah Gen Z",
    subtitle:
      "Menikah bukan akhir dari perjalananmu berkarya, justru awal untuk tumbuh bersama pasangan",
  },
  {
    src: "/images/slide3.jpg",
    alt: "Muda Berhikah #4",
    title: "Muda Berhikah #4",
    subtitle:
      "Sebuah perjalanan alam mendekat kepada Allah dan menemukan versi terbaik diri sendiri bersama Kembara Hikmah hadir kembali🙌🏻",
  },
];

const HeroSlider = () => {
  const [active, setActive] = useState(0);
  const startX = useRef(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Swipe handler
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) setActive((p) => (p + 1) % slides.length);
    if (endX - startX.current > 50)
      setActive((p) => (p - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="mt-20 relative h-[450px] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          title={`Dokumentasi ${img.title}`}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
      ${i === active ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
        />
      ))}

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6">
          {slides[active].title}
        </h1>
        <p className="text-gray-100 text-lg md:text-xl max-w-3xl">
          {slides[active].subtitle}
        </p>
      </div>

      {/* Arrows */}
      <button
        aria-label="Slide sebelumnya"
        title="Slide sebelumnya"
        onClick={() => setActive((active - 1 + slides.length) % slides.length)}
        className="
    absolute left-8 top-1/2 -translate-y-1/2 z-30
    w-14 h-14 bg-white rounded-xl shadow-xl
    flex items-center justify-center
    hover:scale-110 hover:shadow-2xl transition
  "
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        aria-label="Slide berikutnya"
        title="Slide berikutnya"
        onClick={() => setActive((active + 1) % slides.length)}
        className="
    absolute right-8 top-1/2 -translate-y-1/2 z-30
    w-14 h-14 bg-white rounded-xl shadow-xl
    flex items-center justify-center
    hover:scale-110 hover:shadow-2xl transition
  "
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Ke slide ${i + 1}`}
            title={`Ke slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === active ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
