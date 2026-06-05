import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Wifi,
  Printer,
  Ticket,
  FileBarChart,
  Settings,
  CheckCircle,
  FileText,
  MessageSquare,
  Bell,
  Stethoscope,
  Scale,
  Calculator,
  HeartPulse,
  Building2,
  Store,
} from "lucide-react";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import CTASection from "../components/ui/CTASection";

export default function GetQuote() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    cityProvince: "",
    website: "",
    businessType: "",
    numEmployees: "",
    numLocations: "",
    numComputers: "",
    numPrinters: "",
    hasITTeam: "",
    servicesNeeded: [],
    currentProblems: [],
    message: "",
    preferredContact: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const currentArray = formData[name] || [];
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...currentArray, value]
          : currentArray.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.businessName.trim())
      newErrors.businessName = "Business name is required";
    if (!formData.contactName.trim())
      newErrors.contactName = "Contact name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // TODO: connect to backend / email / CRM
      console.log("Form submitted:", formData);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const resetForm = () => {
    setFormData({
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      cityProvince: "",
      website: "",
      businessType: "",
      numEmployees: "",
      numLocations: "",
      numComputers: "",
      numPrinters: "",
      hasITTeam: "",
      servicesNeeded: [],
      currentProblems: [],
      message: "",
      preferredContact: "",
    });
    setErrors({});
    setSubmitted(false);
    setIsSuccess(false);
  };

  const scrollToForm = () => {
    document
      .getElementById("quote-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const servicesOptions = [
    "AI-Assisted IT Troubleshooting",
    "Internet & Wi-Fi Monitoring",
    "Printer & Device Troubleshooting",
    "Support Ticket Creation",
    "Monthly Technology Reports",
    "Onboarding & Setup Support",
    "Not Sure / Need Recommendation",
  ];

  const problemsOptions = [
    "Internet outages",
    "Weak or unstable Wi-Fi",
    "Printer not working",
    "Devices disconnecting",
    "Slow systems",
    "No clear IT support process",
    "Recurring technology downtime",
    "Other",
  ];

  const quoteServices = [
    {
      icon: Bot,
      title: "AI IT Troubleshooting",
      description:
        "Chatbot-based support for common workplace technology issues.",
    },
    {
      icon: Wifi,
      title: "Internet & Wi-Fi Monitoring",
      description:
        "Monitoring for connectivity, outages, DNS, router, and Wi-Fi issues.",
    },
    {
      icon: Printer,
      title: "Printer & Device Support",
      description:
        "Help identifying offline printers, disconnected devices, and common office hardware problems.",
    },
    {
      icon: Ticket,
      title: "Support Ticket Creation",
      description: "Structured issue escalation with diagnostic details.",
    },
    {
      icon: FileBarChart,
      title: "Monthly Technology Reports",
      description:
        "Reports for outages, recurring issues, device health, and support activity.",
    },
    {
      icon: Settings,
      title: "Onboarding & Setup Support",
      description:
        "Help setting up dashboard access, monitoring tools, users, and alerts.",
    },
  ];

  const industryChips = [
    "Dental Clinics",
    "Law Firms",
    "Accounting Firms",
    "Medical Offices",
    "Real Estate Offices",
    "Service-Based Businesses",
  ];

  const industryIcons = [
    { icon: Stethoscope, label: "Dental" },
    { icon: Scale, label: "Law" },
    { icon: Calculator, label: "Accounting" },
    { icon: HeartPulse, label: "Medical" },
    { icon: Building2, label: "Real Estate" },
    { icon: Store, label: "Service" },
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
              Get a Quote for AI-Powered IT Support
            </h1>

            <p className="text-lg md:text-xl text-slate leading-relaxed mb-4">
              Tell us about your business, your technology environment, and the
              IT problems you want to solve. Innovexa will review your needs and
              recommend the right support approach.
            </p>

            <p className="text-sm text-slate/80 leading-relaxed mb-8">
              This quote request is designed for small and mid-sized Canadian
              businesses that need help with internet issues, Wi-Fi problems,
              printer failures, device connectivity, support tickets,
              monitoring, and monthly technology reporting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" onClick={scrollToForm}>
                Request a Quote
              </Button>
              <Button variant="outline" size="lg" to="/contact">
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Right: Quote Request Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-accent/10 to-brand-light/20 blur-3xl rounded-full transform scale-110"></div>

            {/* Quote Dashboard Card */}
            <div className="relative bg-white rounded-xl2 shadow-cardHover border border-slate/10 p-6 space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate/10">
                <div className="flex items-center gap-2">
                  <FileText size={20} className="text-brand" />
                  <h3 className="font-display font-semibold text-ink">
                    Quote Request
                  </h3>
                </div>
                <span className="text-xs bg-brand/10 text-brand px-3 py-1 rounded-full font-display font-semibold">
                  Simple & Fast
                </span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: MessageSquare,
                    label: "Business Details",
                    status: "Required",
                  },
                  {
                    icon: Settings,
                    label: "Technology Needs",
                    status: "Required",
                  },
                  { icon: Bell, label: "Current Problems", status: "Optional" },
                  {
                    icon: CheckCircle,
                    label: "Review & Submit",
                    status: "Final Step",
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-cloud rounded-lg px-4 py-3"
                  >
                    <step.icon size={18} className="text-brand" />
                    <div className="flex-1">
                      <p className="text-sm font-display font-semibold text-ink">
                        {step.label}
                      </p>
                      <p className="text-xs text-slate">{step.status}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <p className="text-xs text-slate italic">
                  Usually reviewed within 1-2 business days
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 2. QUOTE FORM */}
      <Section bg="cloud" id="quote-form">
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
                    Your quote request has been received. Our team will review
                    your details and get back to you.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="text-brand hover:text-brand-dark font-display font-semibold underline"
                >
                  Submit another request
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
                  Request Your Innovexa Quote
                </h2>
                <p className="text-slate mb-8">
                  Complete the form below so our team can understand your
                  business size, technology needs, current IT challenges, and
                  support goals.
                </p>

                <div className="space-y-8">
                  {/* Business Information */}
                  <div>
                    <h3 className="font-display font-bold text-lg text-ink mb-4">
                      Business Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                          Business Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full"
                        />
                        {submitted && errors.businessName && (
                          <p className="text-accent text-xs mt-1">
                            {errors.businessName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                          Contact Person Full Name{" "}
                          <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full"
                        />
                        {submitted && errors.contactName && (
                          <p className="text-accent text-xs mt-1">
                            {errors.contactName}
                          </p>
                        )}
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
                          Phone Number <span className="text-accent">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full"
                        />
                        {submitted && errors.phone && (
                          <p className="text-accent text-xs mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
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

                      <div>
                        <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                          Business Website
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
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
                        <option value="Accounting Firm">Accounting Firm</option>
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

                  {/* Business Size */}
                  <div>
                    <h3 className="font-display font-bold text-lg text-ink mb-4">
                      Business Size
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                          Number of Employees
                        </label>
                        <input
                          type="number"
                          name="numEmployees"
                          value={formData.numEmployees}
                          onChange={handleChange}
                          className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full"
                        />
                      </div>

                      <div>
                        <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                          Number of Office Locations
                        </label>
                        <input
                          type="number"
                          name="numLocations"
                          value={formData.numLocations}
                          onChange={handleChange}
                          className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full"
                        />
                      </div>

                      <div>
                        <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                          Approximate Number of Computers / Laptops
                        </label>
                        <input
                          type="number"
                          name="numComputers"
                          value={formData.numComputers}
                          onChange={handleChange}
                          className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full"
                        />
                      </div>

                      <div>
                        <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                          Approximate Number of Printers
                        </label>
                        <input
                          type="number"
                          name="numPrinters"
                          value={formData.numPrinters}
                          onChange={handleChange}
                          className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="font-display font-medium text-sm text-ink mb-2 block">
                        Do you currently have an internal IT team?
                      </label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="hasITTeam"
                            value="Yes"
                            checked={formData.hasITTeam === "Yes"}
                            onChange={handleChange}
                            className="w-4 h-4 text-brand focus:ring-brand"
                          />
                          <span className="text-ink">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="hasITTeam"
                            value="No"
                            checked={formData.hasITTeam === "No"}
                            onChange={handleChange}
                            className="w-4 h-4 text-brand focus:ring-brand"
                          />
                          <span className="text-ink">No</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div>
                    <h3 className="font-display font-bold text-lg text-ink mb-4">
                      Services Needed
                    </h3>
                    <div className="space-y-2">
                      {servicesOptions.map((service) => (
                        <label
                          key={service}
                          className="flex items-start gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            name="servicesNeeded"
                            value={service}
                            checked={formData.servicesNeeded.includes(service)}
                            onChange={handleChange}
                            className="w-4 h-4 text-brand focus:ring-brand mt-0.5"
                          />
                          <span className="text-ink text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Current IT Problems */}
                  <div>
                    <h3 className="font-display font-bold text-lg text-ink mb-4">
                      Current IT Problems
                    </h3>
                    <div className="space-y-2">
                      {problemsOptions.map((problem) => (
                        <label
                          key={problem}
                          className="flex items-start gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            name="currentProblems"
                            value={problem}
                            checked={formData.currentProblems.includes(problem)}
                            onChange={handleChange}
                            className="w-4 h-4 text-brand focus:ring-brand mt-0.5"
                          />
                          <span className="text-ink text-sm">{problem}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-display font-medium text-sm text-ink mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about your current IT challenges, business needs, or goals."
                      className="rounded-lg border border-slate/25 px-4 py-3 bg-white text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none w-full resize-none"
                    ></textarea>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="font-display font-medium text-sm text-ink mb-2 block">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-6">
                      {["Email", "Phone", "Video Call"].map((method) => (
                        <label
                          key={method}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={handleChange}
                            className="w-4 h-4 text-brand focus:ring-brand"
                          />
                          <span className="text-ink">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-accent hover:bg-accent-dark text-white font-display font-semibold px-8 py-4 rounded-full transition-colors"
                  >
                    Submit Quote Request
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right: Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 h-fit"
          >
            <div className="bg-white rounded-xl2 shadow-card border border-slate/10 p-6 space-y-6">
              <h3 className="font-display font-bold text-lg text-ink">
                What Happens After You Submit?
              </h3>

              <div className="space-y-4">
                {[
                  "Our team reviews your business details",
                  "We identify which Innovexa services may fit your needs",
                  "We may contact you for more technical information",
                  "You receive a recommended support approach and quote",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 font-display font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate leading-relaxed flex-1">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate/10">
                <Button
                  variant="outline"
                  size="md"
                  to="/contact"
                  className="w-full"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 3. WHAT WE CAN QUOTE FOR */}
      <Section bg="white">
        <SectionHeading
          title="What Can You Request a Quote For?"
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {quoteServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl2 p-6 shadow-card border border-slate/10"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                <service.icon size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-2">
                {service.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. BEST FIT */}
      <Section bg="cloud">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
              Built for Businesses That Need Simple First-Line IT Support
            </h2>

            <p className="text-lg text-slate leading-relaxed mb-6">
              Innovexa is best suited for businesses that depend on reliable
              technology but do not have a dedicated internal IT department. The
              platform helps reduce confusion, speed up diagnosis, and create
              clearer support information when human technical help is required.
            </p>

            {/* Industries Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {industryChips.map((industry, i) => (
                <span
                  key={i}
                  className="inline-flex items-center bg-white px-4 py-2 rounded-full text-sm font-display font-semibold text-ink border border-slate/10 shadow-sm"
                >
                  {industry}
                </span>
              ))}
            </div>

            <Button variant="secondary" size="lg" onClick={scrollToForm}>
              Submit Quote Request
            </Button>
          </motion.div>

          {/* Right: Business/Industry Icons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-3 gap-4">
              {industryIcons.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-card border border-slate/10 flex flex-col items-center gap-3 hover:shadow-cardHover transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                    <industry.icon size={24} />
                  </div>
                  <p className="text-xs font-display font-semibold text-ink text-center">
                    {industry.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Ready to Discuss Your IT Support Needs?
            </h2>

            <p className="mt-4 text-white/80 text-[15px] leading-relaxed max-w-2xl mx-auto mb-8">
              Submit your quote request or contact Innovexa Softwares to discuss
              AI-powered IT troubleshooting, network monitoring, device support,
              and reporting for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-brand/30 px-8 py-4 text-base bg-accent text-white hover:bg-accent-dark"
              >
                Submit Quote Request
              </button>

              <Button
                variant="outline"
                size="lg"
                to="/contact"
                className="border-white text-white hover:bg-white hover:text-brand"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
