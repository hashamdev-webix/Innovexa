import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Activity,
  Printer,
  Ticket,
  Settings,
  FileBarChart,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Globe,
  MessageSquare,
  Bell,
  Send,
} from "lucide-react";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    cityProvince: "",
    inquiryType: "",
    businessType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // TODO: connect to backend / email / CRM
      console.log("Contact form submitted:", formData);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      cityProvince: "",
      inquiryType: "",
      businessType: "",
      message: "",
    });
    setErrors({});
    setSubmitted(false);
    setIsSuccess(false);
  };

  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const helpTopics = [
    {
      icon: Bot,
      title: "AI IT Troubleshooting",
      description:
        "Ask about chatbot-based support for common business technology problems.",
    },
    {
      icon: Activity,
      title: "Network Monitoring",
      description:
        "Contact us about internet, Wi-Fi, DNS, router, and connectivity monitoring.",
    },
    {
      icon: Printer,
      title: "Printer & Device Support",
      description:
        "Ask about support for offline printers, disconnected devices, and office technology issues.",
    },
    {
      icon: Ticket,
      title: "Support Ticket Creation",
      description:
        "Learn how Innovexa can create structured tickets with diagnostic details.",
    },
    {
      icon: Settings,
      title: "Onboarding & Setup",
      description:
        "Ask about setting up the dashboard, monitoring tools, users, alerts, and customer access.",
    },
    {
      icon: FileBarChart,
      title: "Monthly Technology Reports",
      description:
        "Contact us about reports for outages, recurring issues, device health, and support activity.",
    },
  ];

  const responseSteps = [
    {
      step: 1,
      title: "Submit Your Message",
      description:
        "Share your business details and the type of support you need.",
    },
    {
      step: 2,
      title: "Innovexa Reviews Your Inquiry",
      description:
        "Our team reviews your business type, technology needs, and message.",
    },
    {
      step: 3,
      title: "We Contact You",
      description:
        "Innovexa follows up by email, phone, or meeting request if needed.",
    },
    {
      step: 4,
      title: "Next Steps Are Recommended",
      description:
        "We guide you toward the right platform, service, quote, or support discussion.",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Info@innovexasoftwares.com",
      href: "mailto:Info@innovexasoftwares.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "587-849-4612",
      href: "tel:587-849-4612",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "112C-219 Dufferin St, Toronto, ON, M6K 3J1, Canada",
      href: null,
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.innovexasoftwares.com",
      href: "https://www.innovexasoftwares.com",
    },
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ink leading-tight mb-6">
              Contact Innovexa Softwares
            </h1>

            <p className="text-lg md:text-xl text-slate leading-relaxed mb-4">
              Have questions about AI-powered IT support, network monitoring,
              Wi-Fi diagnostics, printer troubleshooting, device support, or
              technology reporting? Our team is ready to help.
            </p>

            <p className="text-sm text-slate/80 leading-relaxed mb-8">
              Innovexa works with small and mid-sized Canadian businesses that
              need practical first-line IT support, monitoring, ticket creation,
              onboarding, and technology visibility without a full internal IT
              department.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" onClick={scrollToForm}>
                Send a Message
              </Button>
              <Button variant="outline" size="lg" to="/get-a-quote">
                Get a Quote
              </Button>
            </div>
          </motion.div>

          {/* Right: Customer Support Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-accent/10 to-brand-light/20 blur-3xl rounded-full transform scale-110"></div>

            {/* Support Dashboard Card */}
            <div className="relative bg-white rounded-xl2 shadow-cardHover border border-slate/10 p-6 space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate/10">
                <div className="flex items-center gap-2">
                  <MessageSquare size={20} className="text-brand" />
                  <h3 className="font-display font-semibold text-ink">
                    Support Chat
                  </h3>
                </div>
                <span className="text-xs bg-brand/10 text-brand px-3 py-1 rounded-full font-display font-semibold">
                  Online
                </span>
              </div>

              {/* Chat Messages */}
              <div className="space-y-3">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-cloud rounded-xl rounded-br-sm px-4 py-2 max-w-[80%]">
                    <p className="text-sm text-ink">
                      I need help with our office network
                    </p>
                  </div>
                </div>

                {/* Support Response */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-gradient-to-br from-brand/10 to-brand/5 rounded-xl rounded-tl-sm px-4 py-3 flex-1 border border-brand/20">
                    <p className="text-sm text-ink leading-relaxed">
                      I'd be happy to help! Let me connect you with our team to
                      discuss your network needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-cloud rounded-lg p-3 space-y-2">
                  <Mail size={16} className="text-brand" />
                  <p className="text-xs font-display font-semibold text-ink">
                    Email Support
                  </p>
                  <p className="text-xs text-slate">Response in 24h</p>
                </div>

                <div className="bg-cloud rounded-lg p-3 space-y-2">
                  <Phone size={16} className="text-brand" />
                  <p className="text-xs font-display font-semibold text-ink">
                    Phone Support
                  </p>
                  <p className="text-xs text-slate">Call anytime</p>
                </div>
              </div>

              {/* Support Badge */}
              <div className="bg-brand/5 border border-brand/20 rounded-lg p-3 flex items-center gap-3">
                <Bell size={16} className="text-brand flex-shrink-0" />
                <p className="text-xs text-ink">
                  <span className="font-display font-semibold">
                    Our team is ready to help
                  </span>{" "}
                  with your IT support questions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 2. CONTACT FORM */}
      <Section bg="cloud" id="contact-form">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Form (wider) */}
          <div className="lg:col-span-2">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl2 shadow-card border-2 border-brand p-8 text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center mx-auto">
                  <CheckCircle size={40} className="text-brand" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-ink mb-3">
                    Thank You!
                  </h2>
                  <p className="text-lg text-slate leading-relaxed">
                    Your message has been received. The Innovexa team will get
                    back to you as soon as possible.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="text-brand hover:text-brand-dark font-display font-semibold underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl2 shadow-card border border-slate/10 p-8"
              >
                <h2 className="text-3xl font-display font-bold text-ink mb-3">
                  Send Us a Message
                </h2>
                <p className="text-slate mb-8">
                  Fill out the form below and the Innovexa team will respond to
                  your inquiry as soon as possible.
                </p>

                <div className="space-y-8">
                  {/* Basic Information */}
                  <div>
                    <h3 className="font-display font-bold text-lg text-ink mb-4">
                      Basic Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full"
                        />
                        {submitted && errors.fullName && (
                          <p className="text-accent text-xs mt-1">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                          Business Name
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full"
                        />
                      </div>

                      <div>
                        <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                          Email Address <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full"
                        />
                        {submitted && errors.email && (
                          <p className="text-accent text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                          City / Province
                        </label>
                        <input
                          type="text"
                          name="cityProvince"
                          value={formData.cityProvince}
                          onChange={handleChange}
                          className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Inquiry Details */}
                  <div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                          Inquiry Type
                        </label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full"
                        >
                          <option value="">Select an inquiry type</option>
                          <option value="General Inquiry">
                            General Inquiry
                          </option>
                          <option value="AI IT Troubleshooting">
                            AI IT Troubleshooting
                          </option>
                          <option value="Network Monitoring">
                            Network Monitoring
                          </option>
                          <option value="Internet & Wi-Fi Issues">
                            Internet & Wi-Fi Issues
                          </option>
                          <option value="Printer & Device Support">
                            Printer & Device Support
                          </option>
                          <option value="Onboarding & Setup">
                            Onboarding & Setup
                          </option>
                          <option value="Monthly Technology Reports">
                            Monthly Technology Reports
                          </option>
                          <option value="Quote Request">Quote Request</option>
                          <option value="Partnership Inquiry">
                            Partnership Inquiry
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                          Business Type
                        </label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full"
                        >
                          <option value="">Select a business type</option>
                          <option value="Dental Clinic">Dental Clinic</option>
                          <option value="Law Firm">Law Firm</option>
                          <option value="Accounting Firm">
                            Accounting Firm
                          </option>
                          <option value="Medical Office">Medical Office</option>
                          <option value="Real Estate Office">
                            Real Estate Office
                          </option>
                          <option value="Service-Based Business">
                            Service-Based Business
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                        Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        placeholder="Tell us how we can help your business."
                        className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full resize-none"
                      ></textarea>
                      {submitted && errors.message && (
                        <p className="text-accent text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-accent hover:bg-accent-dark text-white font-display font-semibold px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Submit Message
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right: Contact Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 h-fit"
          >
            <div className="bg-white rounded-xl2 shadow-card border border-slate/10 p-6 space-y-6">
              <h3 className="font-display font-bold text-lg text-ink">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((contact, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <contact.icon
                      size={18}
                      className="text-brand flex-shrink-0 mt-1"
                    />
                    <div className="flex-1">
                      <p className="text-xs text-slate font-display font-semibold uppercase tracking-wide mb-1">
                        {contact.label}
                      </p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-sm text-ink hover:text-brand transition-colors"
                          target={contact.icon === Globe ? "_blank" : undefined}
                          rel={
                            contact.icon === Globe
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-sm text-ink">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate/10">
                <Button
                  variant="secondary"
                  size="md"
                  to="/get-a-quote"
                  className="w-full"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 3. HOW CAN INNOVEXA HELP */}
      <Section bg="white">
        <SectionHeading title="How Can Innovexa Help?" align="center" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {helpTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl2 p-6 shadow-card border border-slate/10"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                <topic.icon size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-2">
                {topic.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. RESPONSE EXPECTATION */}
      <Section bg="cloud">
        <SectionHeading
          title="What Happens After You Contact Us?"
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {responseSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl2 p-6 shadow-card border border-slate/10 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-brand text-white font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-2">
                {item.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. FINAL CTA */}
      <Section bg="white">
        <div className="relative bg-gradient-to-br from-brand-dark to-brand rounded-xl2 px-8 py-16 md:py-20 overflow-hidden">
          {/* Subtle accent radial highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Talk About Smarter IT Support?
            </h2>

            <p className="mt-4 text-white/80 text-[15px] leading-relaxed max-w-2xl mx-auto mb-8">
              Contact Innovexa Softwares to discuss AI-powered IT
              troubleshooting, network monitoring, Wi-Fi diagnostics, printer
              support, device troubleshooting, support tickets, onboarding, and
              reporting for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-brand/30 px-8 py-4 text-base bg-accent text-white hover:bg-accent-dark"
              >
                <Send size={18} />
                Send a Message
              </button>

              <Button
                variant="outline"
                size="lg"
                to="/get-a-quote"
                className="border-white text-white hover:bg-white hover:text-brand"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
