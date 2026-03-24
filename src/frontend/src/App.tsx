import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Award,
  BarChart2,
  BookOpen,
  Briefcase,
  ChevronUp,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Link2,
  Linkedin,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageSquare,
  PenTool,
  Phone,
  Search,
  Share2,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSubmitVisitorMessage } from "./hooks/useQueries";

const queryClient = new QueryClient();

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "About Me", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : "border-b border-border"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="font-bold text-xl text-primary tracking-tight">
          JK <span className="text-foreground">SEO</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.id}
              data-ocid={`nav.${link.id}.link`}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button
            data-ocid="nav.hire_me.button"
            onClick={() => scrollTo("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            size="sm"
          >
            Hire Me
          </Button>
        </div>
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMobileOpen((v) => !v)}
          data-ocid="nav.mobile_menu.toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-3"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground w-full mt-1"
              size="sm"
            >
              Hire Me
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="pt-16 min-h-screen flex items-center"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.95 0.025 192) 0%, oklch(0.97 0.015 240) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            Available for Hire
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight mb-4">
            Jaspreet Kaur
            <span className="block text-primary mt-1 text-3xl sm:text-4xl font-bold">
              Results-Driven SEO Executive
            </span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            Specialising in off-page SEO, keyword research, and digital
            marketing strategies that boost domain authority and drive organic
            traffic.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              data-ocid="hero.view_portfolio.button"
              onClick={() => scrollTo("experience")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
              size="lg"
            >
              View Portfolio
            </Button>
            <Button
              data-ocid="hero.contact.button"
              variant="outline"
              onClick={() => scrollTo("contact")}
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.49 0.09 215 / 0.15) 0%, oklch(0.49 0.09 215 / 0.05) 100%)",
                transform: "rotate(3deg) scale(1.02)",
              }}
            />
            <img
              src="/assets/uploads/jass-019d1f98-99cd-75af-ade0-2c681054c6e9-1.jpg"
              alt="Jaspreet Kaur"
              className="relative w-72 h-80 object-cover object-top rounded-2xl shadow-xl border-4 border-white"
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2">
              <BarChart2 size={16} className="text-primary" />
              <span className="text-xs font-semibold text-foreground">
                SEO Expert
              </span>
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2">
              <Link2 size={14} />
              <span className="text-xs font-semibold">Link Builder</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading label="About Me" />
          <div className="grid md:grid-cols-2 gap-12 items-start mt-8">
            <div>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                I'm Jaspreet Kaur, born on October 5, 2005, in Delhi, India. I'm
                pursuing a BA from the School of Open Learning (Delhi
                University) and simultaneously building my skills in digital
                marketing, with a focus on off-page SEO.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                A certified Digital Marketing professional from Digiuprise
                (Rajouri Garden), I'm passionate about learning and staying
                updated with industry trends. Known for being adaptable and
                goal-driven, I strive to grow in this field with a professional
                and results-oriented approach.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                With hands-on experience at SEO Services Planet, I have
                successfully managed backlink campaigns, guest blogging
                outreach, keyword research, and website promotion strategies
                that drive measurable results.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Search, label: "Off-Page SEO", value: "Expert" },
                {
                  icon: TrendingUp,
                  label: "Keyword Research",
                  value: "Proficient",
                },
                { icon: Globe, label: "On-Page SEO", value: "Skilled" },
                { icon: BarChart2, label: "Google Ads", value: "Certified" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-accent rounded-xl p-4 flex flex-col gap-2"
                >
                  <Icon size={22} className="text-primary" />
                  <div className="font-semibold text-sm text-foreground">
                    {label}
                  </div>
                  <div className="text-xs text-muted-foreground">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const skills = [
  { icon: Search, label: "Off-Page SEO" },
  { icon: Globe, label: "On-Page SEO" },
  { icon: TrendingUp, label: "Keyword Research" },
  { icon: Link2, label: "Link Building" },
  { icon: BookOpen, label: "Backlink Building" },
  { icon: PenTool, label: "Guest Blogging" },
  { icon: BarChart2, label: "Google Ads" },
  { icon: Share2, label: "Social Media Marketing" },
  { icon: FileText, label: "Microsoft Office" },
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: Users, label: "Team Player" },
  { icon: MessageSquare, label: "Communication" },
];

