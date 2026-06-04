import { motion } from "framer-motion";
import {
  Bot,
  LayoutDashboard,
  Cpu,
  Wifi,
  Printer,
  Ticket,
  Bell,
  FileBarChart,
  MessageSquare,
  Activity,
  ShieldCheck,
  Check,
  Shield,
  Lock,
} from "lucide-react";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import CTASection from "../components/ui/CTASection";
import ProcessFlow from "../components/ui/ProcessFlow";

export default function Platform() {
  const platformModules = [
    {
      icon: Bot,
      title: "AI Troubleshooting Chatbot",
      description:
        "Plain-language AI support for internet, Wi-Fi, printer, device, and common workplace technology issues.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: LayoutDashboard,
      title: "SaaS Monitoring Dashboard",
      description:
        "Central dashboard showing network status, device health, alerts, tickets, and reports.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: Cpu,
      title: "Local Monitoring Agent",
      description:
        "Lightweight tool that collects approved diagnostic signals from the customer's environment.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: Wifi,
      title: "Internet & Wi-Fi Monitoring",
      description:
        "Helps detect outages, weak connectivity, DNS issues, router issues, and recurring Wi-Fi problems.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: Printer,
      title: "Printer & Device Diagnostics",
      description:
        "Helps identify offline printers, disconnected devices, and failed network connections.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: Ticket,
      title: "Support Ticket Creation",
      description:
        "Creates support tickets with diagnostic details when human help is needed.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: Bell,
      title: "Alerts & Notifications",
      description:
        "Sends alerts when monitored network, printer, or device issues are detected.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: FileBarChart,
      title: "Monthly Technology Reports",
      description:
        "Summarizes outages, recurring issues, device problems, and support activity.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
  ];

  const securityFeatures = [
    "Secure login",
    "Role-based access",
    "Encrypted communication",
    "Customer-approved integrations",
    "Activity tracking",
  ];

  const processSteps = [
    "IT issue occurs",
    "Employee asks AI chatbot",
    "System checks approved network/device data",
    "AI explains likely cause",
    "Issue is resolved or escalated through a support ticket",
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
              AI-Powered IT Support Platform for Canadian Businesses
            </h1>

            <p className="text-lg md:text-xl text-slate leading-relaxed mb-4">
              Innovexa helps small and mid-sized businesses diagnose internet,
              Wi-Fi, printer, device, and common IT issues through an AI
              chatbot, monitoring dashboard, support tickets, alerts, and
              reports.
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

          {/* Right: Detailed Dashboard Mockup */}
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
                <h3 className="font-display font-semibold text-ink flex items-center gap-2">
                  <LayoutDashboard size={20} className="text-brand" />
                  IT Support Dashboard
                </h3>
                <div className="flex items-center gap-2">
                  <Bell size={18} className="text-accent" />
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                </div>
              </div>

              {/* AI Chat Widget */}
              <div className="bg-gradient-to-br from-brand/5 to-brand/10 rounded-xl p-4 space-y-3 border border-brand/20">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-brand font-display font-semibold">
                      AI Assistant
                    </p>
                    <p className="text-sm text-ink mt-1 leading-snug">
                      The printer in Room 3 appears offline. Checking network
                      connection...
                    </p>
                  </div>
                </div>
              </div>

              {/* Network Status Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-cloud rounded-lg p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Wifi size={16} className="text-brand" />
                    <span className="text-xs font-display font-semibold text-ink">
                      Wi-Fi Status
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 h-1.5 bg-white rounded-full overflow-hidden mr-2">
                      <div className="w-4/5 h-full bg-brand"></div>
                    </div>
                    <span className="text-xs text-slate font-semibold">
                      Good
                    </span>
                  </div>
                  <p className="text-xs text-slate">87% signal</p>
                </div>

                <div className="bg-cloud rounded-lg p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-brand" />
                    <span className="text-xs font-display font-semibold text-ink">
                      Network
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 h-1.5 bg-white rounded-full overflow-hidden mr-2">
                      <div className="w-full h-full bg-brand"></div>
                    </div>
                    <span className="text-xs text-slate font-semibold">
                      Online
                    </span>
                  </div>
                  <p className="text-xs text-slate">99.8% uptime</p>
                </div>
              </div>

              {/* Alerts */}
              <div className="space-y-2">
                <p className="text-xs font-display font-semibold text-slate uppercase tracking-wide">
                  Active Alerts
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-display font-semibold px-3 py-1.5 rounded-full">
                    <Printer size={12} />
                    Printer Offline
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-brand/10 text-brand text-xs font-display font-semibold px-3 py-1.5 rounded-full">
                    <Check size={12} />8 Devices OK
                  </span>
                </div>
              </div>

              {/* Devices & Ticket Preview */}
              <div className="grid grid-cols-2 gap-3">
                {/* Device List */}
                <div className="bg-cloud rounded-lg p-3 space-y-2">
                  <p className="text-xs font-display font-semibold text-ink">
                    Devices
                  </p>
                  <div className="space-y-1.5">
                    {["Printer-01", "Router Main", "AP Office"].map(
                      (device, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-accent" : "bg-brand"}`}
                          ></span>
                          <span className="text-ink text-xs">{device}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Ticket Preview */}
                <div className="bg-cloud rounded-lg p-3 space-y-2">
                  <div className="flex items-center gap-1.5">
                    <Ticket size={14} className="text-brand" />
                    <p className="text-xs font-display font-semibold text-ink">
                      Ticket #147
                    </p>
                  </div>
                  <p className="text-xs text-slate leading-snug">
                    Printer offline in Room 3
                  </p>
                  <span className="inline-block text-xs bg-brand/10 text-brand px-2 py-0.5 rounded">
                    Open
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 2. PLATFORM OVERVIEW */}
      <Section bg="cloud">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-brand to-brand-dark rounded-xl2 shadow-cardHover p-8 space-y-6">
              <div className="flex items-center justify-between text-white">
                <h3 className="font-display font-bold text-xl">
                  Monitoring Overview
                </h3>
                <Activity size={24} className="animate-pulse" />
              </div>

              {/* Status Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Wifi,
                    label: "Wi-Fi",
                    status: "Excellent",
                    color: "bg-white",
                  },
                  {
                    icon: Activity,
                    label: "Internet",
                    status: "Online",
                    color: "bg-white",
                  },
                  {
                    icon: Printer,
                    label: "Printers",
                    status: "3/4 Online",
                    color: "bg-accent",
                  },
                  {
                    icon: Cpu,
                    label: "Devices",
                    status: "12 Active",
                    color: "bg-white",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 space-y-2"
                  >
                    <item.icon size={20} className="text-white/90" />
                    <p className="text-xs text-white/70">{item.label}</p>
                    <p className="text-sm font-display font-semibold text-white">
                      {item.status}
                    </p>
                  </div>
                ))}
              </div>

              {/* Activity Timeline */}
              <div className="space-y-3 pt-4 border-t border-white/20">
                <p className="text-xs text-white/70 uppercase tracking-wide font-display font-semibold">
                  Recent Activity
                </p>
                {[
                  {
                    time: "2m ago",
                    event: "Printer-01 reconnected",
                    type: "success",
                  },
                  {
                    time: "15m ago",
                    event: "Wi-Fi signal improved",
                    type: "success",
                  },
                  {
                    time: "1h ago",
                    event: "Ticket #147 created",
                    type: "info",
                  },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-1.5 ${activity.type === "success" ? "bg-white" : "bg-accent"}`}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm text-white leading-snug">
                        {activity.event}
                      </p>
                      <p className="text-xs text-white/60">{activity.time}</p>
                    </div>
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
              One Platform for First-Line IT Troubleshooting
            </h2>

            <p className="text-lg text-slate leading-relaxed mb-4">
              Innovexa is a cloud-based SaaS platform that combines AI-assisted
              troubleshooting, approved diagnostic data, network monitoring,
              support ticket creation, and monthly reporting in one simple
              system.
            </p>

            <p className="text-lg text-slate leading-relaxed mb-8">
              The platform is designed to reduce confusion, speed up diagnosis,
              and help businesses resolve or escalate IT issues faster.
            </p>

            <Button variant="secondary" size="lg" to="/get-a-quote">
              Get a Quote
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* 3. PLATFORM MODULES */}
      <Section bg="white">
        <SectionHeading
          title="What the Innovexa Platform Includes"
          subtitle="Each platform module helps businesses understand and manage common IT problems without needing a full internal IT department."
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {platformModules.map((module, index) => (
            <Card
              key={index}
              icon={module.icon}
              title={module.title}
              cta={module.cta}
            >
              {module.description}
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="secondary" size="lg" to="/get-a-quote">
            Get a Quote
          </Button>
        </div>
      </Section>

      {/* 4. HOW IT WORKS */}
      <Section bg="cloud">
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

      {/* 5. SECURITY & CONTROL */}
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
              Built for Secure and Controlled IT Visibility
            </h2>

            <p className="text-lg text-slate leading-relaxed mb-8">
              Innovexa is designed for troubleshooting and monitoring approved
              technical signals. The platform should focus on secure login,
              role-based access, encrypted communication, customer-approved
              integrations, and activity tracking.
            </p>

            {/* Security Features Checklist */}
            <div className="space-y-4 mb-8">
              {securityFeatures.map((feature, index) => (
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
                  <span className="text-ink leading-relaxed font-display font-semibold">
                    {feature}
                  </span>
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
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand/20 blur-xl rounded-full"></div>
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center">
                      <ShieldCheck size={48} className="text-white" />
                    </div>
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

      {/* 6. FINAL CTA */}
      <Section bg="white">
        <CTASection
          title="Ready to Explore the Innovexa Platform?"
          subtitle="Contact Innovexa Softwares to discuss AI-powered IT troubleshooting, network monitoring, device diagnostics, support tickets, and reporting for your business."
          primary={{ label: "Get a Quote", to: "/get-a-quote" }}
          secondary={{ label: "Contact Us", to: "/contact" }}
        />
      </Section>
    </>
  );
}
