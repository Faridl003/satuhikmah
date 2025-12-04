import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
            aria-label={`Jawaban nilai ${opt.value}`}
            type="button"
            onClick={() => onChange(questionId, opt.value)}
            className={`rounded-full border-2 flex items-center justify-center transition-all
              ${opt.size} ${opt.colorClass}
              ${
                selectedValue === opt.value ? opt.activeClass : "bg-transparent"
              }`}
          />
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
  const [pages, setPages] = useState([]); // tiap core = 1 page
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showFormModal, setShowFormModal] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone_number: "",
    gender: "",
  });

  const isPageComplete = () => {
    const currentQuestions = pages[currentPage].questions;
    return currentQuestions.every((q) => answers[q.id] !== undefined);
  };

  // Fetch data dari API
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://satuhikmah.site/questions");
        const data = await res.json();

        // pisahkan core dan pertanyaan
        const cores = data.cores;
        const questions = data.questions;

        // bentuk pages per-core
        const grouped = cores.map((core) => ({
          coreName: core.name,
          questions: questions
            .filter((q) => q.core_id === core.id)
            .sort((a, b) => a.position - b.position),
        }));

        setPages(grouped);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching API:", err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleSubmitUser = async () => {
    if (!userData.name || !userData.email || !userData.gender) {
      alert("Nama, email, dan gender wajib diisi!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(userData.email)) {
      alert("Format email tidak valid. Harus menggunakan format yang benar.");
      return;
    }

    setLoadingSubmit(true);

    const formattedAnswers = Object.entries(answers).map(
      ([questionId, score]) => ({
        question_id: Number(questionId),
        score,
      })
    );

    const payload = {
      ...userData,
      answers: formattedAnswers,
    };

    try {
      const res = await fetch("https://satuhikmah.site/result", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("HASIL DARI BACKEND:", data);

      if (!res.ok) {
        alert(data.message || "Gagal mengirim hasil asesmen.");
        setLoadingSubmit(false);
        return;
      }

      // 🔥 INI BAGIAN PENTING — Redirect ke halaman hasil
      navigate("/result", { state: data });
      return;
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengirim data.");
    }

    setLoadingSubmit(false);
  };

  const handleAnswerChange = (qId, value) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
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

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir === 1 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.35 } },
    exit: (dir) => ({
      opacity: 0,
      x: dir === 1 ? -60 : 60,
      transition: { duration: 0.35 },
    }),
  };

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (pages.length === 0)
    return <p className="text-center mt-20">Tidak ada data.</p>;

  const page = pages[currentPage];

  const handleEmailChange = (e) => {
    const value = e.target.value;

    // Hanya izinkan karakter yang valid untuk email
    const allowed = /^[a-zA-Z0-9@._-]*$/;

    if (!allowed.test(value)) return; // blok input karakter ilegal

    setUserData({ ...userData, email: value });
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email);

  return (
    <>
      <div className="min-h-screen bg-white pb-12 mt-16">
        {/* Header */}
        <header className="bg-[#FDF06F] py-10 px-4 mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            {`${currentPage + 1}/5 Core: ${page.coreName}`}
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
              {page.questions.map((q) => (
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
            {/* Tombol Kembali */}
            {currentPage > 0 && (
              <button
                onClick={prevPage}
                className="bg-[#FDF06F] hover:bg-[#faea4e] text-black font-bold py-3 px-10 rounded-lg shadow-md"
              >
                Kembali
              </button>
            )}

            {/* Jika masih ada halaman */}
            {currentPage < pages.length - 1 ? (
              <button
                onClick={() => {
                  if (!isPageComplete()) {
                    alert("Harap isi semua pertanyaan sebelum melanjutkan.");
                    return;
                  }
                  nextPage();
                }}
                className="bg-[#1F3B63] hover:bg-[#162a47] text-white font-bold py-3 px-10 rounded-lg shadow-md"
              >
                Selanjutnya
              </button>
            ) : (
              /* Jika halaman terakhir → buka form */
              <button
                onClick={() => {
                  if (!isPageComplete()) {
                    alert(
                      "Harap isi semua pertanyaan sebelum menyelesaikan asesmen."
                    );
                    return;
                  }
                  setShowFormModal(true);
                }}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-lg shadow-md"
              >
                Selesai
              </button>
            )}
          </div>
        </main>
      </div>
      {/* ================== MODAL FORM DATA DIRI ================== */}
      {showFormModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999]">
          <div className="bg-white w-[90%] max-w-lg rounded-2xl p-10 shadow-xl relative">
            {/* JUDUL */}
            <h2 className="text-3xl font-bold text-center mb-2">
              Satu Langkah Lagi
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Isi form dan dapatkan hasil asesmen!
            </p>

            {/* FORM */}
            <div className="flex flex-col gap-4">
              {/* Nama */}
              <div>
                <label className="font-medium">Nama*</label>
                <input
                  id="name"
                  aria-label="Nama"
                  type="text"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  className="w-full border rounded-md p-3 mt-1"
                />
              </div>

              {/* Email */}
              <label className="font-medium">Email*</label>
              <div>
                <label className="font-medium">Email*</label>
                <input
                  id="email"
                  aria-label="Email"
                  type="text"
                  value={userData.email}
                  onChange={handleEmailChange}
                  className={`w-full border rounded-md p-3 mt-1 ${
                    userData.email && !isEmailValid ? "border-red-500" : ""
                  }`}
                  placeholder="name@example.com"
                />

                {/* error realtime */}
                {userData.email && !isEmailValid && (
                  <p className="text-red-500 text-sm mt-1">
                    Format email tidak valid.
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="font-medium">Nomor Handphone*</label>
                <input
                  id="phone_number"
                  aria-label="Nomor Handphone"
                  type="text"
                  value={userData.phone_number}
                  onChange={(e) =>
                    setUserData({ ...userData, phone_number: e.target.value })
                  }
                  className="w-full border rounded-md p-3 mt-1"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="font-medium">Jenis Kelamin*</label>
                <select
                  id="gender"
                  aria-label="Jenis Kelamin"
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData({ ...userData, gender: e.target.value })
                  }
                  className="w-full border rounded-md p-3 mt-1"
                >
                  <option value="">Pilih Gender</option>
                  <option value="male">Laki-laki</option>
                  <option value="female">Perempuan</option>
                </select>
              </div>
            </div>

            {/* BUTTON SUBMIT */}
            <button
              onClick={handleSubmitUser}
              disabled={loadingSubmit}
              className="bg-blue-600 text-white p-3 rounded-lg w-full mt-3 disabled:bg-blue-300"
            >
              {loadingSubmit ? "Mengirim..." : "Kirim Hasil"}
            </button>

            {/* Close Button (opsional) */}
            <button
              onClick={() => setShowFormModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
