import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// === Daftar Semua Pertanyaan ===
const questions = [
  {
    id: 1,
    text: "Saya merasa jelas tentang siapa diri saya dan prinsip hidup saya sebagai seorang Muslim.",
  },
  {
    id: 2,
    text: "Saya bangga dengan latar belakang agama, budaya, dan keluarga saya.",
  },
  {
    id: 3,
    text: "Saya merasa pola pengasuhan masa kecil memengaruhi pandangan saya tentang diri sendiri. (negasi)",
  },
  {
    id: 4,
    text: "Saya mampu mengekspresikan siapa diri saya walaupun tidak selalu disetujui orang lain.",
  },
  {
    id: 5,
    text: "Saya merasa jadi Muslim itu berat atau terasa asing dengan lingkungan sekitar.",
  },
  {
    id: 6,
    text: "Saya mengambil langkah untuk menegaskan jati diri saya dalam kehidupan sehari-hari.",
  },
  {
    id: 7,
    text: "Saya berani menolak hal yang bertentangan dengan prinsip saya.",
  },

  {
    id: 8,
    text: "Saya mampu mengenali emosi saya saat marah, sedih, atau kecewa.",
  },
  {
    id: 9,
    text: "Saya bisa tetap fokus meskipun sedang terganggu oleh perasaan negatif.",
  },
  {
    id: 10,
    text: "Luka masa kecil memengaruhi cara saya merespon stres atau masalah. (negasi)",
  },
  {
    id: 11,
    text: "Saat sedang marah, saya tahu cara menenangkan diri dengan cara sehat.",
  },
  { id: 12, text: "Saya dapat menahan diri dari reaksi impulsif." },
  {
    id: 13,
    text: "Saya mengevaluasi perasaan dan tindakan saya secara sadar.",
  },
  {
    id: 14,
    text: "Saya meminta bantuan atau berbagi cerita saat merasa emosional.",
  },

  { id: 15, text: "Hidup saya memiliki arah dan makna." },
  {
    id: 16,
    text: "Saya kadang merasa hidup berjalan tanpa tujuan atau seperti “auto-pilot”. (negasi, reverse)",
  },
  {
    id: 17,
    text: "Luka pengasuhan memengaruhi cara saya memaknai tujuan hidup saya.",
  },
  {
    id: 18,
    text: "Saya jarang melakukan hal yang saya anggap penting atau bermanfaat untuk orang lain atau umat.",
  },
  {
    id: 19,
    text: "Saya mampu menetapkan tujuan hidup yang jelas untuk diri saya.",
  },
  { id: 20, text: "Saya menilai progres diri terhadap tujuan hidup saya." },
  {
    id: 21,
    text: "Saya berusaha mengejar tujuan hidup sesuai prinsip saya, walau menghadapi tantangan dan kegagalan",
  },

  { id: 22, text: "Saya merasa aman dalam membangun hubungan dekat." },
  {
    id: 23,
    text: "Saya percaya orang-orang di sekitar saya peduli pada saya.",
  },
  {
    id: 24,
    text: "Luka pengasuhan atau pengalaman masa kecil memengaruhi hubungan saya sekarang. (negasi)",
  },
  {
    id: 25,
    text: "Saya berusaha menyembuhkan luka masa kecil atau inner child yang belum sembuh.",
  },
  {
    id: 26,
    text: "Saya tidak memiliki orang yang bisa diajak berbagi cerita pribadi.",
  },
  { id: 27, text: "Saya aktif membangun hubungan positif baru." },
  {
    id: 28,
    text: "Saya mengekspresikan rasa terima kasih atau apresiasi kepada orang dekat saya.",
  },

  { id: 29, text: "Nilai dan prinsip hidup saya jelas dan konsisten." },
  {
    id: 30,
    text: "Kadang saya merasa harus mengorbankan nilai demi diterima lingkungan. (negasi, reverse)",
  },
  {
    id: 31,
    text: "Luka pengasuhan memengaruhi cara saya memahami benar dan salah.",
  },
  {
    id: 32,
    text: "Saya sering kesulitan membuat keputusan sesuai nilai saya ketika itu tidak populer.",
  },
  { id: 33, text: "Saya menolong orang lain tanpa mengharapkan imbalan." },
  { id: 34, text: "Saya menolak hal yang haram atau meragukan." },
  {
    id: 35,
    text: "Pernah berada di situasi harus memilih: tetap pegang prinsip atau ikut arus, dan saya mampu memilih sesuai nilai.",
  },
];

