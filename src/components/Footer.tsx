import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "#home" },
      { name: "Services", href: "#services" },
      { name: "Products", href: "#products" },
      { name: "About", href: "#about" },
    ],
    services: [
      { name: "Skincare Consultation", href: "#services" },
      { name: "Makeup Application", href: "#services" },
      { name: "Beauty Workshops", href: "#services" },
    ],
    contact: [
      { label: "Email", value: "hello@glowing.com" },
      { label: "Phone", value: "(555) 123-4567" },
      { label: "Address", value: "123 Beauty St, Glow City" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-[hsl(220,30%,15%)] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2">
              <img src={logo} alt="Glowing Logo" className="h-8 w-auto" />
              <span className="font-display text-2xl font-bold text-primary">
                Glowing
              </span>
            </a>
            <p className="text-white/60 mt-4 text-sm leading-relaxed">
              Your trusted partner in beauty and skincare excellence.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((item) => (
                <li key={item.label} className="text-sm">
                  <span className="text-white/40">{item.label}: </span>
                  <span className="text-white/60">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © 2024 Glowing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
