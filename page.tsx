import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, MapPin, Briefcase, GraduationCap, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CONTACT = {
  name: "Bhanu Sai Prakash Chikkavarapu",
  title: "Mechanical Engineer | CAD • DFM/DFA • Test Systems",
  email: "chikkavarapu1999@gmail.com",
  phone: "(815) 909-1864",
  location: "DeKalb, IL, USA",
  linkedin: "https://www.linkedin.com/in/bhanu-chikkavarapu",
  github: "",
};

const projects = [
  {
    title: "Compact Ozone Test Train",
    subtitle: "Modular packed-bed ozone filter evaluation system",
    metrics: ["Leak-proof O-ring seals", "25% measurement accuracy gain", "Modular, compact"],
    tech: ["SolidWorks", "Polypropylene", "Arduino", "Diff. Pressure Sensors"],
    highlights: [
      "Packed-bed design reduces voids and improves filter packing.",
      "Custom pressure/flow devices for accurate readings.",
    ],
  },
  {
    title: "Multistage Inlet Air Filter (1000 CFM)",
    subtitle: "Cyclonic pre-cleaner + panel filter, DFM/DFA optimized",
    metrics: ["35% smaller & lighter", "15× service life", "70% dust pre-removed"],
    tech: ["SolidWorks Sheet Metal", "16 ga Stainless", "Press Brake"],
    highlights: [
      "Top-side serviceability; staged separation for durability.",
      "K-factor & bend radius tuned for machine capabilities.",
    ],
  },
  {
    title: "Smart Conveyor: Orientation & Alignment",
    subtitle: "80 FPM, 150 lb capacity, flipping & transfer",
    metrics: ["High orientation accuracy", "Simple, robust mechanism"],
    tech: ["Welded Frame", "500W AC Gear Motor", "Air Actuator"],
    highlights: [
      "Adjustable alignment holder for multiple part sizes.",
      "Improved part handling & reduced manual intervention.",
    ],
  },
];

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-black"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-black/70 bg-amber-200 px-3 py-1 text-xs font-medium mr-2 mb-2">
    {children}
  </span>
);

const ProjectCard = ({ p }: { p: (typeof projects)[number] }) => (
  <Card className="overflow-hidden border-2 border-black rounded-2xl shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] transition-all">
    <CardContent className="p-5">
      <h3 className="text-xl font-semibold text-black">{p.title}</h3>
      <p className="text-sm text-gray-700 mb-2">{p.subtitle}</p>
      <div className="flex flex-wrap mb-3">
        {p.metrics.map((m, i) => (<Badge key={i}>{m}</Badge>))}
      </div>
      <div className="flex flex-wrap mb-3">
        {p.tech.map((t, i) => (<Badge key={i}>{t}</Badge>))}
      </div>
      <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
        {p.highlights.map((h, i) => (<li key={i}>{h}</li>))}
      </ul>
    </CardContent>
  </Card>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white font-bold">B</span>
            <span className="font-semibold hidden sm:inline">Bhanu</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="outline" className="rounded-xl hidden sm:inline-flex">
              <a href="/Resume.pdf" download>
                <Download className="w-4 h-4 mr-2" /> Resume
              </a>
            </Button>
            <Button asChild size="sm" variant="default" className="rounded-xl bg-amber-400 hover:bg-amber-300 text-black border border-black">
              <a href="#contact">Contact Now ↗</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 relative">
              <div className="absolute -top-8 -left-8 w-[88%] h-[110%] border border-gray-300/70 bg-[linear-gradient(0deg,transparent_24px,#e5e7eb_25px),linear-gradient(90deg,transparent_24px,#e5e7eb_25px)] bg-[size:26px_26px] rounded"/>
              <div className="relative bg-white rounded-md shadow-sm">
                <div className="absolute -bottom-2 -left-2 right-2 h-2 bg-black/80 rounded"/>
                <div className="p-6 md:p-8 border border-black/80 rounded-md">
                  <p className="text-2xl md:text-3xl font-extrabold leading-tight">
                    Hi! I’M <span className="text-black">{CONTACT.name.split(' ')[0]}</span> <span className="bg-amber-300 px-2 rounded-sm inline-block">Mechanical Design Engineer</span>
                  </p>
                  <p className="mt-4 text-gray-700 max-w-xl">
                    Hands-on mechanical engineer focused on CAD, DFM/DFA, test rigs and validation. I build compact, serviceable designs and back them up with data.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <Button asChild className="rounded-xl bg-amber-400 hover:bg-amber-300 text-black border border-black">
                      <a href="/Resume.pdf" download>
                        <Download className="w-4 h-4 mr-2"/> Resume Download
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="rounded-xl">
                      <a href="#projects">View Projects</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: yellow panel with circular portrait */}
            <div className="lg:col-span-5">
              <div className="relative border border-black rounded-md overflow-hidden bg-amber-300 p-6 min-h-[320px] flex items-center justify-center">
                <div className="absolute inset-0 opacity-50 pointer-events-none bg-[radial-gradient(circle,_black_1px,transparent_1px)] bg-[length:14px_14px]"/>
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <img
                    src="/images/hero-photo.png"
                    alt="Bhanu Sai Prakash Chikkavarapu portrait"
                    className="w-full h-full object-cover rounded-full border-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.9)]"
                  />
                </div>
              </div>
              <div className="h-5 bg-black mt-3 rounded-sm"/>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <Section id="projects" title="Highlighted Projects">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <Card className="rounded-2xl">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Get in touch</h3>
                <p className="text-gray-700 mb-4">Open to roles in mechanical design, product development, and test engineering. I enjoy building clean, serviceable designs and validating with data.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> <a className="underline hover:no-underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> {CONTACT.phone}</div>
                  <div className="flex items-center gap-2"><Linkedin className="w-4 h-4"/> <a className="underline hover:no-underline" href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-medium mb-2">Resume</h4>
                <p className="text-sm text-gray-600 mb-3">Download a copy of my latest resume or contact me for a tailored version.</p>
                <Button asChild className="rounded-xl"><a href="/Resume.pdf" download><Download className="w-4 h-4 mr-2"/> Download PDF</a></Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {CONTACT.name}. Built with Next.js and Tailwind.
      </footer>
    </div>
  );
}
// Replace this placeholder with the latest code from ChatGPT in src/app/page.tsx
// Then upload to GitHub for deployment.