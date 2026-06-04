import { motion } from "framer-motion";
import {
  Bot,
  Wifi,
  Printer,
  Ticket,
  FileBarChart,
  Settings,
  MessageSquare,
  Bell,
  Activity,
  AlertCircle,
  Zap,
  Clock,
  Eye,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import CTASection from "../components/ui/CTASection";
import ProcessFlow from "../components/ui/ProcessFlow";

export default function Services() {
  const mainServices = [
    {
      icon: Bot,
      title: "AI-Assisted IT Troubleshooting",
      description:
        "Plain-language chatbot support for common internet, Wi-Fi, printer, device, and workplace technology issues.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: Wifi,
      title: "Internet & Wi-Fi Monitoring",
      description:
        "Helps monitor outages, weak connectivity, unstable internet, DNS, router issues, and Wi-Fi reliability problems.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: Printer,
      title: "Printer & Device Troubleshooting",
      description:
        "Helps identify offline printers, disconnected devices, failed connections, and common office device problems.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: Ticket,
      title: "Support Ticket Creation",
      description:
        "Creates structured support tickets with issue details, diagnostic information, and recommended escalation notes.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: FileBarChart,
      title: "Monthly Technology Reports",
      description:
        "Provides reports showing recurring issues, outages, support history, device problems, and overall technology health.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
    {
      icon: Settings,
      title: "Onboarding & Setup Support",
      description:
        "Helps new customers set up the dashboard, monitoring tools, users, devices, alerts, and basic support workflows.",
      cta: { label: "Get a Quote", to: "/get-a-quote" },
    },
  ];

  const serviceBenefits = [
    {
      icon: Zap,
      title: "Faster Troubleshooting",
      description: "Reduce guessing and identify common problems faster.",
    },
    {
      icon: Clock,
      title: "Less Downtime",
      description: "Help teams respond quickly when technology stops working.",
    },
    {
      icon: Eye,
      title: "Better Visibility",
      description: "Understand recurring network, printer, and device issues.",
    },
    {
      icon: Send,
      title: "Easier Escalation",
      description: "Create support tickets with useful diagnostic information.",
    },
  ];

  const serviceFlowSteps = [
    "Business reports an issue",
    "AI chatbot collects details",
    "Platform checks approved diagnostic data",
    "System suggests likely cause and next steps",
    "Issue is resolved or ticket is created for human support",
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
              AI-Powered IT Support Services for Canadian Businesses
            </h1>

            <p className="text-lg md:text-xl text-slate leading-relaxed mb-4">
              Innovexa helps small and mid-sized businesses troubleshoot common
              technology problems including internet outages, Wi-Fi issues,
              printer failures, device connectivity problems, and recurring IT
              support requests.
            </p>

            <p className="text-sm text-slate/80 leading-relaxed mb-8">
              Our services combine AI guidance, network monitoring, diagnostic
              data, support ticket creation, onboarding support, and monthly
              technology reporting for businesses without dedicated IT teams.
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

          {/* Right: IT Support Mockup */}
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
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate/10">
                <h3 className="font-display font-semibold text-ink">
                  IT Support Assistant
                </h3>
                <div className="flex items-center gap-2">
                  <Bell size={18} className="text-accent" />
                  <span className="inline-flex items-center gap-1 text-xs text-accent font-display font-semibold">
                    2 Active
                  </span>
                </div>
              </div>

              {/* AI Chat Conversation */}
              <div className="space-y-3">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-cloud rounded-xl rounded-br-sm px-4 py-2 max-w-[80%]">
                    <p className="text-sm text-ink">
                      The printer in Room 3 won't print
                    </p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-gradient-to-br from-brand/10 to-brand/5 rounded-xl rounded-tl-sm px-4 py-3 flex-1 border border-brand/20">
                    <p className="text-sm text-ink leading-relaxed">
                      I'll help diagnose the printer issue. Checking network
                      status...
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Indicators */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-cloud rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wifi size={14} className="text-brand" />
                      <span className="text-xs font-display font-semibold text-ink">
                        Wi-Fi
                      </span>
                    </div>
                    <CheckCircle size={14} className="text-brand" />
                  </div>
                  <p className="text-xs text-slate">Connected</p>
                </div>

                <div className="bg-cloud rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Printer size={14} className="text-accent" />
                      <span className="text-xs font-display font-semibold text-ink">
                        Printer
                      </span>
                    </div>
                    <AlertCircle size={14} className="text-accent" />
                  </div>
                  <p className="text-xs text-slate">Offline</p>
                </div>
              </div>

              {/* Alert Banner */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 flex items-start gap-3">
                <AlertCircle
                  size={16}
                  className="text-accent flex-shrink-0 mt-0.5"
                />
                <div className="flex-1">
                  <p className="text-xs font-display font-semibold text-accent">
                    Issue Detected
                  </p>
                  <p className="text-xs text-slate mt-1">
                    Printer appears offline. Checking network connection and
                    device status...
                  </p>
                </div>
              </div>

              {/* Action Suggestions */}
              <div className="space-y-2">
                <p className="text-xs font-display font-semibold text-slate uppercase tracking-wide">
                  Suggested Actions
                </p>
                <div className="space-y-1.5">
                  {[
                    "Check printer power",
                    "Verify network cable",
                    "Restart printer",
                  ].map((action, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                      <span className="text-ink">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 2. SERVICES OVERVIEW */}
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
              Practical IT Support for Everyday Business Problems
            </h2>

            <p className="text-lg text-slate leading-relaxed mb-8">
              Innovexa is designed to act as a first-line IT support layer for
              small and mid-sized businesses. The platform helps employees and
              managers understand what may be causing a technology issue, follow
              guided troubleshooting steps, and escalate unresolved problems
              with better diagnostic information.
            </p>

            <Button variant="secondary" size="lg" to="/get-a-quote">
              Get a Quote
            </Button>
          </motion.div>

          {/* Right: Guided Troubleshooting Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl2 shadow-card border border-slate/10 p-8 space-y-6">
              <div className="text-center">
                <h3 className="font-display font-bold text-lg text-ink mb-2">
                  Guided Troubleshooting
                </h3>
                <p className="text-sm text-slate">Step-by-step support</p>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    label: "Describe Issue",
                    icon: MessageSquare,
                    status: "complete",
                  },
                  {
                    step: 2,
                    label: "System Diagnosis",
                    icon: Activity,
                    status: "complete",
                  },
                  {
                    step: 3,
                    label: "Follow Guidance",
                    icon: Bot,
                    status: "active",
                  },
                  {
                    step: 4,
                    label: "Resolution",
                    icon: CheckCircle,
                    status: "pending",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        item.status === "complete"
                          ? "bg-brand text-white"
                          : item.status === "active"
                            ? "bg-brand/20 text-brand"
                            : "bg-slate/10 text-slate"
                      }`}
                    >
                      {item.status === "complete" ? (
                        <CheckCircle size={20} />
                      ) : (
                        <item.icon size={20} />
                      )}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-display font-semibold text-sm ${
                          item.status === "pending" ? "text-slate" : "text-ink"
                        }`}
                      >
                        Step {item.step}: {item.label}
                      </p>
                    </div>
                    {item.status !== "pending" && i < 3 && (
                      <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                        <ArrowRight size={14} className="text-brand" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 3. MAIN SERVICES */}
      <Section bg="white">
        <SectionHeading
          title="Our IT Support Services"
          subtitle="Each service is designed to reduce downtime, improve visibility, and make technology support easier for non-technical business teams."
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {mainServices.map((service, index) => (
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

        <div className="flex justify-center mt-12">
          <Button variant="secondary" size="lg" to="/get-a-quote">
            Get a Quote
          </Button>
        </div>
      </Section>

      {/* 4. SERVICE FLOW */}
      <Section bg="cloud">
        <SectionHeading title="How Our Services Work" align="center" />

        <div className="mt-12">
          <ProcessFlow steps={serviceFlowSteps} />
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" to="/contact">
            Contact Us
          </Button>
        </div>
      </Section>

      {/* 5. SERVICE BENEFITS */}
      <Section bg="white">
        <SectionHeading
          title="Why Businesses Use Innovexa Services"
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {serviceBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl2 p-6 shadow-card border border-slate/10 text-center hover:shadow-cardHover transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-brand/10 text-brand flex items-center justify-center mx-auto mb-4">
                <benefit.icon size={28} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 6. HUMAN SUPPORT ESCALATION */}
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
              AI Support with Human Escalation When Needed
            </h2>

            <p className="text-lg text-slate leading-relaxed mb-8">
              Innovexa is not positioned as a replacement for professional IT
              technicians. The platform helps reduce confusion, collect useful
              details, and provide first-line troubleshooting. When an issue
              cannot be resolved, it can be escalated through a support ticket
              with clearer information for human technical support.
            </p>

            <Button variant="outline" size="lg" to="/contact">
              Contact Us
            </Button>
          </motion.div>

          {/* Right: Support Ticket Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl2 shadow-cardHover border border-slate/10 p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate/10">
                <div className="flex items-center gap-2">
                  <Ticket size={20} className="text-brand" />
                  <h3 className="font-display font-semibold text-ink">
                    Support Ticket
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-display font-semibold px-3 py-1.5 rounded-full">
                  <Send size={12} />
                  Ready to Send
                </span>
              </div>

              {/* Ticket Details */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-display font-semibold text-slate uppercase tracking-wide">
                    Issue Summary
                  </label>
                  <p className="text-sm text-ink mt-1 bg-cloud rounded-lg px-3 py-2">
                    Printer in Room 3 offline - network connectivity issue
                    detected
                  </p>
                </div>

                <div>
                  <label className="text-xs font-display font-semibold text-slate uppercase tracking-wide">
                    Diagnostic Data
                  </label>
                  <div className="mt-2 space-y-1.5">
                    {[
                      "Device: HP LaserJet Pro (IP: 192.168.1.45)",
                      "Network: Not responding to ping",
                      "Last seen: 2 hours ago",
                      "Cable status: Unknown",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <span className="w-1 h-1 rounded-full bg-slate mt-1.5"></span>
                        <span className="text-slate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-display font-semibold text-slate uppercase tracking-wide">
                    Steps Attempted
                  </label>
                  <div className="mt-2 space-y-1.5">
                    {[
                      "Verified Wi-Fi connectivity",
                      "Attempted printer restart",
                      "Checked network cable",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <CheckCircle size={12} className="text-brand" />
                        <span className="text-slate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-display font-semibold text-slate uppercase tracking-wide">
                    Recommended Action
                  </label>
                  <p className="text-sm text-ink mt-1 bg-brand/5 border border-brand/20 rounded-lg px-3 py-2">
                    On-site inspection needed - possible physical cable failure
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button className="w-full bg-brand hover:bg-brand-dark text-white font-display font-semibold px-4 py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <Send size={16} />
                  Send to IT Support Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 7. FINAL CTA */}
      <Section bg="white">
        <CTASection
          title="Need Smarter IT Support for Your Business?"
          subtitle="Contact Innovexa Softwares to discuss AI-assisted troubleshooting, network monitoring, printer support, device diagnostics, support ticket creation, and monthly reporting for your business."
          primary={{ label: "Get a Quote", to: "/get-a-quote" }}
          secondary={{ label: "Contact Us", to: "/contact" }}
        />
      </Section>
    </>
  );
}
