import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <img
                src="/assets/logo/satuhikmah2.png"
                alt="Logo SatuHikmah"
                className="w-30 h-10"
              />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dapatkan informasi terbaru dengan bergabung dalam komunitas.
            </p>
            <a
              href="https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-300 rounded-lg px-6 py-3 font-medium hover:bg-gray-100 transition"
            >
              Join Our Community
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick links</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#program" className="hover:text-primary">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-primary">
                  Program
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-primary">
                  Produk
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary">
                  Tim Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Produk */}
          <div>
            <h4 className="font-semibold mb-4">Produk</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Webinar</li>
              <li>Buku</li>
              <li>Merchandise</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow us</h4>
            <ul className="space-y-4 text-gray-700">
              <li>
                <a
                  href="https://facebook.com/satuhikmah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition"
                  aria-label="Facebook SatuHikmah"
                >
                  <Facebook size={18} /> Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/satuhikmah.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition"
                  aria-label="Instagram SatuHikmah"
                >
                  <Instagram size={18} /> Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/satuhikmah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition"
                  aria-label="X SatuHikmah"
                >
                  <Twitter size={18} /> X
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com/company/satuhikmah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition"
                  aria-label="LinkedIn SatuHikmah"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://youtube.com/@satuhikmah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition"
                  aria-label="Youtube SatuHikmah"
                >
                  <Youtube size={18} /> Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-16 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© 2025 SatuHikmah. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-primary">
              Privacy policy
            </a>
            <a href="#" className="hover:text-primary">
              Terms of service
            </a>
            <a href="#" className="hover:text-primary">
              Cookies settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
