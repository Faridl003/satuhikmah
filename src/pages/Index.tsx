import Footer from "@/components/Footer";
import ProgramPage from "./program";
import CommunityVoices from "./comunity_voices";
import OurTeam from "./our_team";
import OurValues from "./our_values";
import ProductsSection from "./product";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title =
      "SatuHikmah - Komunitas Pengembangan Pemuda Muslim Indonesia | Program Spiritual & Karir";

    const setMetaTag = (name, content, property = false) => {
      let meta = document.querySelector(
        property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      );
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(property ? "property" : "name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    //  SEO Meta Tags
    setMetaTag(
      "description",
      "Komunitas SatuHikmah mengiringi pemuda Muslim usia 18-24 tahun menemukan jati diri, mengembangkan spiritual, dan mempersiapkan karir halal. Bergabunglah dengan program Kembara Hikmah, Digital Mindfulness, dan Youth Career Workshop."
    );
    setMetaTag(
      "keywords",
      "komunitas muslim, pemuda islam, pengembangan diri islam, spiritual growth, karir halal, digital detox islam, kembara hikmah, surabaya, komunitas muslim surabaya, pengembangan pemuda muslim, program spiritual islam"
    );
    setMetaTag("robots", "index, follow");
    setMetaTag("language", "Indonesian");
    setMetaTag("author", "SatuHikmah");
    setMetaTag("viewport", "width=device-width, initial-scale=1.0");

    //  OG Tags
    setMetaTag("og:type", "website", true);
    setMetaTag("og:url", "https://satuhikmah.id/", true);
    setMetaTag(
      "og:title",
      "SatuHikmah - Komunitas Pengembangan Pemuda Muslim Indonesia",
      true
    );
    setMetaTag(
      "og:description",
      "Komunitas SatuHikmah mengiringi pemuda Muslim usia 18-24 tahun menemukan jati diri, mengembangkan spiritual, dan mempersiapkan karir halal.",
      true
    );
    setMetaTag("og:image", "https://satuhikmah.id/og-image.jpg", true);
    setMetaTag("og:site_name", "SatuHikmah", true);
    setMetaTag("og:locale", "id_ID", true);

    //  Twitter Tags
    setMetaTag("twitter:card", "summary_large_image", true);
    setMetaTag("twitter:url", "https://satuhikmah.id/", true);
    setMetaTag(
      "twitter:title",
      "SatuHikmah - Komunitas Pengembangan Pemuda Muslim Indonesia",
      true
    );
    setMetaTag(
      "twitter:description",
      "Komunitas SatuHikmah mengiringi pemuda Muslim usia 18-24 tahun menemukan jati diri, mengembangkan spiritual, dan mempersiapkan karir halal.",
      true
    );
    setMetaTag("twitter:image", "https://satuhikmah.id/og-image.jpg", true);

    //  Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://satuhikmah.id/");

    //  Schema Markup (Organization, LocalBusiness, FAQ)
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "SatuHikmah",
        alternateName: ["Satu Hikmah", "Komunitas SatuHikmah"],
        url: "https://satuhikmah.id",
        logo: "https://satuhikmah.id/logo.png",
        description:
          "Komunitas pengembangan pemuda Muslim Indonesia yang fokus pada spiritual growth, intellectual development, dan social impact untuk usia 18-24 tahun",
        foundingDate: "2024",
        keywords: [
          "komunitas muslim",
          "pemuda islam",
          "pengembangan diri",
          "spiritual growth",
          "karir halal",
          "surabaya",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl.Sukolilo Regency Blok E-46",
          addressLocality: "Sukolilo",
          addressRegion: "Surabaya",
          addressCountry: "ID",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+62-895-2816-4600",
            contactType: "customer service",
            availableLanguage: "Indonesian",
          },
        ],
        sameAs: [
          "https://instagram.com/satuhikmah",
          "https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "SatuHikmah",
        image: "https://satuhikmah.id/logo.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl.Sukolilo Regency Blok E-46",
          addressLocality: "Sukolilo",
          addressRegion: "Surabaya",
          postalCode: "60111",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -7.2975,
          longitude: 112.7969,
        },
        telephone: "+62-895-2816-4600",
        email: "mirzasp841@gmail.com",
        url: "https://satuhikmah.id",
        priceRange: "Gratis - Rp 500.000",
        openingHours: "Mo-Su 08:00-20:00",
        areaServed: "Indonesia",
      },
    ];

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apa itu SatuHikmah?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SatuHikmah adalah komunitas pengembangan pemuda Muslim Indonesia yang fokus pada spiritual growth, intellectual development, dan social impact untuk usia 18-24 tahun.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana cara bergabung?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anda dapat bergabung melalui WhatsApp Group kami di https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd atau menghubungi kami di 0895-2816-4600.",
          },
        },
      ],
    };

    [...schemas, faqSchema].forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup
    return () => {
      document
        .querySelectorAll('script[type="application/ld+json"]')
        .forEach((s) => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mt-20 relative">
        <img
          src="/images/slide1.jpg"
          alt="Kembara Hikmah"
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Kembara Hikmah #2
          </h1>
          <p className="text-gray-100 text-lg md:text-xl max-w-3xl leading-relaxed">
            Sebuah perjalanan alam mendekat kepada Allah dan menemukan versi
            terbaik diri sendiri bersama Kembara Hikmah hadir kembali 🙌🏻
          </p>
        </div>
      </section>

      {/* Statistik */}
      <section className="bg-[#0F2947] text-white py-5 flex flex-wrap justify-center gap-16 text-center">
        {[
          ["Frame1.png", "800++", "Anggota Komunitas"],
          ["Frame2.png", "300++", "Pendaftar Dalam Setiap Event"],
          ["Frame3.png", "100%", "Program Positif dan Bermanfaat"],
        ].map(([icon, number, label], i) => (
          <div key={i} className="flex items-center gap-5">
            <img
              src={`/assets/icons/${icon}`}
              alt={label}
              className="w-[90px] h-[90px]"
            />
            <div className="text-left">
              <p className="text-[40px] font-semibold">{number}</p>
              <p className="text-sm w-[230px] font-semibold">{label}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Tentang Kami */}
      <section id="about">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          <img
            src="/assets/logo/satuhikmah.png"
            alt="Logo SatuHikmah"
            className="w-[450px] h-auto"
          />
          <div>
            <p className="text-lg mb-6 max-w-xl">
              Kami adalah komunitas pembinaan remaja dan pemuda yang memadukan
              kekuatan nilai Islam, social learning yang solid, dan aksi nyata
              bagi masyarakat.
            </p>
            <a
              href="#"
              className="font-semibold hover:underline inline-flex items-center gap-2"
            >
              Join Now <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Sections */}
      <OurValues />
      <ProgramPage judul={"Programs"} subsJud={"On Going"} />
      <ProductsSection />
      <CommunityVoices />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default Index;
