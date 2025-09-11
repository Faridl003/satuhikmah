
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import {
  MessageCircle,
  Users,
  Target,
  Brain,
  Heart,
  Compass,
  Mountain,
  Smartphone,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  Lightbulb,
  Shield,
  BookOpen,
  HeartHandshake,
  User
} from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "SatuHikmah - Komunitas Pengembangan Pemuda Muslim Indonesia | Program Spiritual & Karir";
    
    const setMetaTag = (name, content, property = false) => {
      let meta = document.querySelector(property ? `meta[property="${name}"]` : `meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaTag('description', 'Komunitas SatuHikmah mengiringi pemuda Muslim usia 18-24 tahun menemukan jati diri, mengembangkan spiritual, dan mempersiapkan karir halal. Bergabunglah dengan program Kembara Hikmah, Digital Mindfulness, dan Youth Career Workshop.');
    setMetaTag('keywords', 'komunitas muslim, pemuda islam, pengembangan diri islam, spiritual growth, karir halal, digital detox islam, kembara hikmah, surabaya, komunitas muslim surabaya, pengembangan pemuda muslim, program spiritual islam');
    setMetaTag('robots', 'index, follow');
    setMetaTag('language', 'Indonesian');
    setMetaTag('author', 'SatuHikmah');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', 'https://satuhikmah.id/', true);
    setMetaTag('og:title', 'SatuHikmah - Komunitas Pengembangan Pemuda Muslim Indonesia', true);
    setMetaTag('og:description', 'Komunitas SatuHikmah mengiringi pemuda Muslim usia 18-24 tahun menemukan jati diri, mengembangkan spiritual, dan mempersiapkan karir halal.', true);
    setMetaTag('og:image', 'https://satuhikmah.id/og-image.jpg', true);
    setMetaTag('og:site_name', 'SatuHikmah', true);
    setMetaTag('og:locale', 'id_ID', true);

    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:url', 'https://satuhikmah.id/', true);
    setMetaTag('twitter:title', 'SatuHikmah - Komunitas Pengembangan Pemuda Muslim Indonesia', true);
    setMetaTag('twitter:description', 'Komunitas SatuHikmah mengiringi pemuda Muslim usia 18-24 tahun menemukan jati diri, mengembangkan spiritual, dan mempersiapkan karir halal.', true);
    setMetaTag('twitter:image', 'https://satuhikmah.id/og-image.jpg', true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://satuhikmah.id/');

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SatuHikmah",
      "alternateName": ["Satu Hikmah", "Komunitas SatuHikmah"],
      "url": "https://satuhikmah.id",
      "logo": "https://satuhikmah.id/logo.png",
      "description": "Komunitas pengembangan pemuda Muslim Indonesia yang fokus pada spiritual growth, intellectual development, dan social impact untuk usia 18-24 tahun",
      "foundingDate": "2024",
      "keywords": ["komunitas muslim", "pemuda islam", "pengembangan diri", "spiritual growth", "karir halal", "surabaya"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl.Sukolilo Regency Blok E-46",
        "addressLocality": "Sukolilo",
        "addressRegion": "Surabaya",
        "addressCountry": "ID"
      },
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+62-895-2816-4600",
        "contactType": "customer service",
        "availableLanguage": "Indonesian"
      }],
      "sameAs": [
        "https://instagram.com/satuhikmah",
        "https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd"
      ],
      "founder": [
        {
          "@type": "Person",
          "name": "Mirza Rahmat Hakim",
          "jobTitle": "Co-Founder SatuHikmah"
        },
        {
          "@type": "Person", 
          "name": "Muhammad Fadhil Al-Faruqhi",
          "jobTitle": "Co-Founder SatuHikmah"
        }
      ],
      "offers": [
        {
          "@type": "Service",
          "name": "Kembara Hikmah - Youth Identity Camp",
          "description": "Camp 2 hari 1 malam untuk menemukan jati diri sebagai Muslim"
        },
        {
          "@type": "Service",
          "name": "Digital Mindfulness Series",
          "description": "Seri sesi untuk mengenali dampak dunia digital terhadap hati dan pikiran"
        },
        {
          "@type": "Service",
          "name": "Youth Purpose & Career Workshop",
          "description": "Program membantu pemuda menata ulang arah hidup dan karier dengan fondasi nilai Islam"
        }
      ]
    });
    document.head.appendChild(schemaScript);

    const localBusinessSchema = document.createElement('script');
    localBusinessSchema.type = 'application/ld+json';
    localBusinessSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SatuHikmah",
      "image": "https://satuhikmah.id/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl.Sukolilo Regency Blok E-46",
        "addressLocality": "Sukolilo",
        "addressRegion": "Surabaya",
        "postalCode": "60111",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -7.2975,
        "longitude": 112.7969
      },
      "telephone": "+62-895-2816-4600",
      "email": "mirzasp841@gmail.com",
      "url": "https://satuhikmah.id",
      "priceRange": "Gratis - Rp 500.000",
      "openingHours": "Mo-Su 08:00-20:00",
      "servesCuisine": "Community Development",
      "areaServed": "Indonesia"
    });
    document.head.appendChild(localBusinessSchema);

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Apa itu SatuHikmah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SatuHikmah adalah komunitas pengembangan pemuda Muslim Indonesia yang fokus pada spiritual growth, intellectual development, dan social impact untuk usia 18-24 tahun. Kami menyediakan ruang bertumbuh yang aman dengan program-program berbasis nilai Islam."
          }
        },
        {
          "@type": "Question",
          "name": "Program apa saja yang tersedia di SatuHikmah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kami memiliki program Kembara Hikmah (Youth Identity Camp), Digital Mindfulness Series, Youth Purpose & Career Workshop, Hikmah Diri (Self Discovery), Hikmah Jiwa (Mental Health Coaching), dan Sakinah Berhikmah (Sekolah Pra-Nikah)."
          }
        },
        {
          "@type": "Question",
          "name": "Dimana lokasi SatuHikmah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SatuHikmah berlokasi di Jl.Sukolilo Regency Blok E-46, Sukolilo, Surabaya. Namun program kami juga dapat diakses secara online untuk peserta dari seluruh Indonesia."
          }
        },
        {
          "@type": "Question",
          "name": "Bagaimana cara bergabung dengan SatuHikmah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Anda dapat bergabung melalui WhatsApp Group kami di https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd atau menghubungi kami di nomor 0895-2816-4600."
          }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent.includes('SatuHikmah')) {
          script.remove();
        }
      });
    };
  }, []);

  const handleWhatsAppJoin = () => {
    window.open("https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd", "_blank");
  };

  const founders = [
    {
      name: "Mirza Rahmat Hakim",
      role: "Co-Founder SatuHikmah | Aktivis Pemuda | Mahasiswa Teknik K3 PPNS",
      image: "https://ik.imagekit.io/rtcameiff/f1.svg?updatedAt=1754017168714",
      description: `Berangkat dari pesantren dan pendidikan unggulan di MAN Insan Cendekia Sambas, Mirza tumbuh sebagai pemuda yang aktif, reflektif, dan haus akan perubahan. Saat ini ia menjalani studi di bidang Keselamatan dan Kesehatan Kerja (K3) di Politeknik Perkapalan Negeri Surabaya (PPNS), sambil terus memperluas kiprahnya di berbagai lini kepemimpinan dan gerakan kemahasiswaan nasional.

Mirza pernah memegang amanah strategis sebagai:
• Ketua Umum FSLDK Surabaya Raya (2024–2026)
• Ketua Umum SKI PPNS
• Ketua pelaksana berbagai pelatihan pengembangan diri dan public speaking

Ia juga aktif sebagai content creator, public speaker, dan telah menjadi narasumber serta EO di lebih dari 20 event pengembangan diri. Prestasinya mencakup juara nasional videografi dakwah dan dokumenter, serta finalis nasional lomba da'i.

Sebagai Co-Founder SatuHikmah, Mirza membawa semangat kepemudaan, ketangguhan lapangan, dan keberanian menyuarakan nilai. Ia percaya bahwa setiap anak muda bisa tumbuh utuh—dengan ruang yang tepat, komunitas yang sehat, dan nilai yang hidup.`,
    },
    {
      name: "Muhammad Fadhil Al-Faruqhi",
      role: "Co-Founder SatuHikmah | Mahasiswa Teknik Industri ITS",
      image: "https://ik.imagekit.io/rtcameiff/f2.svg?updatedAt=1754017174408",
      description: `Fadhil adalah sosok pembelajar yang tumbuh di tengah dinamika kampus dan semangat perubahan. Saat ini menempuh studi di Teknik Industri ITS, ia aktif dalam berbagai aktivitas kemahasiswaan, kebijakan kampus, literasi media, dan kepemimpinan organisasi Islam.

Di tengah kesibukannya sebagai Editor ITS Online, Ketua Masyarakat Studi Islam Ulul Ilmi, dan Direktur Kebijakan Publik BEM ITS, Fadhil tetap konsisten membawa semangat literasi, keadilan sosial, dan spiritualitas dalam setiap ruang yang ia jalani.

Fadhil dikenal sebagai pemuda dengan ketajaman analisis, kepekaan sosial, dan semangat kolaborasi lintas bidang. Baginya, SatuHikmah bukan sekadar komunitas—tetapi ruang aman bagi anak muda untuk bertumbuh, berpikir jernih, dan memberi manfaat.                                                                                                                                                                                                                                                                                                                                                                                `,

    },
  ];

  const advisors = [
    {
      name: "Ario Muhammad, PhD",
      role: "Advisor SatuHikmah | Founder Edufic.id | Peneliti, Penulis, dan Mentor Pemuda",
      image: "https://ik.imagekit.io/rtcameiff/Advisor1.png?updatedAt=1754017163367",
      description: `Lahir dan besar di pelosok Halmahera, Maluku Utara, Ario Muhammad tumbuh dalam keterbatasan—baik ekonomi, akses pendidikan, maupun luka keluarga. Namun dari ruang-ruang sunyi itu, ia menapaki jalan panjang hingga meraih gelar Ph.D. dari Inggris, setelah menyelesaikan studi Master di Taiwan, seluruhnya dengan beasiswa penuh.

Ario dikenal sebagai founder Edufic.id, sebuah platform edukasi kreatif yang telah menjangkau ratusan ribu pelajar dan orang tua, dengan lebih dari 129.000 pengikut di Instagram. Ia juga telah menulis 14 buku, membimbing ratusan mahasiswa, dan aktif berbicara di berbagai forum nasional dan internasional, terutama dalam isu-isu kepemudaan, pendidikan, trauma pengasuhan, dan spiritualitas.

Sebagai advisor SatuHikmah, Ario membawa pendekatan yang utuh: memadukan ilmu, empati, nilai Islam, dan pengalaman hidup untuk mendampingi anak muda agar menemukan jati diri, menyembuhkan luka, dan bertumbuh jadi versi terbaik dari diri mereka—tak hanya cerdas, tapi juga kuat secara emosi dan berarti bagi masyarakat.`,
    },
    {
      name: "Muhammad Yorga Permana, PhD",
      role: "Advisor SatuHikmah | Peneliti, Dosen, dan Pengamat Sosial | Alumni LSE & Universiteit van Amsterdam",
      image: "https://ik.imagekit.io/rtcameiff/Advisor2.png?updatedAt=1754017163318",
      description: `Dr. Muhammad Yorga Permana adalah seorang intelektual muda yang aktif dalam kajian ilmu sosial, politik, dan perkembangan masyarakat Muslim kontemporer. Ia menyelesaikan pendidikan doktoralnya di London School of Economics (LSE) dan sebelumnya meraih gelar Master dari Universiteit van Amsterdam, Belanda.

Fokus keilmuannya mencakup isu-isu keadilan sosial, civil society, Islam dan kewargaan, serta dinamika kelas menengah Muslim di Indonesia. Dengan kombinasi ketajaman akademik dan kepekaan sosial, Yorga kerap menjadi narasumber dalam forum kajian, seminar, dan media yang membahas isu-isu transformasi sosial dan generasi muda Muslim.

Sebagai advisor SatuHikmah, Yorga memberi kontribusi penting dalam merumuskan arah gerakan intelektual dan sosial yang membumi, reflektif, dan kritis—mendorong pemuda Muslim untuk tidak hanya taat secara spiritual, tetapi juga peka terhadap realitas sosial dan berani mengambil peran perubahan.`,
    },
    {
      name: "Eko Kurniawan",
      role: "Advisor SatuHikmah | Praktisi Teknologi dan Inovasi Sosial | CTO",
      image: "https://ik.imagekit.io/rtcameiff/Advisor3.png?updatedAt=1754017163277",
      description: `Eko Kurniawan adalah seorang praktisi teknologi dengan pengalaman lebih dari 15 tahun di berbagai perusahaan teknologi global dan startup lintas negara. Ia pernah berkontribusi di posisi strategis di berbagai perusahaan internasional di bidang cloud infrastructure, data engineering, dan product development, termasuk pengalaman bekerja lintas budaya di Asia Tenggara, Eropa, dan Amerika.

Sebagai founder dan CTO, Eko dikenal tidak hanya andal secara teknis, tetapi juga memiliki visi kuat dalam membangun tim teknologi yang agile, kolaboratif, dan berdampak. Pengalaman internasionalnya menjadikannya mentor yang berpandangan luas namun tetap membumi, terutama dalam membimbing generasi muda untuk siap menghadapi tantangan global.

Sebagai advisor SatuHikmah, Eko memberi kontribusi pada aspek digitalisasi, inovasi strategis, serta bagaimana membangun ekosistem pembinaan yang mampu menjangkau anak muda lintas batas—secara geografis maupun teknologi—tanpa kehilangan nilai dan arah.`,
    },
  ];

  const challenges = [
    {
      title: "Kecanduan digital dan masalah kesehatan mental",
      description: "Kecanduan digital dan masalah kesehatan mental meningkat tajam—seperti kecemasan, kesepian, dan menurunnya kepuasan hidup (Dhamayanti et al., 2019; Twenge, 2023; UNICEF Indonesia, 2024).",
      image: "/lovable-uploads/de88f804-6000-481b-8b3f-7b55c94fad30.png",
      caption: "Data Depresi di Kalangan Pemuda Indonesia (Kementerian Kesehatan RI, 2024)"
    },
    {
      title: "Krisis Identitas",
      description: "Banyak pemuda Muslim mengalami krisis identitas—terpecah antara modernitas sekuler dan nilai-nilai Islam tradisional—yang memicu kebingungan dan disonansi moral (Pew Research Center, 2012; Slama, 2018). Meski partisipasi mereka dalam aktivitas keagamaan tergolong rendah, mereka ternyata masih sangat membutuhkan dukungan spiritual (lihat grafik di bawah).",
      image: "/lovable-uploads/29edcf51-0c72-4c1a-94e5-6b74e6449a8f.png",
      caption: "Keterputusan Spiritual di Kalangan Pemuda Muslim: Temuan dari Survei Internal Tahun 2024"
    },
    {
      title: "Tidak Siap Dengan Dunia Kerja",
      description: "Pemuda di Indonesia merasa belum siap menghadapi dunia kerja modern. Mereka menghadapi kesenjangan besar dalam keterampilan praktis, digital, dan sosial-emosional yang dibutuhkan untuk meraih kesuksesan di masa depan (UNICEF Indonesia & Pulse Lab Jakarta, 2020).",
      image: "/lovable-uploads/a9a893cc-0e60-4b62-87c5-d60f6de8b347.png",
      caption: "Skills Gap Analysis - Future Workforce Preparation"
    }
  ];

  const values = [
    {
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Tadabbur dan refleksi makna hidup",
      description: "Mendorong perenungan mendalam tentang tujuan hidup dan makna keberadaan"
    },
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Hikmah dan ilmu yang membumi",
      description: "Mengintegrasikan ilmu dengan aplikasi praktis dalam kehidupan sehari-hari"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Pendekatan yang lembut, adaptif, dan kontekstual",
      description: "Memahami keunikan setiap individu dan menyesuaikan pendekatan sesuai konteks"
    },
    {
      icon: <Compass className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Pemberdayaan pemuda dan keberanian untuk memberi manfaat",
      description: "Membangun keberanian untuk berkontribusi positif kepada masyarakat"
    }
  ];

  const programs = [
    {
      title: "KEMBARA HIKMAH",
      subtitle: "Youth Identity Camp",
      description: "Camp 2 hari 1 malam yang dirancang untuk:",
      features: [
        "Menemukan kembali jati diri sebagai Muslim",
        "Mengurai tekanan sosial dan digital",
        "Membangun koneksi dengan Allah & sesama"
      ],
      highlights: [
        "Digital Detox & Journaling",
        "Tadabbur alam dan refleksi malam",
        "Diskusi: \"Siapa aku di hadapan Allah?\"",
        "Api unggun & curhat iman bareng mentor"
      ],
      icon: <Mountain className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-green-400 to-blue-500"
    },
    {
      title: "DIGITAL MINDFULNESS SERIES",
      subtitle: "Seri Sesi Daring-Luring",
      description: "Seri sesi daring-luring untuk:",
      features: [
        "Mengenali dampak dunia digital terhadap hati dan pikiran",
        "Melatih screen-time yang sehat",
        "Membangun kesadaran spiritual di era scroll"
      ],
      highlights: [
        "Tantangan puasa medsos",
        "Workshop konten Islami",
        "Journaling reflektif: \"Apa yang aku konsumsi, membentuk siapa aku\""
      ],
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "YOUTH PURPOSE & CAREER WORKSHOP",
      subtitle: "Kolaborasi Spiritual dan Visi Karier",
      description: "Program spesial berbasis kurikulum Sekolah Karir: membantu pemuda menata ulang arah hidup dan karier dengan fondasi nilai Islam.",
      features: [
        "Mengenal passion & potensi diri (Passion Mapping)",
        "Menyusun Vision Board Karier Islami",
        "Digital reputation & personal branding",
        "Emotional intelligence & time management",
        "Islamic values dalam dunia profesional"
      ],
      highlights: [
        "Simulasi interview kerja",
        "Sesi \"Karier Halal, Hati Tenang\"",
        "Coaching 1-on-1 dengan mentor inspiratif"
      ],
      icon: <Briefcase className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-orange-400 to-red-500"
    },
    {
      title: "HIKMAH DIRI",
      subtitle: "Self Discovery & Personal Growth Series",
      description: "Kelas pengembangan diri selama 6 bulan untuk mendampingi Muslim usia 18–24 tahun, yang ingin:",
      features: [
        "Menggali potensi diri & visi hidup",
        "Membangun mental & spiritual growth",
        "Menemukan makna hidup & misi pribadi"
      ],
      highlights: [
        "Kelas refleksi narasi diri",
        "Diskusi spiritual & values journey",
        "Sesi monthly 1-on-1 personal growth"
      ],
      icon: <User className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-indigo-400 to-purple-500"
    },
    {
      title: "HIKMAH JIWA (Mental Health Coaching)",
      subtitle: "Pendampingan Qur’anic Wellness",
      description: "Program pendampingan mental-emosional untuk kamu yang ingin lebih sehat secara jiwa, lebih kuat secara batin, dan lebih tenang menjalani hidup.",
      features: [
        "Mengenal emosi dan mengelolanya",
        "Membangun habit & coping islami",
        "Mendamaikan luka batin & penerimaan diri"
      ],
      highlights: [
        "Sesi healing bersama mentor muslimah",
        "Rangkaian journaling emosi & iman",
        "Refleksi Qurani dalam kondisi stres"
      ],
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-pink-400 to-rose-500"
    },
    {
      title: "SAKINAH BERHIKMAH (Sekolah Pra-Nikah)",
      subtitle: "Sekolah Pra-Nikah",
      description: "Program pra-nikah yang membekali pemuda Muslim dengan ilmu, kesadaran, dan ketenangan untuk mempersiapkan tanggung jawab sakinah, mawaddah, dan rahmah.",
      features: [
        "Mengenal visi & kesiapan menikah",
        "Mempersiapkan mental, emosi, dan visi hidup keluarga",
        "Menemukan pasangan yang sefrekuensi secara iman, akhlak, dan tujuan"
      ],
      highlights: [
        "Kelas interaktif & simulasi problem solving",
        "Diskusi pengalaman nyata dengan pasangan & mentor",
        "Sesi refleksi kesiapan batin & spiritual"
      ],
      icon: <HeartHandshake className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-lime-400 to-emerald-500"
    }
  ];

  const getFeatureIcon = (index: number, programIndex: number) => {
    const icons = [
      [<Users className="w-4 h-4 sm:w-5 sm:h-5" />, <Heart className="w-4 h-4 sm:w-5 sm:h-5" />, <Target className="w-4 h-4 sm:w-5 sm:h-5" />],
      [<Shield className="w-4 h-4 sm:w-5 sm:h-5" />, <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />],
      [<MapPin className="w-4 h-4 sm:w-5 sm:h-5" />, <Target className="w-4 h-4 sm:w-5 sm:h-5" />, <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />, <Heart className="w-4 h-4 sm:w-5 sm:h-5" />, <Shield className="w-4 h-4 sm:w-5 sm:h-5" />]
    ];
    return icons[programIndex]?.[index] || <Target className="w-4 h-4 sm:w-5 sm:h-5" />;
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Lokasi",
      value: "Jl.Sukolilo Regency Blok E-46, Sukolilo, Surabaya",
      action: () => {
        window.open("https://maps.google.com/?q=Jl.Sukolilo+Regency+Blok+E-46,+Sukolilo,+Surabaya", "_blank");
      }
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "WhatsApp",
      value: "0895-2816-4600",
      action: () => {
        window.open("https://wa.me/6289528164600", "_blank");
      }
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Email",
      value: "mirzasp841@gmail.com",
      action: () => {
        window.open("mailto:mirzasp841@gmail.com", "_blank");
      }
    },
    {
      icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Instagram",
      value: "@satuhikmah",
      action: () => {
        window.open("https://instagram.com/satuhikmah", "_blank");
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Home Section */}
      <section
        id="home"
        className="pt-4 sm:pt-5 pb-20 sm:pb-32 lg:pb-40 px-4 sm:px-6 md:px-8 min-h-[80vh] flex items-center relative overflow-hidden"
      >
        <img
          src="https://ik.imagekit.io/rtcameiff/background.jpg?updatedAt=1754017168099"
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-yellow-50/80 to-blue-50/70"></div>

        <div className="pt-28 sm:pt-28 md:pt-32 lg:pt-40 xl:pt-42 max-w-7xl mx-auto text-center relative px-4">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
            Satu Hikmah
          </h1>

          <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
            Menemani Generasi Muda Menemukan Arah, Makna, dan Cahaya Hikmah
          </h2>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-foreground mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-4xl mx-auto">
            Di tengah era distraksi dan kecemasan, SatuHikmah hadir sebagai ruang pertumbuhan spiritual,
            intelektual, dan sosial. Menyiapkan generasi yang tangguh, jernih dalam berpikir, dan kokoh dalam nilai.
          </p>

          <div className="space-y-4 sm:space-y-6 max-w-md w-full mx-auto px-3 sm:px-6">
            {/* Tombol WhatsApp */}
            <Button
              onClick={handleWhatsAppJoin}
              variant="gradient"
              size="lg"
              className="w-full min-h-[44px] sm:min-h-[52px] md:min-h-[56px] text-xs sm:text-sm md:text-base font-semibold rounded-md shadow-md hover:shadow-lg transform hover:scale-[1.01] transition-all duration-400 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-primary-foreground border-0 flex items-center justify-center px-2 relative z-50"
              style={{ touchAction: 'manipulation', pointerEvents: 'auto' }}
            >
              <MessageCircle className="mr-1 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-center leading-tight">Gabung Komunitas WA Kami</span>
            </Button>

            {/* Tombol Navigasi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Tombol Program */}
              <button
                onClick={() => document.querySelector('#program')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative z-50 w-full"
                style={{ touchAction: 'manipulation', pointerEvents: 'auto' }}
                type="button"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full min-h-[44px] sm:min-h-[48px] text-xs sm:text-sm rounded-md border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-md flex items-center justify-center px-2 cursor-pointer"
                  asChild
                >
                  <span className="flex items-center justify-center w-full h-full">
                    <Target className="mr-1 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden xs:inline">Lihat Program Kami</span>
                    <span className="xs:hidden">Program</span>
                  </span>
                </Button>
              </button>

              {/* Tombol Tim - DIPERBAIKI */}
              <button
                onClick={() => {
                  console.log('Tim button clicked!'); 
                  const teamElement = document.querySelector('#team');
                  if (teamElement) {
                    teamElement.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    console.warn('Team element not found');
                  }
                }}
                className="group relative z-[999] w-full cursor-pointer"
                style={{
                  touchAction: 'manipulation',
                  pointerEvents: 'auto',
                  userSelect: 'none',
                  WebkitTapHighlightColor: 'transparent'
                }}
                type="button"
                onTouchStart={(e) => {
                  e.preventDefault();
                  console.log('Touch start on team button');
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  console.log('Touch end on team button');
                  const teamElement = document.querySelector('#team');
                  if (teamElement) {
                    teamElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full min-h-[44px] sm:min-h-[48px] text-xs sm:text-sm rounded-md border-2 border-secondary/20 bg-white/70 backdrop-blur-sm hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 group-hover:shadow-md flex items-center justify-center px-2 cursor-pointer pointer-events-none"
                  asChild
                >
                  <span className="flex items-center justify-center w-full h-full pointer-events-none">
                    <Users className="mr-1 h-4 w-4 sm:h-5 sm:w-5 pointer-events-none" />
                    <span className="hidden xs:inline pointer-events-none">Tim Founder</span>
                    <span className="xs:hidden pointer-events-none">Tim</span>
                  </span>
                </Button>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 -mt-32 sm:-mt-36 md:-mt-40 lg:-mt-44 xl:-mt-48 2xl:-mt-52">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-[#4E6E8C] text-white rounded-xl shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
                <img src="../lovable-uploads/icon1.png" alt="Spiritual Icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Spiritual Growth</h3>
              <p className="text-sm sm:text-base">
                Menumbuhkan kekuatan spiritual dan keterhubungan dengan Allah SWT
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-[#4E6E8C] text-white rounded-xl shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
                <img src="../lovable-uploads/icon2.png" alt="Intellectual Icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Intellectual Development</h3>
              <p className="text-sm sm:text-base">
                Mengasah kemampuan berpikir kritis dan jernih dalam menghadapi tantangan
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-[#4E6E8C] text-white rounded-xl shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
                <img src="../lovable-uploads/icon3.png" alt="Social Icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Social Impact</h3>
              <p className="text-sm sm:text-base">
                Membangun karakter yang aktif berkontribusi untuk masyarakat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
              Our Team
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
              Tim founder dan advisor yang berdedikasi membangun generasi Muslim yang tangguh dan berintegritas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
            {founders.map((member, index) => (
              <div key={index} className="relative">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain"
                  />

                </div>
                <div className="bg-[#4E6E8C] text-white rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 -mt-8 sm:-mt-10 md:-mt-12 relative z-10">
                  <div className="text-center pt-6 sm:pt-8 md:pt-10">
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{member.name}</h4>
                    <p className="text-sm sm:text-base font-medium text-yellow-300 mb-3 sm:mb-4 whitespace-pre-line">
                      {member.role}
                    </p>
                    <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line text-left">
                      {member.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-4 text-center">
            Advisor Team
          </h3>
          <p className="text-center text-muted-foreground mb-6 sm:mb-8 px-2 text-sm sm:text-base">
            Para mentor berpengalaman yang membimbing visi dan misi SatuHikmah
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
            {advisors.map((advisor, index) => (
              <div key={index} className="relative max-w-sm mx-auto w-full">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>
                <div className="bg-[#4E6E8C] text-white rounded-2xl shadow-xl p-4 sm:p-5 -mt-6 sm:-mt-8 relative z-10">
                  <div className="text-center pt-4 sm:pt-6">
                    <h4 className="text-base sm:text-lg font-semibold mb-2">{advisor.name}</h4>
                    <p className="text-sm sm:text-base font-medium text-yellow-300 mb-3 sm:mb-4 whitespace-pre-line">
                      {advisor.role}
                    </p>
                    <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line text-left">
                      {advisor.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                Tantangan Anak Muda Saat Ini
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Indonesia memiliki populasi pemuda Muslim terbesar di dunia—lebih dari 64 juta jiwa berusia 15–24 tahun (BPS, 2021).
                Namun, berbagai riset terbaru menunjukkan bahwa generasi muda Indonesia tengah menghadapi tantangan yang kompleks dan mendalam.
              </p>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {challenges.map((challenge, index) => (
                <Card key={index} className="overflow-hidden shadow-elegant">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
                      <div className={index % 2 === 1 ? "md:order-2" : ""}>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4">
                          {index + 1}. {challenge.title}
                        </h3>
                        <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4 sm:mb-6">
                          {challenge.description}
                        </p>
                      </div>
                      <div className={index % 2 === 1 ? "md:order-1" : ""}>
                        <div className="bg-muted rounded-lg p-3 sm:p-4">
                          <img
                            src={challenge.image}
                            alt={challenge.caption}
                            className="w-full h-auto rounded max-w-xs sm:max-w-sm md:max-w-md mx-auto"
                          />
                          <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3 text-center">
                            {challenge.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12 sm:mb-16 bg-gradient-subtle rounded-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6 text-center">
              Siapa Kami?
            </h2>
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
                Di tengah gempuran layar dan standar sosial yang tak menentu di atas, generasi muda membutuhkan ruang bertumbuh—bukan hanya cerdas secara akademik, tapi juga dewasa secara spiritual dan sosial.
              </p>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-primary">
                SatuHikmah lahir untuk menjawab kegelisahan ini.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
                Kami adalah komunitas pembinaan remaja dan pemuda yang memadukan kekuatan nilai Islam, social learning yang solid, dan aksi nyata bagi masyarakat. SatuHikmah menjadi tempat bertumbuhnya generasi yang:
              </p>
              <ul className="text-left max-w-2xl mx-auto space-y-2 text-foreground text-sm sm:text-base">
                <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>kuat secara ruhiyah,</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>jernih dalam berpikir,</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>kokoh dalam memegang nilai,</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>dan hadir untuk masyarakatnya</li>
              </ul>
            </div>
          </div>

          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 sm:mb-12 text-center">
              Makna Logo SatuHikmah
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div className="text-center">
                <img
                  src="/lovable-uploads/b58d30de-2dc7-4daf-b5f8-851b854b943e.png"
                  alt="Logo SatuHikmah"
                  className="w-40 sm:w-48 md:w-56 h-auto mx-auto"
                />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
                  Logo SatuHikmah dirancang dengan filosofi mendalam yang mencerminkan nilai inti dari gerakan ini: ilmu, kebijaksanaan, kontemplasi, dan spiritualitas Islam.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-2">1. Simbol Setengah Lingkaran Tertutup</h4>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">
                      Bagian utama logo berbentuk setengah lingkaran yang tertutup, mengandung beberapa makna:
                    </p>
                    <ul className="mt-2 space-y-1 text-foreground text-sm sm:text-base ml-4">
                      <li>• <strong>Setetes Air:</strong> Melambangkan ilmu dan hikmah yang menetes pelan, menyegarkan hati dan jiwa.</li>
                      <li>• <strong>Mata Tertutup atau Menunduk:</strong> Simbol tadabbur, perenungan, dan kerendahan hati.</li>
                      <li>• <strong>Huruf "S" Abstrak:</strong> Menyimbolkan kesatuan arah, visi, dan tujuan.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-2">2. Lekukan di Atas Simbol</h4>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">
                      Lekukan melengkung di atas simbol utama menyerupai bulan sabit yang menghadap ke atas:
                    </p>
                    <ul className="mt-2 space-y-1 text-foreground text-sm sm:text-base ml-4">
                      <li>• <strong>Bulan Sabit:</strong> Ikon klasik dalam budaya Islam yang melambangkan harapan dan kebangkitan.</li>
                      <li>• <strong>Terbuka ke Arah Atas:</strong> Menandakan keterbukaan terhadap petualangan spiritual.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 sm:mb-12 text-center">
              Nilai-Nilai Kami
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="text-secondary mt-1">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-2">
                          {value.title}
                        </h3>
                        <p className="text-sm sm:text-base text-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-subtle rounded-2xl p-6 sm:p-8 md:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
              Arah Komunitas
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed max-w-4xl mx-auto">
              Kami bergerak dengan semangat membangun manusia seutuhnya—yang kuat secara spiritual, matang secara emosional, dan aktif berkontribusi dalam kehidupan sosial. Setiap program dirancang untuk menumbuhkan nilai-nilai Islam yang hidup, tanpa sekat sektarian, dengan pendekatan yang relevan bagi generasi masa kini.
            </p>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
              Program Unggulan Tahun Ini
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Program-program transformatif yang dirancang khusus untuk pengembangan generasi muda Muslim yang berkarakter
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20">
            <div className="border-2 border-green-500 rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-primary mb-4 sm:mb-6 underline decoration-yellow-400">
                1. HIKMAH TANPA LAYAR
              </h3>
              <div className="space-y-8 sm:space-y-12">
                {[0, 1].map((i) => {
                  const program = programs[i];
                  if (!program) return null;

                  return (
                    <Card key={i} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 border border-yellow-400">
                      <CardContent className="p-0">
                        <div className="bg-yellow p-[2px] rounded-2xl">
                          <div className="bg-background rounded-2xl p-4 sm:p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] sm:gap-4 md:gap-6 items-start">
                              <img
                                src={`/assets/events/event${i + 1}.png`}
                                alt={`Event ${i + 1}`}
                                className="w-full h-auto rounded-xl object-cover max-w-[200px] mx-auto md:mx-0"
                              />
                              <div>
                                <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                                  <div className={`text-white bg-gradient-to-r ${program.color} p-2 sm:p-3 rounded-xl shadow-md`}>
                                    {program.icon}
                                  </div>
                                  <div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-1">{program.title}</h3>
                                    <Badge variant="secondary" className="mb-2 text-xs sm:text-sm">{program.subtitle}</Badge>
                                  </div>
                                </div>

                                <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6">{program.description}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                  <div>
                                    <h4 className="font-semibold text-primary mb-2 flex items-center text-sm sm:text-base">
                                      <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-secondary" />
                                      Tujuan Program
                                    </h4>
                                    <ul className="space-y-2 text-foreground text-xs sm:text-sm">
                                      {program.features.map((f, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                          {getFeatureIcon(idx, i)}
                                          <span>{f}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div>
                                    <h4 className="font-semibold text-primary mb-2 flex items-center text-sm sm:text-base">
                                      <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-accent" />
                                      Highlight Kegiatan
                                    </h4>
                                    <ul className="space-y-2 text-foreground text-xs sm:text-sm">
                                      {program.highlights.map((h, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                          <div className="w-2 h-2 mt-1 sm:mt-2 rounded-full bg-accent" />
                                          <span>{h}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                <div className="border-t-2 border-border mt-4 sm:mt-6" />

                                <div className="text-center mt-6 sm:mt-8">
                                  <p className="text-muted-foreground mb-2 text-sm sm:text-base">Tertarik mengikuti program ini?</p>
                                  <Button
                                    variant="gradient"
                                    size="lg"
                                    onClick={() => window.open("https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd", "_blank")}
                                    className="text-xs sm:text-sm"
                                  >
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                    Daftar Sekarang
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div className="border-2 border-yellow-400 rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-primary mb-4 sm:mb-6 underline decoration-yellow-400">
                2. PEMUDA BERHIKMAH
              </h3>
              <div className="space-y-8 sm:space-y-12">
                {[2, 3, 4, 5].map((i) => {
                  const program = programs[i];
                  if (!program) return null;

                  return (
                    <Card key={i} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 border border-yellow-400">
                      <CardContent className="p-0">
                        <div className="bg-yellow p-[2px] rounded-2xl">
                          <div className="bg-background rounded-2xl p-4 sm:p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] sm:gap-4 md:gap-6 items-start">
                              <img
                                src={`/assets/events/event${i + 1}.png`}
                                alt={`Event ${i + 1}`}
                                className="w-full h-auto rounded-xl object-cover max-w-[200px] mx-auto md:mx-0"
                              />
                              <div>
                                <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                                  <div className={`text-white bg-gradient-to-r ${program.color} p-2 sm:p-3 rounded-xl shadow-md`}>
                                    {program.icon}
                                  </div>
                                  <div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-1">{program.title}</h3>
                                    <Badge variant="secondary" className="mb-2 text-xs sm:text-sm">{program.subtitle}</Badge>
                                  </div>
                                </div>

                                <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6">{program.description}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                  <div>
                                    <h4 className="font-semibold text-primary mb-2 flex items-center text-sm sm:text-base">
                                      <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-secondary" />
                                      Tujuan Program
                                    </h4>
                                    <ul className="space-y-2 text-foreground text-xs sm:text-sm">
                                      {program.features.map((f, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                          {getFeatureIcon(idx, i)}
                                          <span>{f}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div>
                                    <h4 className="font-semibold text-primary mb-2 flex items-center text-sm sm:text-base">
                                      <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-accent" />
                                      Highlight Kegiatan
                                    </h4>
                                    <ul className="space-y-2 text-foreground text-xs sm:text-sm">
                                      {program.highlights.map((h, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                          <div className="w-2 h-2 mt-1 sm:mt-2 rounded-full bg-accent" />
                                          <span>{h}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                <div className="border-t-2 border-border mt-4 sm:mt-6" />

                                <div className="text-center mt-6 sm:mt-8">
                                  <p className="text-muted-foreground mb-2 text-sm sm:text-base">Tertarik mengikuti program ini?</p>
                                  <Button
                                    variant="gradient"
                                    size="lg"
                                    onClick={() => window.open("https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd", "_blank")}
                                    className="text-xs sm:text-sm"
                                  >
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                    Daftar Sekarang
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center bg-background rounded-2xl p-6 sm:p-8 shadow-elegant">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4">
              Siap Bergabung dengan Komunitas SatuHikmah?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
              Jadilah bagian dari gerakan pemuda Muslim yang berkomitmen untuk tumbuh bersama dalam nilai-nilai Islam yang membumi dan relevan.
            </p>
            <Button
              onClick={() => window.open("https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd", "_blank")}
              variant="gradient"
              size="lg"
              className="text-xs sm:text-sm"
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Gabung Komunitas WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
              Kontak & Sosial Media
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Mari terhubung dengan kami dan bergabung dalam perjalanan menuju hikmah bersama
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="cursor-pointer shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
                onClick={contact.action}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="text-secondary bg-secondary/10 p-2 sm:p-3 rounded-lg">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-primary mb-1">
                        {contact.label}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-8 sm:mb-12 overflow-hidden shadow-elegant">
            <CardContent className="p-0">
              <div className="aspect-[16/9] sm:aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4961942474896!2d112.7969!3d-7.2975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa1323221975%3A0x306c3c99adedb258!2sSukolilo%20Regency!5e0!3m2!1sen!2sid!4v1635000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi SatuHikmah"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-6 sm:space-y-8">
            <div className="bg-gradient-subtle rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4">
                Siap Bergabung dengan Kami?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
                Jangan biarkan kesempatan untuk bertumbuh bersama komunitas yang tepat terlewat begitu saja.
                Mari mulai perjalanan menuju hikmah dan makna hidup yang lebih dalam.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  onClick={() => window.open("https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd", "_blank")}
                  variant="gradient"
                  size="lg"
                  className="w-full sm:w-auto text-xs sm:text-sm"
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Gabung WhatsApp Group
                </Button>

                <Button
                  onClick={() => window.open("https://instagram.com/satuhikmah", "_blank")}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-xs sm:text-sm"
                >
                  <Instagram className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Follow Instagram
                </Button>
              </div>
            </div>

            <Card className="shadow-elegant">
              <CardContent className="p-6 sm:p-8">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-3 sm:mb-4">
                  Punya Pertanyaan?
                </h4>
                <p className="text-sm sm:text-base text-foreground mb-3 sm:mb-4">
                  Jangan ragu untuk menghubungi kami melalui platform yang paling nyaman untuk Anda.
                  Tim kami siap membantu menjawab pertanyaan dan memberikan informasi lebih lanjut tentang program-program SatuHikmah.
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  <Button
                    onClick={() => window.open("https://wa.me/6289528164600", "_blank")}
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm"
                  >
                    <Phone className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={() => window.open("mailto:mirzasp841@gmail.com", "_blank")}
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm"
                  >
                    <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Email
                  </Button>
                  <Button
                    onClick={() => window.open("https://instagram.com/satuhikmah", "_blank")}
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm"
                  >
                    <Instagram className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Instagram DM
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;