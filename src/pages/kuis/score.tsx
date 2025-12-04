import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

import { User, Users, Target, UserCheck, Star } from "lucide-react";
import ProgramsSection from "../program";
import Footer from "@/components/Footer";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;
  if (!data) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Tidak ada data hasil.
      </div>
    );
  }

  const { result } = data;

  const cores = {
    Identity: result?.core1_score || 0,
    Attachment: result?.core2_score || 0,
    Purpose: result?.core3_score || 0,
    SelfRegulation: result?.core4_score || 0,
    Values: result?.core5_score || 0,
  };

  const radarData = {
    labels: ["Identity", "Attachment", "Purpose", "Self Regulation", "Values"],
    datasets: [
      {
        label: "Core Score",
        data: [
          cores.Identity,
          cores.Attachment,
          cores.Purpose,
          cores.SelfRegulation,
          cores.Values,
        ],
        borderWidth: 2,
        fill: true,
        backgroundColor: "rgba(255, 193, 7, 0.35)", // kuning lembut dengan opacity
        borderColor: "rgba(255, 193, 7, 1)", // kuning solid
        pointBackgroundColor: "rgba(255, 193, 7, 1)", // titik kuning
        pointBorderColor: "#fff",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: { display: false },
        grid: { color: "#dadada" },
        angleLines: { color: "#dadada" },
      },
    },
    plugins: { legend: { display: false } },
  };

  const strongest = Object.keys(cores).reduce((a, b) =>
    cores[a] > cores[b] ? a : b
  );
  const weakest = Object.keys(cores).reduce((a, b) =>
    cores[a] < cores[b] ? a : b
  );

  const coreInfo = [
    {
      title: "Identity",
      desc: "Seberapa jelas kamu mengenal diri sendiri dan merasa nyaman dengan siapa kamu.",
      icon: <User className="w-6 h-6" />,
    },
    {
      title: "Attachment",
      desc: "Seberapa sehat hubunganmu dengan orang lain dan bagaimana luka masa kecil memengaruhi hubungan sekarang.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Purpose",
      desc: "Seberapa jelas arah hidupmu, mimpi yang ingin dicapai, dan kontribusi yang ingin kamu beri.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Self-Regulation",
      desc: "Seberapa baik kamu mengelola emosi, tetap tenang, dan fokus saat lagi stres.",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      title: "Values",
      desc: "Seberapa konsisten kamu menjalani hidup sesuai nilai dan prinsip, meski dibawah tekanan.",
      icon: <Star className="w-6 h-6" />,
    },
  ];

  const practicalSteps = {
    Identity: [
      "Tulis satu hal positif tentang dirimu setiap hari.",
      "Renungkan peran pentingmu (sebagai anak, teman, Muslim) dan bagaimana kamu ingin hadir lebih baik.",
      "Pilih satu nilai Islam (amanah, ihsan, sabar, dst) yang kamu pegang, lalu catat bagaimana itu muncul dalam tindakanmu hari ini.",
    ],

    Purpose: [
      "Tentukan satu tujuan mingguan yang memberi manfaat untuk dirimu dan orang lain.",
      "Setelah shalat, luangkan 30 detik untuk bertanya: “Apakah langkahku hari ini mendekatkanku pada tujuan yang Allah ridhai?”",
      "Tulis tiga tujuan jangka panjangmu dan alasan mengapa itu penting bagimu.",
    ],

    Attachment: [
      "Ceritakan pengalaman atau perasaan dirimu kepada teman dekat atau keluarga.",
      "Tunjukkan respons yang hangat dan penuh perhatian setiap kali seseorang berbicara kepadamu.",
      "Sadari pola hubunganmu—kapan kamu merasa nyaman, menjauh, atau butuh dukungan—untuk memahami cara membangun relasi yang lebih sehat.",
    ],

    SelfRegulation: [
      "Kenali perasaanmu setiap hari (seperti marah, sedih, malas, dst) dan situasi apa yang memicunya.",
      "Lakukan latihan napas atau dzikir singkat saat merasa marah atau cemas.",
      "Pilih satu kebiasaan yang ingin kamu perbaiki dan evaluasi progresnya di akhir hari.",
    ],

    Values: [
      "Pilih satu keputusan kecil setiap hari yang sesuai dengan nilai Islami dan prinsipmu.",
      "Luangkan waktu tiap minggu untuk refleksi: “Apakah tindakanku sejalan dengan nilai yang aku pegang?”",
      "Coba pahami perspektif orang lain sebelum merespons untuk memperkuat empati dan kebijaksanaan.",
    ],
  };

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      {/* HEADER */}
      <header className="bg-[#102a4a] text-white py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">5 Core Roots</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          Assalamualaikum Sobat Hikmah! Sebelum lihat hasil
          <br />
          mu, yuk kenalan dulu sama 5 Core Roots.
        </p>
      </header>

      {/* SECTION PENJELASAN */}
      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* Left Column: The Diagram */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Apa arti 5 Core Roots?
          </h2>
          <img
            src="/images/5-core-roots.png"
            alt="5 Core Roots"
            className="mx-auto md:mx-0"
          />
        </div>

        {/* Right Column: The List */}
        <div className="w-full lg:w-1/2 max-w-lg">
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-10 py-2">
            {coreInfo.map((item) => (
              <div key={item.title} className="relative pl-8 md:pl-12 group">
                {/* Icon Marker */}
                <div className="absolute -left-[19px] top-0 bg-white border-2 border-slate-200 rounded-full p-2 group-hover:border-amber-400 transition-colors duration-300">
                  {React.cloneElement(item.icon)}
                </div>

                {/* Content */}
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* RESULT + RADAR CHART */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <Radar data={radarData} options={radarOptions} />
        </div>

        <div className="bg-yellow-200 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-[#333] mb-4">
            Result Summary
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Berdasarkan 5 Core Roots kamu, kamu kuat di <b>{strongest}</b>, tapi
            bisa berkembang lebih baik di <b>{weakest}</b>.
            <br />
            <br />
            Beberapa langkah awal yang bisa kamu lakukan:
          </p>

          <ul className="mt-3 list-disc list-inside text-gray-700">
            {practicalSteps[weakest]?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      </section>
      <ProgramsSection
        judul={
          <span className="text-3xl font-semibold text-slate-900">
            Kami, SatuHikmah, hadir sebagai ruang pertumbuhan spiritual,
            intelektual, dan sosial.
            <br />{" "}
            <span className="font-bold">
              Berikut program yang bisa kamu ikuti
            </span>{" "}
            sesuai kebutuhan:
          </span>
        }
        subsJud={""}
      />
      <h2 className="text-3xl font-semibold text-slate-900 text-center mb-10">
        Yuk, mulai perjalanan pertumbuhanmu bersama SatuHikmah!
      </h2>
      <Footer />
    </div>
  );
}
