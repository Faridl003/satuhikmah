// Placeholder Icon for team member images
const ImagePlaceholderIcon = () => (
  <svg
    className="w-12 h-12 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
  </svg>
);

// Data untuk anggota tim
const teamData = [
  {
    name: "Mirza Rahmat Hakim",
    title: "Co-Founder",
    description:
      "Sebagai Co-Founder SatuHikmah, Mirza membawa semangat kepemudaan, ketangguhan lapangan, dan istiqomah menyuarakan nilai.",
    imageUrl: "/assets/tim/mirza.jpg",
  },
  {
    name: "Muhammad Fadhil Al-Faruqhi",
    title: "Co-Founder",
    description:
      "Fadhil adalah pembelajar dari Teknik Industri ITS yang aktif dalam kegiatan kemahasiswaan, kebijakan kampus, literasi media, dan kepemimpinan organisasi Islam.",
    imageUrl: "/assets/tim/Fadhil.jpg",
  },
  {
    name: "Ario Muhammad, PhD",
    title: "Advisor",
    description:
      "Sebagai advisor SatuHikmah, Ario membawa pendekatan yang utuh untuk anak muda agar anak muda bisa menemukan jati diri, menyembuhkan luka, dan bertumbuh jadi versi terbaik dari diri mereka.",
    imageUrl: "/assets/tim/Ario Muhammad.jpg",
  },
  {
    name: "Muhammad Yorga Permana, PhD",
    title: "Advisor",
    description:
      "Sebagai advisor SatuHikmah, Yorga memberi kontribusi penting dalam merumuskan arah gerakan intelektual dan sosial yang membumi, reflektif, dan lintas.",
    imageUrl: "/assets/tim/Muhammad Yorga Permana.jpg",
  },
  {
    name: "Eko Kurniawan",
    title: "Advisor",
    description:
      "Sebagai advisor SatuHikmah, Eko memberi kontribusi pada aspek digitalisasi, inovasi strategis, serta bagaimana membangun ekosistem pembinaan yang mampu menjangkau anak muda lintas batas.",
    imageUrl: "/assets/tim/Eko Kurniawan.jpg",
  },
  {
    name: "Fitria Novanti",
    title: "Head of Business",
    imageUrl: "/assets/tim/Fitria.png",
  },
  {
    name: "Alya Zahrani Zuhdan",
    title: "Head of Youth Empowerement",
    imageUrl: "/assets/tim/Alya.jpg",
  },
  {
    name: "Binti Suryani",
    title: "Head of Kembara Hikmah",
    imageUrl: "/assets/tim/Yani.jpg",
  },
  {
    name: "Hasna Daffa Ulinnuha",
    title: "Head of R&D",
    imageUrl: "/assets/tim/Hasna.jpg",
  },
  {
    name: "Haya Nayla Zhafirah",
    title: "Head of Creative Media",
    imageUrl: "/assets/tim/Nayla.jpg",
  },
];

// Komponen Kartu Anggota Tim
const TeamMemberCard = ({ name, title, description, imageUrl }) => (
  <div className="text-center">
    <div className="mx-auto bg-gray-200 h-40 w-40 rounded-lg flex items-center justify-center">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="h-40 w-40 rounded-lg object-cover"
        />
      ) : (
        <ImagePlaceholderIcon />
      )}
    </div>
    <h3 className="mt-4 text-lg font-bold text-gray-900">{name}</h3>
    <p className="mt-1 text-base text-gray-600">{title}</p>
    <p className="mt-2 text-sm text-gray-500 px-2">{description}</p>
    <a
      href="#"
      className="mt-4 inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold py-2 px-4 rounded-lg transition-colors"
    >
      Selengkapnya
    </a>
  </div>
);

// Komponen Utama Bagian Tim
export default function TeamSection() {
  return (
    <section className="bg-white p-4 sm:p-6 lg:p-8" id="team">
      <div className="bg-[#F6F070] rounded-3xl py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Temui tim inspiratif yang membuat SatuHikmah hadir untukmu.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
            {teamData.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                title={member.title}
                description={member.description}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
