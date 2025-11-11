import React from "react";

const valuesData = [
  { title: "Kuat Secara Ruhiyah", bg: "white" },
  { title: "Jernih Dalam Berpikir", bg: "#0F2947" },
  { title: "Kokoh Dalam Memegang Nilai", bg: "#0F2947" },
  { title: "Hadir Untuk Masyarakat", bg: "white" },
];

const ValueCard = ({ title, bg }) => (
  <div
    className={`p-8 rounded-3xl shadow-lg flex flex-col justify-between min-h-[250px] ${
      bg === "white" ? "bg-white text-black" : "bg-[#0F2947] text-white"
    }`}
  >
    <img
      src="/assets/icons/satu.png"
      alt="Logo"
      className="w-12 h-12 object-contain"
    />
    <h3 className="font-semibold text-4xl mt-4 mb-12">{title}</h3>
  </div>
);

export default function OurValues() {
  return (
    <section className="bg-yellow-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-blue-900 text-white p-6 rounded-2xl flex flex-col justify-end bg-cover bg-center row-span-2 h-[600px]"
            style={{ backgroundImage: "url('/assets/banner/Card1.png')" }}
          ></div>

          {valuesData.map((item, i) => (
            <ValueCard key={i} title={item.title} bg={item.bg} />
          ))}
        </div>
      </div>
    </section>
  );
}
