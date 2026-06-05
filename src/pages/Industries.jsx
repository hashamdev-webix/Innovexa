import { motion } from "framer-motion";
import {
  Stethoscope,
  Scale,
  Calculator,
  HeartPulse,
  Building2,
  Store,
  Wifi,
  Printer,
  MessageSquare,
  FileBarChart,
  Activity,
  Bell,
  Bot,
  Check,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import CTASection from "../components/ui/CTASection";

export default function Industries() {
  const industryCards = [
    {
      icon: Stethoscope,
      name: "Dental Clinics",
      problem:
        "Dental clinics rely on stable front-desk systems, Wi-Fi, printers, connected devices, and patient scheduling tools.",
      solution:
        "Innovexa helps monitor connectivity, device availability, printer issues, and support tickets for clinic operations.",
    },
    {
      icon: Scale,
      name: "Law Firms",
      problem:
        "Law firms depend on document systems, secure communication, printers, internet, workstations, and cloud applications.",
      solution:
        "Innovexa helps identify technology disruptions faster and creates clearer escalation details for support teams.",
    },
    {
      icon: Calculator,
      name: "Accounting Firms",
      problem:
        "Accounting offices need reliable access to cloud tools, client files, printers, Wi-Fi, and workstations during busy periods.",
      solution:
        "Innovexa helps track recurring issues, monitor devices, and support faster troubleshooting during business-critical work.",
    },
    {
      icon: HeartPulse,
      name: "Medical Offices",
      problem:
        "Medical offices depend on internet, printers, front-desk devices, appointment systems, and connected office equipment.",
      solution:
        "Innovexa helps teams understand common device and network issues before they cause extended downtime.",
    },
    {
      icon: Building2,
      name: "Real Estate Offices",
      problem:
        "Real estate teams rely on phones, Wi-Fi, printers, devices, cloud tools, shared files, and office connectivity.",
      solution:
        "Innovexa helps monitor office technology and supports faster issue reporting for agents and admin teams.",
    },
    {
      icon: Store,
      name: "Small & Service-Based Businesses",
      problem:
        "Small businesses often lose time trying to solve internet, Wi-Fi, printer, and device issues without in-house IT support.",
      solution:
        "Innovexa provides AI-assisted troubleshooting, monitoring, ticket creation, alerts, and monthly technology reports.",
    },
  ];

  const commonProblems = [
    {
      icon: Wifi,
      title: "Internet & Wi-Fi Issues",
      description:
        "Helps detect unstable connections, outages, weak signal, and router related problems.",
    },
    {
      icon: Printer,
      title: "Printer & Device Problems",
      description:
        "Helps identify offline printers, disconnected devices, and basic office technology failures.",
    },
    {
      icon: MessageSquare,
      title: "Support Confusion",
      description:
        "Helps employees describe issues clearly using an AI chatbot and structured support questions.",
    },
    {
      icon: FileBarChart,
      title: "Recurring Downtime",
      description:
        "Monthly reports help business owners understand repeated issues, outages, and device problems over time.",
    },
  ];

  const keyBenefits = [
    "Faster understanding of common IT issues",
    "Better visibility into network and device health",
    "Clearer support tickets when human help is needed",
    "Monthly reports for recurring technology problems",
    "Easier first-line support for non-technical teams",
  ];

  const industryIcons = [
    { icon: Stethoscope, label: "Dental" },
    { icon: Scale, label: "Law" },
    { icon: Calculator, label: "Accounting" },
    { icon: HeartPulse, label: "Medical" },
    { icon: Building2, label: "Real Estate" },
    { icon: Store, label: "Retail" },
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
              AI IT Support for Canadian Service-Based Businesses
            </h1>

            <p className="text-lg md:text-xl text-slate leading-relaxed mb-4">
              Innovexa helps small and mid-sized businesses monitor technology,
              troubleshoot common IT issues, reduce downtime, and create support
              tickets with better diagnostic information.
            </p>

            <p className="text-sm text-slate/80 leading-relaxed mb-8">
              Built for dental clinics, law firms, accounting firms, medical
              offices, real estate offices, and other service-based businesses
              that rely on stable internet, Wi-Fi, printers, devices, and cloud
              tools every day.
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

          {/* Right: Office Tech Dashboard Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-accent/10 to-brand-light/20 blur-3xl rounded-full transform scale-110"></div>

            {/* Office Tech Dashboard Card */}
            <div className="relative bg-white rounded-xl2 shadow-cardHover border border-slate/10 p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate/10">
                <h3 className="font-display font-semibold text-ink">
                  Office Technology Status
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-brand font-display font-semibold">
                    All Systems
                  </span>
                  <Activity size={18} className="text-brand animate-pulse" />
                </div>
              </div>

              {/* Status Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-cloud rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wifi size={16} className="text-brand" />
                      <span className="text-xs font-display font-semibold text-ink">
                        Wi-Fi
                      </span>
                    </div>
                    <CheckCircle size={14} className="text-brand" />
                  </div>
                  <p className="text-xs text-slate">Strong Signal</p>
                  <div className="h-1 bg-white rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-brand"></div>
                  </div>
                </div>

                <div className="bg-cloud rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Printer size={16} className="text-brand" />
                      <span className="text-xs font-display font-semibold text-ink">
                        Printers
                      </span>
                    </div>
                    <CheckCircle size={14} className="text-brand" />
                  </div>
                  <p className="text-xs text-slate">4/4 Online</p>
                  <div className="h-1 bg-white rounded-full overflow-hidden">
                    <div className="w-full h-full bg-brand"></div>
                  </div>
                </div>

                <div className="bg-cloud rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity size={16} className="text-brand" />
                      <span className="text-xs font-display font-semibold text-ink">
                        Internet
                      </span>
                    </div>
                    <CheckCircle size={14} className="text-brand" />
                  </div>
                  <p className="text-xs text-slate">99.8% Uptime</p>
                  <div className="h-1 bg-white rounded-full overflow-hidden">
                    <div className="w-full h-full bg-brand"></div>
                  </div>
                </div>

                <div className="bg-cloud rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare size={16} className="text-brand" />
                      <span className="text-xs font-display font-semibold text-ink">
                        Devices
                      </span>
                    </div>
                    <CheckCircle size={14} className="text-brand" />
                  </div>
                  <p className="text-xs text-slate">15 Connected</p>
                  <div className="h-1 bg-white rounded-full overflow-hidden">
                    <div className="w-11/12 h-full bg-brand"></div>
                  </div>
                </div>
              </div>

              {/* AI Assistant Preview */}
              <div className="bg-gradient-to-br from-brand/5 to-brand/10 rounded-lg p-4 border border-brand/20">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-brand font-display font-semibold mb-1">
                      AI Assistant
                    </p>
                    <p className="text-xs text-ink leading-relaxed">
                      All systems operating normally. 0 active alerts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-2">
                <p className="text-xs font-display font-semibold text-slate uppercase tracking-wide">
                  Recent Activity
                </p>
                <div className="space-y-1.5">
                  {[
                    {
                      icon: CheckCircle,
                      text: "All printers online",
                      time: "2m ago",
                      status: "success",
                    },
                    {
                      icon: CheckCircle,
                      text: "Network check completed",
                      time: "15m ago",
                      status: "success",
                    },
                    {
                      icon: Bell,
                      text: "Monthly report ready",
                      time: "1d ago",
                      status: "info",
                    },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <activity.icon
                        size={12}
                        className={
                          activity.status === "success"
                            ? "text-brand"
                            : "text-accent"
                        }
                      />
                      <span className="text-ink flex-1">{activity.text}</span>
                      <span className="text-slate">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 2. INDUSTRIES OVERVIEW */}
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
              Built for Businesses Without Dedicated Internal IT Teams
            </h2>

            <p className="text-lg text-slate leading-relaxed mb-8">
              Many small and mid-sized businesses depend on technology but do
              not have full-time internal IT departments. Innovexa is designed
              to act as a first-line IT support and monitoring layer, helping
              teams understand common issues faster and escalate problems when
              needed.
            </p>

            <Button variant="secondary" size="lg" to="/get-a-quote">
              Get a Quote
            </Button>
          </motion.div>

          {/* Right: Industry Icons Grid */}
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

      {/* 3. INDUSTRY CARDS */}
      <Section bg="white">
        <SectionHeading
          title="Industries Innovexa Serves"
          subtitle="Each industry card explains the common IT problems that Innovexa can help monitor, diagnose, or escalate."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          {industryCards.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl2 p-7 shadow-card border border-slate/10 hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
            >
              {/* Industry Icon & Name */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
                  <industry.icon size={28} />
                </div>
                <h3 className="font-display font-bold text-xl text-ink">
                  {industry.name}
                </h3>
              </div>

              {/* Problem */}
              <div className="mb-4">
                <p className="text-sm font-display font-bold text-accent mb-2">
                  Problem:
                </p>
                <p className="text-sm text-slate leading-relaxed">
                  {industry.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-5">
                <p className="text-sm font-display font-bold text-brand mb-2">
                  Solution:
                </p>
                <p className="text-sm text-slate leading-relaxed">
                  {industry.solution}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-3 border-t border-slate/10">
                <Button
                  variant="ghost"
                  size="md"
                  to="/get-a-quote"
                  className="group"
                >
                  Get a Quote
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="secondary" size="lg" to="/get-a-quote">
            Get a Quote
          </Button>
        </div>
      </Section>

      {/* 4. COMMON IT PROBLEMS */}
      <Section bg="cloud">
        <SectionHeading
          title="Common IT Problems Innovexa Helps With"
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {commonProblems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl2 p-6 shadow-card border border-slate/10 hover:shadow-cardHover transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                <problem.icon size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-2">
                {problem.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" to="/contact">
            Contact Us
          </Button>
        </div>
      </Section>

      {/* 5. WHY INDUSTRIES USE INNOVEXA */}
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
              Practical IT Visibility for Everyday Business Operations
            </h2>

            <p className="text-lg text-slate leading-relaxed mb-8">
              Innovexa is not designed only for large IT departments. It is
              built for practical business environments where owners, managers,
              and employees need simple answers when technology stops working.
            </p>

            {/* Key Benefits Checklist */}
            <div className="mb-8">
              <p className="text-lg font-display font-bold text-ink mb-4">
                Key Benefits:
              </p>
              <div className="space-y-3">
                {keyBenefits.map((benefit, index) => (
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
                    <span className="text-ink leading-relaxed">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <Button variant="secondary" size="lg" to="/get-a-quote">
              Get a Quote
            </Button>
          </motion.div>

          {/* Right: Monthly Report Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl2 shadow-cardHover border border-slate/10 p-6 space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate/10">
                <div className="flex items-center gap-2">
                  <FileBarChart size={20} className="text-brand" />
                  <h3 className="font-display font-semibold text-ink">
                    Monthly Technology Report
                  </h3>
                </div>
                <span className="text-xs text-slate">December 2026</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Network Uptime", value: "99.8%", trend: "up" },
                  {
                    label: "Avg. Response Time",
                    value: "12 min",
                    trend: "down",
                  },
                  { label: "Issues Resolved", value: "47", trend: "up" },
                  { label: "Tickets Created", value: "8", trend: "down" },
                ].map((stat, i) => (
                  <div key={i} className="bg-cloud rounded-lg p-4 space-y-2">
                    <p className="text-xs text-slate">{stat.label}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-display font-bold text-ink">
                        {stat.value}
                      </p>
                      <TrendingUp
                        size={16}
                        className={`${stat.trend === "up" ? "text-brand" : "text-accent rotate-180"}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Issue Breakdown */}
              <div className="space-y-3">
                <p className="text-xs font-display font-semibold text-slate uppercase tracking-wide">
                  Top Issues
                </p>
                {[
                  { issue: "Wi-Fi Connectivity", count: 12 },
                  { issue: "Printer Offline", count: 8 },
                  { issue: "Device Connection", count: 6 },
                ].map((item, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-ink">{item.issue}</span>
                      <span className="font-display font-semibold text-brand">
                        {item.count}
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand rounded-full"
                        style={{ width: `${(item.count / 12) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Badge */}
              <div className="bg-brand/5 border border-brand/20 rounded-lg p-3 flex items-center gap-3">
                <CheckCircle size={20} className="text-brand flex-shrink-0" />
                <p className="text-sm text-ink">
                  <span className="font-display font-semibold">
                    Overall Status:
                  </span>{" "}
                  Technology health improved by 15% this month
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 6. FINAL CTA */}
      <Section bg="white">
        <CTASection
          title="Need Reliable IT Support for Your Business?"
          subtitle="Contact Innovexa Softwares to discuss AI-powered IT troubleshooting, network monitoring, device diagnostics, support ticket creation, and monthly reports for your industry."
          primary={{ label: "Get a Quote", to: "/get-a-quote" }}
          secondary={{ label: "Contact Us", to: "/contact" }}
        />
      </Section>
    </>
  );
}
