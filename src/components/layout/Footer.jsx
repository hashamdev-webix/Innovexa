import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, Share2 } from "lucide-react";
import Button from "../ui/Button";

export default function Footer() {
  const socialLinks = [
    { icon: Share2, href: "#", label: "Facebook" },
    { icon: Share2, href: "#", label: "Instagram" },
    { icon: Share2, href: "#", label: "Twitter" },
  ];

  const companyLinks = [
    { label: "Home", to: "/" },
    { label: "Platform", to: "/platform" },
    { label: "Services", to: "/services" },
    { label: "Industries", to: "/industries" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Info@innovexasoftwares.com",
      href: "mailto:Info@innovexasoftwares.com",
    },
    {
      icon: Phone,
      label: "587-849-4612",
      href: "tel:587-849-4612",
    },
    {
      icon: MapPin,
      label: "112C-219 Dufferin St, Toronto, ON, M6K 3J1, Canada",
      href: null,
    },
    {
      icon: Globe,
      label: "www.innovexasoftwares.com",
      href: "https://www.innovexasoftwares.com",
    },
  ];

  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="container-x">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column A - Brand & Description (wider) */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-5">
              <img
                src="/logo-white.png"
                alt="Innovexa Softwares"
                className="h-10"
                onError={(e) => {
                  e.target.src = "/logo.png";
                }}
              />
            </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Innovexa Softwares provides AI-powered IT troubleshooting, network
              monitoring, printer and device support, ticket creation,
              onboarding support, and technology reporting for small and
              mid-sized Canadian businesses.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column B - Company Links */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-lg mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-white/70 text-sm hover:text-white hover:text-accent transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column C - Get Started */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-lg mb-5">Get Started</h3>
            <Button
              variant="secondary"
              size="md"
              to="/get-a-quote"
              className="mb-4"
            >
              Get a Quote
            </Button>
            <p className="text-white/70 text-sm">Reduce IT downtime today.</p>
          </div>

          {/* Column D - Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-lg mb-5">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start gap-3">
                  <contact.icon
                    size={18}
                    className="text-white/70 flex-shrink-0 mt-0.5"
                  />
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-white/70 text-sm hover:text-white hover:text-accent transition-colors"
                      target={contact.icon === Globe ? "_blank" : undefined}
                      rel={
                        contact.icon === Globe
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {contact.label}
                    </a>
                  ) : (
                    <span className="text-white/70 text-sm">
                      {contact.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 mt-12 pt-8">
          {/* Bottom Bar */}
          <p className="text-white/60 text-sm text-center lg:text-left">
            © 2026 Innovexa Softwares Ltd. All rights reserved. Canada.
          </p>
        </div>
      </div>
    </footer>
  );
}
