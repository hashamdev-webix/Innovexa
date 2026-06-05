import { motion } from "framer-motion";
import {
  Target,
  Eye,
  User,
  ShieldCheck,
  Users,
  Sparkles,
  Lock,
  TrendingUp,
  Bot,
  Activity,
  Wifi,
  MessageSquare,
  LayoutDashboard,
  CheckCircle,
  Globe,
  Code,
} from "lucide-react";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import CTASection from "../components/ui/CTASection";
import ProcessFlow from "../components/ui/ProcessFlow";

export default function About() {
  const ourValues = [
    {
      icon: ShieldCheck,
      title: "Reliability",
      description:
        "Helping businesses reduce downtime and operate with more confidence.",
    },
    {
      icon: Users,
      title: "Accessibility",
      description:
        "Making first-line IT support more affordable and easier to use for small and mid-sized businesses.",
    },
    {
      icon: Sparkles,
      title: "Simplicity",
      description: "Explaining technical problems in plain business language.",
    },
    {
      icon: Lock,
      title: "Security & Control",
      description:
        "Using approved diagnostic data, secure access, and controlled monitoring practices.",
    },
    {
      icon: TrendingUp,
      title: "Canadian Growth",
      description:
        "Building a scalable Canadian technology company that supports productivity, innovation, and skilled job creation.",
    },
  ];

  const howWeWorkSteps = [
    "IT issue occurs",
    "Employee asks AI chatbot",
    "System checks network/device data",
    "AI explains likely cause",
    "Issue is resolved or escalated",
    "Business saves time and reduces downtime",
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
              About Innovexa Softwares
            </h1>

            <p className="text-lg md:text-xl text-slate leading-relaxed mb-4">
              Innovexa Softwares is a Canadian technology company developing an
              AI-powered IT support and network troubleshooting SaaS platform
              for small and mid-sized businesses.
            </p>

            <p className="text-sm text-slate/80 leading-relaxed mb-8">
              The company is designed to help businesses diagnose common IT
              issues faster, reduce downtime, improve workplace productivity,
              and make technology support more accessible for organizations
              without dedicated internal IT teams.
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

          {/* Right: Workspace/SaaS Dashboard Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-accent/10 to-brand-light/20 blur-3xl rounded-full transform scale-110"></div>

            {/* Professional Workspace Dashboard */}
            <div className="relative bg-white rounded-xl2 shadow-cardHover border border-slate/10 p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate/10">
                <div className="flex items-center gap-2">
                  <LayoutDashboard size={20} className="text-brand" />
                  <h3 className="font-display font-semibold text-ink">
                    Innovexa Platform
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
                  <span className="text-xs text-brand font-display font-semibold">
                    Live
                  </span>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Bot, label: "AI Assistant", status: "Active" },
                  { icon: Activity, label: "Monitoring", status: "Running" },
                  { icon: Wifi, label: "Network Check", status: "Online" },
                  {
                    icon: MessageSquare,
                    label: "Support Chat",
                    status: "Ready",
                  },
                ].map((feature, i) => (
                  <div key={i} className="bg-cloud rounded-lg p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <feature.icon size={16} className="text-brand" />
                      <span className="text-xs font-display font-semibold text-ink">
                        {feature.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={12} className="text-brand" />
                      <span className="text-xs text-slate">
                        {feature.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Interaction Preview */}
              <div className="bg-gradient-to-br from-brand/5 to-brand/10 rounded-xl p-4 border border-brand/20 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-brand font-display font-semibold mb-1">
                      AI Support Assistant
                    </p>
                    <p className="text-xs text-ink leading-relaxed">
                      Ready to help diagnose IT issues and provide
                      troubleshooting guidance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Platform Stats */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { label: "Uptime", value: "99.9%" },
                  { label: "Response", value: "<5 min" },
                  { label: "Issues", value: "247" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-lg font-display font-bold text-brand">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Technology Badge */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <Globe size={14} className="text-brand" />
                <span className="text-xs text-ink font-display font-semibold">
                  Canadian Technology Platform
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 2. WHO WE ARE */}
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
              Who We Are
            </h2>

            <p className="text-lg text-slate leading-relaxed mb-4">
              Innovexa Softwares Ltd. is proposed as a privately owned Canadian
              technology company focused on AI-enabled IT diagnostics, network
              monitoring, software development, customer onboarding, technical
              support, and SaaS subscription services.
            </p>

            <p className="text-lg text-slate leading-relaxed mb-8">
              The platform will help small and mid-sized businesses diagnose
              common IT issues such as internet outages, Wi-Fi problems, printer
              failures, and device connectivity issues through a dashboard, AI
              chatbot, monitoring tools, alerts, and support recommendations.
            </p>

            <Button variant="secondary" size="lg" to="/get-a-quote">
              Get a Quote
            </Button>
          </motion.div>

          {/* Right: Company/Technology Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl2 shadow-cardHover border border-slate/10 p-8 space-y-6">
              {/* Company Overview */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center mx-auto mb-4">
                  <Code size={32} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-ink mb-2">
                  Technology Company
                </h3>
                <p className="text-sm text-slate">Canadian-Owned & Operated</p>
              </div>

              {/* Focus Areas */}
              <div className="space-y-3">
                {[
                  "AI-enabled IT diagnostics",
                  "Network monitoring & alerts",
                  "SaaS platform development",
                  "Customer onboarding support",
                  "Technical support services",
                  "Subscription-based delivery",
                ].map((area, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-cloud rounded-lg px-4 py-3"
                  >
                    <CheckCircle
                      size={16}
                      className="text-brand flex-shrink-0"
                    />
                    <span className="text-sm text-ink">{area}</span>
                  </div>
                ))}
              </div>

              {/* Location Badge */}
              <div className="text-center pt-4 border-t border-slate/10">
                <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-2 rounded-full">
                  <Globe size={16} />
                  <span className="text-sm font-display font-semibold">
                    Toronto, Ontario, Canada
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 3. MISSION & VISION */}
      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand/5 border-2 border-brand/20 rounded-xl2 p-8 space-y-4"
          >
            <div className="w-14 h-14 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <Target size={28} />
            </div>

            <h3 className="font-display font-bold text-2xl text-ink">
              Our Mission
            </h3>

            <p className="text-lg text-ink leading-relaxed font-semibold">
              To empower small and mid-sized businesses with AI-driven IT
              support that improves reliability, reduces downtime, and makes
              technology troubleshooting simple, fast, and accessible.
            </p>

            <p className="text-slate leading-relaxed">
              Innovexa exists to make business technology support easier for
              companies that depend on stable internet, Wi-Fi, printers, cloud
              tools, communication systems, and connected devices every day.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-accent/5 border-2 border-accent/20 rounded-xl2 p-8 space-y-4"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
              <Eye size={28} />
            </div>

            <h3 className="font-display font-bold text-2xl text-ink">
              Our Vision
            </h3>

            <p className="text-lg text-ink leading-relaxed font-semibold">
              To become a leading AI-enabled IT support platform for Canadian
              small businesses, helping organizations operate with greater
              reliability, confidence, and digital resilience.
            </p>

            <p className="text-slate leading-relaxed">
              The long-term vision is to build a scalable Canadian technology
              company that improves small-business productivity, supports
              skilled job creation, and advances the practical use of artificial
              intelligence in everyday business operations.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* 4. FOUNDER */}
      <Section bg="cloud">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Founder Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white rounded-xl2 shadow-cardHover border border-slate/10 p-8 text-center space-y-6">
              {/* Avatar */}
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-white">
                    NK
                  </span>
                </div>
              </div>

              {/* Name & Role */}
              <div>
                <h3 className="font-display font-bold text-2xl text-ink mb-2">
                  Navjot Kaur Deol
                </h3>
                <p className="text-lg text-brand font-display font-semibold">
                  Founder & Operator
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-slate/10"></div>

              {/* Role Highlights */}
              <div className="space-y-2 text-left">
                {[
                  "Strategic & Technical Direction",
                  "Product Planning & Architecture",
                  "Software Development Management",
                  "Customer Acquisition & Growth",
                  "Service Delivery & Operations",
                ].map((role, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle
                      size={14}
                      className="text-brand flex-shrink-0"
                    />
                    <span className="text-sm text-slate">{role}</span>
                  </div>
                ))}
              </div>

              {/* Badge */}
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-2 rounded-full">
                  <span className="text-sm font-display font-semibold">
                    Founder-Led Company
                  </span>
                </div>
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
              Founder-Led Technology Company
            </h2>

            <p className="text-lg text-slate leading-relaxed mb-4">
              Navjot Kaur Deol will be the founder, owner, and active operator
              of Innovexa Softwares Ltd. She will be responsible for strategic,
              technical, and operational direction, including software
              development management, product planning, platform architecture
              oversight, customer acquisition, service delivery, hiring, vendor
              coordination, and business growth.
            </p>

            <p className="text-lg text-slate leading-relaxed mb-8">
              The business will begin as a founder-led company and expand by
              hiring Canadian employees or permanent residents for technical
              support, software development, customer success, sales, and
              operations roles as demand grows.
            </p>

            <Button variant="outline" size="lg" to="/contact">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* 5. HOW WE WORK */}
      <Section bg="white">
        <SectionHeading title="How Innovexa Works" align="center" />

        <div className="mt-12">
          <ProcessFlow steps={howWeWorkSteps} />
        </div>

        {/* Note below flow */}
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-sm text-slate/80 italic leading-relaxed">
            Innovexa will not position the AI system as a replacement for
            professional IT technicians. The platform is designed to reduce
            confusion, speed up diagnosis, and provide better information before
            human support is required.
          </p>
        </div>
      </Section>

      {/* 6. OUR VALUES */}
      <Section bg="cloud">
        <SectionHeading title="Our Values" align="center" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {ourValues.map((value, index) => (
            <Card key={index} icon={value.icon} title={value.title}>
              {value.description}
            </Card>
          ))}
        </div>
      </Section>

      {/* 7. FINAL CTA */}
      <Section bg="white">
        <CTASection
          title="Build Smarter IT Support with Innovexa"
          subtitle="Contact Innovexa Softwares to discuss AI-powered IT support, network troubleshooting, monitoring, ticket creation, and reporting for your business."
          primary={{ label: "Get a Quote", to: "/get-a-quote" }}
          secondary={{ label: "Contact Us", to: "/contact" }}
        />
      </Section>
    </>
  );
}