function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.97 0.015 240) 0%, oklch(1 0 0) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading label="Skills" />
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map(({ icon: Icon, label }, idx) => (
            <motion.div
              key={label}
              data-ocid={`skills.item.${idx + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="bg-white rounded-xl p-4 flex flex-col items-center gap-3 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon size={18} className="text-primary" />
              </div>
              <span className="text-xs font-semibold text-foreground text-center leading-tight">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      role: "SEO Executive",
      company: "SEO Services Planet",
      duration: "Nov 2024 – Feb 2026",
      current: true,
      points: [
        "Managed backlink submission and guest blogging to improve domain authority and search rankings.",
        "Conducted keyword research to identify high-value opportunities for organic growth.",
        "Executed on-page and off-page SEO strategies to enhance online visibility and organic traffic.",
        "Built high-quality backlinks through outreach and off-page SEO techniques.",
      ],
    },
    {
      role: "SEO Intern",
      company: "SEO Services Planet",
      duration: "Sept 2024 – Oct 2024",
      current: false,
      points: [
        "Assisted in backlink submission, guest blogging, keyword research, and website promotion.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading label="Experience" />
        <div className="mt-8 space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              data-ocid={`experience.item.${idx + 1}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-6 border-l-2 border-primary/30"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-2 border-white shadow" />
              <div className="bg-accent/50 rounded-xl p-6 border border-border">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <Badge
                    variant={exp.current ? "default" : "outline"}
                    className={
                      exp.current
                        ? "bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground"
                    }
                  >
                    <Briefcase size={10} className="mr-1" />
                    {exp.duration}
                  </Badge>
                </div>
                <ul className="list-disc list-inside space-y-1">
                  {exp.points.map((point) => (
                    <li
                      key={point.slice(0, 20)}
                      className="text-muted-foreground text-sm leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const education = [
    {
      institution: "Delhi University – School of Open Learning",
      degree: "Bachelor of Arts (BA)",
      year: "Pursuing",
      status: "current",
    },
    {
      institution: "Central Board of Secondary Education (CBSE)",
      degree: "12th Grade",
      year: "2023",
      status: "completed",
    },
    {
      institution: "Central Board of Secondary Education (CBSE)",
      degree: "10th Grade",
      year: "2021",
      status: "completed",
    },
  ];

  return (
    <section
      id="education"
      className="py-20"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.97 0.015 240) 0%, oklch(0.95 0.025 192) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading label="Education" />
        <div className="mt-8 space-y-4">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              data-ocid={`education.item.${idx + 1}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-5 border border-border flex items-center gap-4 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap size={18} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">
                  {edu.institution}
                </h3>
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
              </div>
              <Badge
                variant={edu.status === "current" ? "default" : "outline"}
                className={
                  edu.status === "current"
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground"
                }
              >
                {edu.year}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const certs = [
    {
      title: "Digital Marketing Certificate",
      issuer: "Digiuprise, Rajouri Garden",
      date: "30 Jan 2025",
      description:
        "Comprehensive digital marketing certification covering SEO, social media, content strategy, and online advertising.",
    },
    {
      title: "SEO Certification",
      issuer: "Digiuprise",
      date: null,
      description:
        "Comprehensive certification covering on-page, off-page, and technical SEO strategies.",
    },
    {
      title: "Social Media Marketing",
      issuer: "Digiuprise",
      date: null,
      description:
        "Certification in social media strategy, content creation, and community management.",
    },
    {
      title: "Google Ads",
      issuer: "Digiuprise",
      date: null,
      description:
        "Certified in creating and optimizing Google Ads campaigns for maximum ROI.",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading label="Certifications" />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.title}
              data-ocid={`certifications.item.${idx + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-accent/50 rounded-xl p-6 border border-border hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                <Award size={18} />
              </div>
              <h3 className="font-bold text-foreground text-base mb-1">
                {cert.title}
              </h3>
              <p className="text-primary text-sm font-medium mb-1">
                {cert.issuer}
              </p>
              {cert.date && (
                <p className="text-xs text-muted-foreground mb-3">
                  {cert.date}
                </p>
              )}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { mutateAsync: submitMessage, isPending } = useSubmitVisitorMessage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitMessage(form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: "8595241619",
      href: "tel:+918595241619",
    },
    {
      icon: Mail,
      label: "Email",
      value: "jaspreet.kaur360356@gmail.com",
      href: "mailto:jaspreet.kaur360356@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jaspreet-kaur-974674380",
      href: "https://www.linkedin.com/in/jaspreet-kaur-974674380",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "A-65 Bharat Vihar, Chander Vihar, Nilothi Ext, New Delhi 110041",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.95 0.025 192) 0%, oklch(0.97 0.015 240) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading label="Contact" />
        <div className="mt-8 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-2">
              Let's Work Together
            </h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              I'm open to exciting opportunities in SEO and digital marketing.
              Feel free to reach out!
            </p>
            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  data-ocid={`contact.${label.toLowerCase()}.card`}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={15} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary transition-colors break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div
                data-ocid="contact.form.success_state"
                className="bg-white rounded-xl p-8 border border-border text-center flex flex-col items-center gap-4 h-full justify-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 border-primary text-primary hover:bg-primary/10"
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form
                data-ocid="contact.form.panel"
                onSubmit={handleSubmit}
                className="bg-white rounded-xl p-6 border border-border shadow-sm space-y-4"
              >
                <div>
                  <Label
                    htmlFor="contact-name"
                    className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block"
                  >
                    Your Name
                  </Label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.name.input"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-email"
                    className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="contact-email"
                    data-ocid="contact.email.input"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-message"
                    className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.message.textarea"
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    required
                  />
                </div>
                <Button
                  type="submit"
                  data-ocid="contact.form.submit_button"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="py-12 text-sm"
      style={{ background: "oklch(0.22 0.025 235)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div
              className="font-bold text-xl mb-3"
              style={{ color: "oklch(1 0 0)" }}
            >
              JK <span style={{ color: "oklch(0.75 0.09 215)" }}>SEO</span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.65 0.015 264)" }}
            >
              Results-driven SEO Executive specializing in off-page SEO, keyword
              research, and digital marketing.
            </p>
          </div>
          <div>
            <h4
              className="font-semibold text-xs uppercase tracking-wider mb-3"
              style={{ color: "oklch(0.85 0.01 264)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About Me", "Skills", "Experience", "Education", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() =>
                        scrollTo(item.toLowerCase().replace(" ", ""))
                      }
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: "oklch(0.65 0.015 264)" }}
                    >
                      {item}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h4
              className="font-semibold text-xs uppercase tracking-wider mb-3"
              style={{ color: "oklch(0.85 0.01 264)" }}
            >
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:jaspreet.kaur360356@gmail.com"
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: "oklch(0.65 0.015 264)" }}
                >
                  jaspreet.kaur360356@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918595241619"
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: "oklch(0.65 0.015 264)" }}
                >
                  +91 8595241619
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jaspreet-kaur-974674380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: "oklch(0.65 0.015 264)" }}
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-t pt-6 flex flex-wrap items-center justify-between gap-4"
          style={{ borderColor: "oklch(0.32 0.02 235)" }}
        >
          <p style={{ color: "oklch(0.55 0.015 264)" }}>
            © {year}. Built with{" "}
            <Heart
              size={12}
              className="inline"
              style={{ color: "oklch(0.6 0.12 15)" }}
              fill="oklch(0.6 0.12 15)"
            />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              style={{ color: "oklch(0.75 0.09 215)" }}
            >
              caffeine.ai
            </a>
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
            style={{
              background: "oklch(0.32 0.02 235)",
              color: "oklch(0.85 0.01 264)",
            }}
            aria-label="Back to top"
          >
            <ChevronUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
        {label}
      </h2>
      <div className="flex-1 h-px bg-border max-w-xs" />
      <div className="w-2 h-2 rounded-full bg-primary" />
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Portfolio />
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}
