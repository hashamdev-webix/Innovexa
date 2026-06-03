import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  Activity,
  Ticket,
  FileBarChart,
  Wifi,
  Printer,
  Settings,
  MessageSquare,
  Bell,
  Stethoscope,
  Scale,
  Calculator,
  HeartPulse,
  Building2,
  Store,
  ShieldCheck,
  Check,
  Lock,
  Shield,
} from "lucide-react";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import CTASection from "../components/ui/CTASection";
import ProcessFlow from "../components/ui/ProcessFlow";

export default function Home() {
  const quickValueCards = [
    {
      icon: Bot,
      title: "AI Troubleshooting",
      description: "Plain-language guidance for common IT issues.",
    },
    {
      icon: Activity,
      title: "Network Monitoring",
      description: "Monitor internet, Wi-Fi, DNS, and device availability.",
    },
    {
      icon: Ticket,
      title: "Ticket Creation",
      description: "Create support tickets with diagnostic details.",
    },
    {
      icon: FileBarChart,
      title: "Monthly Reports",
      description: "Track outages, recurring issues, and technology health.",
    },
  ];

  const services = [
    {
      icon: Bot,
      title: "AI-Assisted IT Troubleshooting",
      description:
        "Get plain-language guidance for common IT issues through our AI chatbot.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: Wifi,
      title: "Internet & Wi-Fi Monitoring",
      description:
        "Monitor internet connectivity, Wi-Fi networks, and DNS availability.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: Printer,
      title: "Printer & Device Support",
      description:
        "Troubleshoot printer issues and monitor device connectivity.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: Ticket,
      title: "Support Ticket Creation",
      description:
        "Create detailed support tickets with diagnostic information.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: FileBarChart,
      title: "Monthly Technology Reports",
      description:
        "Track outages, recurring issues, and overall technology health.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: Settings,
      title: "Onboarding & Setup Support",
      description:
        "Get help setting up and integrating Innovexa into your business.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
  ];

  const industries = [
    { icon: Stethoscope, name: "Dental Clinics" },
    { icon: Scale, name: "Law Firms" },
    { icon: Calculator, name: "Accounting Firms" },
    { icon: HeartPulse, name: "Medical Offices" },
    { icon: Building2, name: "Real Estate Offices" },
    { icon: Store, name: "Small Businesses" },
  ];

  const trustPoints = [
    "Approved diagnostic data only",
    "Secure login and role-based access",
    "Encrypted communication",
    "Customer-approved integrations",
    "Activity tracking and audit logs",
    "Business-friendly data policies",
  ];

  const processSteps = [
    "IT issue occurs",
    "Employee asks AI chatbot",
    "System checks network/device data",
    "AI explains likely cause",
    "Issue is resolved or escalated",
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
              AI-Powered IT Support for Small Businesses in Canada
            </h1>

            <p className="text-lg md:text-xl text-slate leading-relaxed mb-4">
              Innovexa helps small and mid-sized businesses diagnose internet,
              Wi-Fi, printer, device, and common IT issues faster through an AI
              chatbot, SaaS dashboard, monitoring tools, and support guidance.
            </p>

            <p className="text-sm text-slate/80 leading-relaxed mb-8">
              Built for dental clinics, law firms, accounting firms, medical
              offices, real estate offices, and service-based businesses without
              dedicated internal IT teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" to="/get-a-quote">
                Get a Quote
              </Button>
              <Button variant="outline" size="lg" to="/contact">
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-accent/10 to-brand-light/20 blur-3xl rounded-full transform scale-110"></div>

            {/* Dashboard Card */}
            <div className="relative bg-white rounded-xl2 shadow-cardHover border border-slate/10 p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate/10">
                <h3 className="font-display font-semibold text-ink">
                  IT Dashboard
                </h3>
                <div className="flex items-center gap-2">
                  <Bell size={18} className="text-accent" />
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                </div>
              </div>

              {/* AI Chat Widget */}
              <div className="bg-cloud rounded-xl p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={16} className="text-brand" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate">AI Assistant</p>
                    <p className="text-sm text-ink mt-1">
                      How can I help with IT issues today?
                    </p>
                  </div>
                </div>
              </div>

              {/* Network Status */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-cloud rounded-lg p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Wifi size={16} className="text-brand" />
                    <span className="text-xs font-display font-semibold text-ink">
                      Wi-Fi
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-brand"></div>
                    </div>
                    <span className="text-xs text-slate">Good</span>
                  </div>
                </div>

                <div className="bg-cloud rounded-lg p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-brand" />
                    <span className="text-xs font-display font-semibold text-ink">
                      Network
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white rounded-full overflow-hidden">
                      <div className="w-full h-full bg-brand"></div>
                    </div>
                    <span className="text-xs text-slate">Online</span>
                  </div>
                </div>
              </div>

              {/* Alerts */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-display font-semibold px-3 py-1.5 rounded-full">
                  <Bell size={12} />
                  Printer Alert
                </span>
                <span className="inline-flex items-center gap-1.5 bg-brand/10 text-brand text-xs font-display font-semibold px-3 py-1.5 rounded-full">
                  <Check size={12} />3 Devices Online
                </span>
              </div>

              {/* Device List */}
              <div className="space-y-2">
                <p className="text-xs font-display font-semibold text-slate uppercase tracking-wide">
                  Connected Devices
                </p>
                <div className="space-y-1.5">
                  {["Office Printer", "Router - Main", "Access Point"].map(
                    (device, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <Printer size={12} className="text-slate" />
                        <span className="text-ink">{device}</span>
                        <span className="ml-auto w-2 h-2 bg-brand rounded-full"></span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 2. QUICK VALUE CARDS */}
      <Section bg="cloud">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickValueCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl2 p-6 shadow-card border border-slate/10 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-brand/10 text-brand flex items-center justify-center mx-auto mb-4">
                <card.icon size={28} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-2">
                {card.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3. PLATFORM OVERVIEW */}
      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-brand-dark to-brand rounded-xl2 shadow-cardHover p-8 space-y-6">
              <div className="flex items-center justify-between text-white">
                <h3 className="font-display font-bold text-xl">
                  Monitoring Panel
                </h3>
                <Activity size={24} />
              </div>

              {/* Status Bars */}
              <div className="space-y-4">
                {[
                  { label: "Internet Uptime", value: 99, color: "bg-white" },
                  {
                    label: "Wi-Fi Performance",
                    value: 87,
                    color: "bg-white/90",
                  },
                  {
                    label: "Device Availability",
                    value: 95,
                    color: "bg-white/80",
                  },
                  { label: "Printer Status", value: 78, color: "bg-accent" },
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between text-white/90 text-sm">
                      <span>{stat.label}</span>
                      <span className="font-display font-semibold">
                        {stat.value}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${stat.color} rounded-full transition-all duration-500`}
                        style={{ width: `${stat.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                {[
                  { label: "Alerts", value: "2" },
                  { label: "Tickets", value: "5" },
                  { label: "Devices", value: "12" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-display font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
              One Platform for IT Troubleshooting and Monitoring
            </h2>

            <p className="text-lg text-slate leading-relaxed mb-8">
              Innovexa will operate as a secure cloud-based SaaS platform that
              combines AI-assisted troubleshooting, approved diagnostic data,
              alerts, reporting, and support ticket creation in one simple
              dashboard.
            </p>

            <Button variant="secondary" size="lg" to="/get-a-quote">
              Get a Quote
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* 4. SERVICES */}
      <Section bg="cloud">
        <SectionHeading
          title="What Innovexa Helps Businesses Manage"
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              cta={service.cta}
            >
              {service.description}
            </Card>
          ))}
        </div>
      </Section>

      {/* 5. HOW IT WORKS */}
      <Section bg="white">
        <SectionHeading title="How Innovexa Works" align="center" />

        <div className="mt-12">
          <ProcessFlow steps={processSteps} />
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" to="/contact">
            Contact Us
          </Button>
        </div>
      </Section>

      {/* 6. INDUSTRIES */}
      <Section bg="cloud">
        <SectionHeading
          title="Built for Canadian Service-Based Businesses"
          align="center"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-card border border-slate/10 flex items-center gap-4 hover:shadow-cardHover transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
                <industry.icon size={24} />
              </div>
              <h3 className="font-display font-semibold text-ink">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="secondary" size="lg" to="/get-a-quote">
            Get a Quote
          </Button>
        </div>
      </Section>

      {/* 7. SECURITY / TRUST */}
      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
              Secure, Controlled, and Business-Friendly
            </h2>

            <p className="text-lg text-slate leading-relaxed mb-8">
              Innovexa will focus on approved diagnostic data, secure login,
              role-based access, encrypted communication, customer-approved
              integrations, and activity tracking.
            </p>

            {/* Trust Points Checklist */}
            <div className="space-y-4 mb-8">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-brand" />
                  </div>
                  <span className="text-ink leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="outline" size="lg" to="/contact">
              Contact Us
            </Button>
          </motion.div>

          {/* Right: Security Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-accent/5 blur-2xl rounded-full"></div>

              {/* Security Card */}
              <div className="relative bg-white rounded-xl2 shadow-cardHover border border-slate/10 p-8">
                {/* Center Shield */}
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand to-brand-light flex items-center justify-center">
                    <ShieldCheck size={48} className="text-white" />
                  </div>
                </div>

                {/* Security Features Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Lock, label: "Encrypted" },
                    { icon: ShieldCheck, label: "Verified" },
                    { icon: Shield, label: "Protected" },
                    { icon: Check, label: "Compliant" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-cloud rounded-xl p-4 text-center space-y-2"
                    >
                      <div className="flex justify-center">
                        <item.icon size={24} className="text-brand" />
                      </div>
                      <p className="text-sm font-display font-semibold text-ink">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Security Badge */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-2 rounded-full">
                    <ShieldCheck size={16} />
                    <span className="text-sm font-display font-semibold">
                      Enterprise-Grade Security
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 8. FINAL CTA */}
      <Section bg="white">
        <CTASection
          title="Ready to Reduce IT Downtime?"
          subtitle="Contact Innovexa Softwares to discuss AI-powered IT support, network monitoring, device troubleshooting, and reporting for your business."
          primary={{ label: "Get a Quote", to: "/get-a-quote" }}
          secondary={{ label: "Contact Us", to: "/contact" }}
        />
      </Section>
    </>
  );
}
