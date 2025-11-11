import React from "react";

// Data untuk bagian Testimonial
const testimonialsData = [
  {
    quote:
      "Last night activity that held after 2nd materials was very emotional, heart full of sorrows and mind with a full confidence.",
    author: "Mansur - Nigeria",
    program: "Peserta Kembara Hikmah",
    avatarUrl: "/assets/avatar/Avatar1.png",
  },
  {
    quote:
      "Dari sini dapat lebih banyak perspektif dan ilmu baru dari temen-temen. Banyak hal yang aku dapetin disini. Mulai dari ilmu, relasi, dan tentunya keberkahan.",
    author: "Zulai - Madura",
    program: "Peserta Kembara Hikmah",
    avatarUrl: "/assets/avatar/Avatar2.png",
  },
  {
    quote:
      "Aku jadi tau lebih jelas arah dan tujuan hidupku. Disini tentunya dapet banyak temen dengan sudut pandang dan cara berpikir yang lebih luas terkait kehidupan.",
    author: "Dina - Tuban",
    program: "Peserta Kembara Hikmah",
    avatarUrl: "/assets/avatar/Avatar3.png",
  },
];

// Komponen Bintang Rating
const StarRating = () => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-gray-900"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// Komponen Kartu Testimonial
const TestimonialCard = ({ quote, author, program, avatarUrl }) => (
  <div className="bg-white p-8 rounded-2xl border border-dashed border-gray-300 flex flex-col h-full">
    <StarRating />
    <p className="mt-6 text-gray-700 flex-grow">{quote}</p>
    <div className="mt-6 flex items-center">
      <img
        className="h-12 w-12 rounded-full object-cover"
        src={avatarUrl}
        alt={author}
      />
      <div className="ml-4">
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-gray-600">{program}</p>
      </div>
    </div>
  </div>
);

// Komponen Bagian "Community Voices"
function TestimonialsSection() {
  return (
    <div className="bg-white rounded-3xl py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Community voices
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real stories from our transformative programs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              program={testimonial.program}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Komponen Utama
export default function App() {
  return (
    <main>
      <TestimonialsSection />
    </main>
  );
}