// === Judul Setiap Page ===
const pageTitles = [
  "1/5 Core: Identity",
  "2/5 Core: Self Regulation",
  "3/5 Core: Purpose",
  "4/5 Core: Attachment",
  "5/5 Core: Values & Character",
];

// === Likert Scale ===
const LikertScale = ({ questionId, selectedValue, onChange }) => {
  const options = [
    {
      value: 1,
      size: "w-10 h-10",
      colorClass: "border-[#1F3B63]",
      activeClass: "bg-[#1F3B63]",
    },
    {
      value: 2,
      size: "w-9 h-9",
      colorClass: "border-[#5C7C9F]",
      activeClass: "bg-[#5C7C9F]",
    },
    {
      value: 3,
      size: "w-7 h-7",
      colorClass: "border-gray-400",
      activeClass: "bg-gray-400",
    },
    {
      value: 4,
      size: "w-9 h-9",
      colorClass: "border-[#F4D03F]",
      activeClass: "bg-[#F4D03F]",
    },
    {
      value: 5,
      size: "w-10 h-10",
      colorClass: "border-[#D4AC0D]",
      activeClass: "bg-[#D4AC0D]",
    },
  ];

  return (
    <div className="flex items-center justify-between w-full max-w-md mx-auto mt-4 mb-8">
      <span className="text-[#1F3B63] font-semibold text-sm w-16">Setuju</span>

      <div className="flex items-center justify-between flex-1 px-4 gap-4">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            aria-label={`Pilih opsi ${opt.value}`}
            onClick={() => onChange(questionId, opt.value)}
            className={`rounded-full border-2 flex items-center justify-center transition-all
              ${opt.size} ${opt.colorClass}
              ${
                selectedValue === opt.value ? opt.activeClass : "bg-transparent"
              }`}
          >
            <span className="sr-only">Pilih opsi {opt.value}</span>
          </button>
        ))}
      </div>

      <span className="text-[#D4AC0D] font-semibold text-sm w-16 text-right">
        Tidak Setuju
      </span>
    </div>
  );
};

// === MAIN COMPONENT ===
export default function QuizSlide() {
  const perPage = 7;
  const totalPages = Math.ceil(questions.length / perPage);

  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState(1);

  const startIndex = currentPage * perPage;
  const currentQuestions = questions.slice(startIndex, startIndex + perPage);

  const handleAnswerChange = (qId, value) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage((p) => p + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((p) => p - 1);
    }
  };

  // === Animasi Slide ===
  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir === 1 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.35 } },
    exit: (dir) => ({
      opacity: 0,
      x: dir === 1 ? -60 : 60,
      transition: { duration: 0.35 },
    }),
  };

  return (
    <div className="min-h-screen bg-white pb-12 mt-16">
      {/* Header */}
      <header className="bg-[#FDF06F] py-10 px-4 mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          {pageTitles[currentPage]}
        </h1>
      </header>

      {/* Questions */}
      <main className="max-w-3xl mx-auto px-6">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {currentQuestions.map((q) => (
              <div key={q.id} className="mb-10">
                <p className="text-lg font-medium mb-2">{q.text}</p>
                <LikertScale
                  questionId={q.id}
                  selectedValue={answers[q.id]}
                  onChange={handleAnswerChange}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex justify-center gap-12 mt-10">
          {currentPage > 0 && (
            <button
              onClick={prevPage}
              className="bg-[#FDF06F] hover:bg-[#faea4e] text-black font-bold py-3 px-10 rounded-lg shadow-md"
            >
              Kembali
            </button>
          )}

          {currentPage < totalPages - 1 ? (
            <button
              onClick={nextPage}
              className="bg-[#1F3B63] hover:bg-[#162a47] text-white font-bold py-3 px-10 rounded-lg shadow-md"
            >
              Selanjutnya
            </button>
          ) : (
            <button
              onClick={() => alert("Submit!")}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-lg shadow-md"
            >
              Selesai
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
