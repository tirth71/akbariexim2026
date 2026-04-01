import { Link } from "react-router-dom";
import logo from "@/assets/logo/20260329_193100.png";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  CheckCircle,
  Box
} from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 py-16">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* LEFT COLUMN */}
        <div className="space-y-6">

          {/* Logo */}

          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="AkbariExim Logo"
              className="h-24 w-auto object-contain"
            
            />

            <span className="text-xl font-bold">
              AKBARI <span className="text-green-600">EXIM</span>
            </span>
          </div>

          <p className="text-sm text-secondary-foreground/70 leading-relaxed">
            Your trusted partner in international trade, specializing in
            premium agricultural commodities and global export solutions.
          </p>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>

            <div className="grid grid-cols-2 gap-y-2 text-sm text-secondary-foreground/70">
              <Link to="/" className="hover:text-primary">Home</Link>
              <Link to="/about" className="hover:text-primary">About Us</Link>
              <Link to="/products" className="hover:text-primary">Our Products</Link>
              {/* <Link to="/faq" className="hover:text-primary">FAQs</Link> */}
              <Link to="/contact" className="hover:text-primary">Contact Us</Link>
            </div>

          </div>

        </div>

        {/* OUR EXPERTISE */}
        <div>
          <h4 className="font-semibold mb-4">Our Expertise</h4>

          <ul className="space-y-4 text-sm text-secondary-foreground/70">

            <li className="flex gap-3">
              <Box className="w-4 h-4 text-primary mt-1" />
              <div>
                <p className="font-medium text-secondary-foreground">
                  Agricultural Commodities
                </p>
                <p className="text-xs opacity-70">
                  Spices, Pulses, Nuts, Grains & Rice
                </p>
              </div>
            </li>



            <li className="flex gap-3">
              <Box className="w-4 h-4 text-primary mt-1" />
              <div>
                <p className="font-medium text-secondary-foreground">
                  Quality Assurance
                </p>
                <p className="text-xs opacity-70">
                  Testing, Certification & Documentation
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <Box className="w-4 h-4 text-primary mt-1" />
              <div>
                <p className="font-medium text-secondary-foreground">
                  Global Logistics
                </p>
                <p className="text-xs opacity-70">
                  Sea & Land Routes, Real-time Tracking
                </p>
              </div>
            </li>

          </ul>
        </div>

        {/* WHY CHOOSE US */}
        <div>
          <h4 className="font-semibold mb-4">Why Choose Us</h4>

          <ul className="space-y-3 text-sm text-secondary-foreground/70">

            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
              Direct farm & yard partnerships
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
              24/7 customer support
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
              Competitive pricing guarantee
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
              On-time delivery commitment
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Get In Touch</h4>

          <ul className="space-y-4 text-sm text-secondary-foreground/70">

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@akbariexim.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3"
            >
              <Mail className="w-4 h-4 text-primary" />
              info@akbariexim.com
            </a>

            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-primary" />
              +91 93164 90925
            </li>

            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-primary" />
              Yogichowk, Surat, Gujarat 395010, India
            </li>

          </ul>

          {/* Social */}
          <div className="flex gap-3 mt-5">

            <a
              href="https://www.linkedin.com/in/akbari-exim-62b6a2336?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-white transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/akbari_exim/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-white transition"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
            href="https://www.facebook.com/share/1FFrqUo95T/"
              target="_blank"
              rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-white transition"
            >
             
              <Facebook className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-secondary-foreground/10 mt-14 pt-6 text-center text-sm text-secondary-foreground/50">
        © {new Date().getFullYear()} AkbariExim. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;