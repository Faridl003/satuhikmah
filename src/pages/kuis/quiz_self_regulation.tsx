import React, { useState } from "react";

// Data Pertanyaan sesuai gambar
const questions = [
  {
    id: 1,
    text: "Saya mampu mengenali emosi saya saat marah, sedih, atau kecewa.",
  },
  {
    id: 2,
    text: "Saya bisa tetap fokus meskipun sedang terganggu oleh perasaan negatif.",
  },
  {
    id: 3,
    text: "Luka masa kecil memengaruhi cara saya merespon stres atau masalah. (negasi)",
  },
  {
    id: 4,
    text: "Saat sedang marah, saya tahu cara menenangkan diri dengan cara sehat.",
  },
  {
    id: 5,
    text: "Saya dapat menahan diri dari reaksi impulsif.",
  },
  {
    id: 6,
    text: "Saya mengevaluasi perasaan dan tindakan saya secara sadar.",
  },
  {
    id: 7,
    text: "Saya meminta bantuan atau berbagi cerita saat merasa emosional.",
  },
];

// Komponen Skala Likert Individual
const LikertScale = ({ questionId, selectedValue, onChange }) => {
  // Konfigurasi visual untuk 5 opsi lingkaran
  // Index 0 (Sangat Setuju) -> Index 4 (Sangat Tidak Setuju)
  const options = [
    {
      value: 1,
      size: "w-10 h-10 sm:w-12 sm:h-12",
      colorClass: "border-[#1F3B63] text-[#1F3B63]",
      activeClass: "bg-[#1F3B63]",
    }, // Kiri Besar (Biru Tua)
    {
      value: 2,
      size: "w-9 h-9 sm:w-10 sm:h-10",
      colorClass: "border-[#5C7C9F] text-[#5C7C9F]",
      activeClass: "bg-[#5C7C9F]",
    }, // Kiri Sedang (Biru Muda)
    {
      value: 3,
      size: "w-7 h-7 sm:w-8 sm:h-8",
      colorClass: "border-gray-400 text-gray-400",
      activeClass: "bg-gray-400",
    }, // Tengah (Abu)
    {
      value: 4,
      size: "w-9 h-9 sm:w-10 sm:h-10",
      colorClass: "border-[#F4D03F] text-[#F4D03F]",
      activeClass: "bg-[#F4D03F]",
    }, // Kanan Sedang (Kuning)
    {
      value: 5,
      size: "w-10 h-10 sm:w-12 sm:h-12",
      colorClass: "border-[#D4AC0D] text-[#D4AC0D]",
      activeClass: "bg-[#D4AC0D]",
    }, // Kanan Besar (Emas)
  ];

  return (
    <div className="flex items-center justify-between w-full max-w-md mx-auto mt-4 mb-8">
      {/* Label Kiri */}
      <span className="text-[#1F3B63] font-semibold text-sm sm:text-base w-16">
        Setuju
      </span>

      {/* Lingkaran Opsi */}
      <div className="flex items-center justify-between flex-1 px-2 sm:px-4 gap-2 sm:gap-4">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(questionId, opt.value)}
            className={`
              rounded-full border-2 flex items-center justify-center transition-all duration-200
              ${opt.size}
              ${opt.colorClass}
              ${
                selectedValue === opt.value ? opt.activeClass : "bg-transparent"
              }
            `}
            aria-label={`Pilih opsi ${opt.value}`}
          >
            {/* Inner dot for selected state if needed, or just fill */}
            {selectedValue === opt.value && (
              <span className="w-full h-full rounded-full opacity-20 bg-white"></span>
            )}
          </button>
        ))}
      </div>

      {/* Label Kanan */}
      <span className="text-[#D4AC0D] font-semibold text-sm sm:text-base text-right w-16 leading-tight">
        Tidak Setuju
      </span>
    </div>
  );
};

export default function QuizSlide() {
  // State untuk menyimpan jawaban { questionId: value }
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (qId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Jawaban User:", answers);
    alert("Jawaban tersimpan! (Cek console)");
  };

  const handleBack = () => {
    console.log("Navigasi Kembali");
    alert("Kembali ke halaman sebelumnya");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 pb-12 mt-16">
      {/* Header Kuning */}
      <header className="bg-[#FDF06F] py-10 px-4 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8">
            1/5 Core: Identity
          </h1>

          {/* Kotak Instruksi */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm text-left sm:text-center text-sm sm:text-base leading-relaxed text-gray-800 max-w-3xl mx-auto">
            <ol className="list-decimal list-inside space-y-1">
              <li>
                Tidak ada jawaban yang benar atau salah. Pilih dengan jujur yang
                paling mewakili dirimu.
              </li>
              <li>
                Tes ini tidak dibatasi waktu. Kerjakan dengan santai dan nikmati
                prosesnya.
              </li>
              <li>
                Cari tempat yang nyaman agar kamu bisa fokus menjawab tanpa
                gangguan.
              </li>
              <li>
                Dapatkan laporan hasil tes lengkap setelah kamu menjawab semua
                pertanyaan.
              </li>
            </ol>
          </div>
        </div>
      </header>

      {/* Container Pertanyaan */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6">
        {questions.map((q) => (
          <div key={q.id} className="mb-8">
            <p className="text-base sm:text-lg font-medium text-gray-900 mb-2 leading-relaxed">
              {q.text}
            </p>
            <LikertScale
              questionId={q.id}
              selectedValue={answers[q.id]}
              onChange={handleAnswerChange}
            />
          </div>
        ))}

        {/* Tombol Kembali */}
        <button
          onClick={handleBack}
          className="bg-[#FDF06F] hover:bg-[#faea4e] text-black font-bold py-3 px-10 rounded-lg text-lg transition-colors shadow-md w-full sm:w-auto"
        >
          Kembali
        </button>

        {/* Tombol Selanjutnya */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleSubmit}
            className="bg-[#1F3B63] hover:bg-[#162a47] text-white font-bold py-3 px-10 rounded-lg text-lg transition-colors shadow-md"
          >
            Selanjutnya
          </button>
        </div>
      </main>
    </div>
  );
}
