import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/lovable-uploads/d6604ed3-4ec7-4ef7-bc70-c7c7008ab589.png"
                alt="SatuHikmah Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">SatuHikmah</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Menemani Generasi Muda Menemukan Arah, Makna, dan Cahaya Hikmah.
              Komunitas pembinaan yang memadukan nilai Islam, social learning,
              dan aksi nyata.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/satuhikmah.id",
                    "_blank"
                  )
                }
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  window.open("https://wa.me/6289528164600", "_blank")
                }
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Our Team", href: "#team" },
                { name: "About", href: "#about" },
                { name: "Program", href: "#program" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary" />
                <span className="text-primary-foreground/80">
                  Jl. Sukolilo Regency Blok A-46, Sukolilo, Surabaya
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/80">
                  0895-2816-4600
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/80">
                  mirzasp841@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 SatuHikmah. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
