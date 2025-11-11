import React from "react";

// Data untuk kartu produk, bisa Anda ganti sesuai kebutuhan
const productsData = [
  {
    category: "Webinar",
    title: "Ikuti webinar inspiratif bersama narasumber ahli",
    description:
      "Bahas topik seputar self-development, leadership, hingga parenting.",
    imageUrl: "/images/Image1.png",
    imageAlt:
      "Laptop di atas meja dengan secangkir kopi, melambangkan webinar online.",
  },
  {
    category: "Buku",
    title: "Temukan buku-buku pilihan dari penulis inspiratif",
    description: "Hadir dengan topik relevan yang menambah wawasanmu.",
    imageUrl: "/images/Image2.png",
    imageAlt: "Buku terbuka dengan latar belakang langit biru.",
  },
  {
    category: "Merchandise",
    title: "Merchandise keren yang maksimalin penampilanmu",
    description: "Barang-barang keren yang bisa kamu gunakan sehari-hari.",
    imageUrl: "/images/Image3.png",
    imageAlt: "Seseorang mengenakan topi putih, mewakili merchandise.",
  },
];

// Komponen Kartu Produk yang bisa digunakan kembali
const ProductCard = ({ category, title, description, imageUrl, imageAlt }) => (
  <div className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-sm">
    <img src={imageUrl} alt={imageAlt} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-sm font-semibold text-black-500">{category}</p>
      <h3 className="mt-2 text-[35px] font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-600 flex-grow">{description}</p>
      <a
        href="#"
        className="mt-4 font-semibold text-gray-800 hover:text-gray-600 self-start"
      >
        Katalog &gt;
      </a>
    </div>
  </div>
);

// Komponen Utama Bagian Produk
export default function ProductsSection() {
  return (
    // Section ini sekarang memiliki latar belakang putih dan padding untuk menciptakan efek border.
    <section className="bg-white p-4 sm:p-8 lg:p-8" id="produk">
      {/* Div dalam ini berisi latar belakang kuning dan konten sebenarnya. */}
      <div className="bg-[#F6F070] rounded-3xl py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Our Products
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Produk keren & bermanfaat, khusus buat kamu.
            </p>
          </div>

          {/* Grid untuk kartu produk */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product, index) => (
              <ProductCard
                key={index}
                category={product.category}
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
                imageAlt={product.imageAlt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
