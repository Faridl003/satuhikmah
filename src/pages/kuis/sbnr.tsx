import React from "react";
import {
  User,
  Users,
  Target,
  UserCheck,
  Star,
  ShieldCheck,
} from "lucide-react";

const FiveCoreRoots = () => {
  const data = [
    {
      id: 1,
      title: "Identity",
      description:
        "Seberapa jelas kamu mengenal diri sendiri dan merasa nyaman dengan siapa kamu.",
      icon: <User className="w-6 h-6 text-slate-700" />,
      color: "text-slate-800",
    },
    {
      id: 2,
      title: "Attachment",
      description:
        "Seberapa sehat hubunganmu dengan orang lain dan bagaimana luka masa kecil memengaruhi hubungan sekarang.",
      icon: <Users className="w-6 h-6 text-slate-700" />,
      color: "text-slate-800",
    },
    {
      id: 3,
      title: "Purpose",
      description:
        "Seberapa jelas arah hidupmu, mimpi yang ingin dicapai, dan kontribusi yang ingin kamu beri.",
      icon: <Target className="w-6 h-6 text-slate-700" />,
      color: "text-slate-800",
    },
    {
      id: 4,
      title: "Self-Regulation",
      description:
        "Seberapa baik kamu mengelola emosi, tetap tenang, dan fokus saat lagi stres.",
      icon: <UserCheck className="w-6 h-6 text-slate-700" />,
      color: "text-slate-800",
    },
    {
      id: 5,
      title: "Values",
      description:
        "Seberapa konsisten kamu menjalani hidup sesuai nilai dan prinsip, meski dibawah tekanan.",
      icon: <Star className="w-6 h-6 text-slate-700" />,
      color: "text-slate-800",
    },
  ];

  // Helper component for the Hexagon shape
  const Hexagon = ({
    className,
    children,
    colorClass = "fill-amber-400",
    label,
    labelPosition = "left",
  }) => (
    <div className={`absolute flex items-center justify-center ${className}`}>
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center drop-shadow-md transition-transform hover:scale-105 duration-300">
        <svg viewBox="0 0 100 100" className={`w-full h-full ${colorClass}`}>
          <polygon points="50 0, 95 25, 95 75, 50 100, 5 75, 5 25" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {children}
        </div>

        {/* Label Tag */}
        {label && (
          <div
            className={`absolute bg-amber-400 text-slate-900 text-xs font-bold px-2 py-1 uppercase tracking-wider shadow-sm whitespace-nowrap
            ${
              labelPosition === "left"
                ? "right-[85%] top-1/2 -translate-y-1/2"
                : ""
            }
            ${
              labelPosition === "right"
                ? "left-[85%] top-1/2 -translate-y-1/2"
                : ""
            }
            ${
              labelPosition === "bottom"
                ? "top-[85%] left-1/2 -translate-x-1/2"
                : ""
            }
          `}
          >
            {label}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Header Section */}
      <header className="bg-[#102a4a] text-white py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
          5 Core Roots
        </h1>
        <p className="text-lg md:text-xl font-light max-w-3xl mx-auto opacity-90 leading-relaxed">
          Assalamualaikum Sobat Hikmah! Sebelum lihat hasil mu, yuk kenalan dulu
          sama 5 Core Roots.
        </p>
      </header>

      {/* Main Content */}
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
            {data.map((item) => (
              <div key={item.id} className="relative pl-8 md:pl-12 group">
                {/* Icon Marker */}
                <div className="absolute -left-[19px] top-0 bg-white border-2 border-slate-200 rounded-full p-2 group-hover:border-amber-400 transition-colors duration-300">
                  {React.cloneElement(item.icon, {
                    className: "w-5 h-5 text-slate-700",
                  })}
                </div>

                {/* Content */}
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-6 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Core Roots Assessment
      </footer>
    </div>
  );
};

export default FiveCoreRoots;
