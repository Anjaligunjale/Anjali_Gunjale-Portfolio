import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Download, MapPin, Moon, Sun } from "lucide-react";
import CertificationsPage from "./pages/Certifications";
import CertificationCard from "./components/CertificationCard";
import { CERTIFICATIONS } from "./data/certifications";

const CONTACT = {
  email: "gunjaleanjali@gmail.com",
  phone: "+91 9307656794",
  linkedin: "https://www.linkedin.com/in/anjali-gunjale/",
  github: "https://github.com/anjaligunjale",
  location: "Ch. Sambhaji Nagar, India",
  resume: "/Anjali_Gunjale_Resume.pdf",
  photo: "/profile.jpg",
};

export default function App() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const cls = document.documentElement.classList;
    dark ? cls.add("dark") : cls.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 dark:from-[#0b1220] dark:to-[#0b1220] dark:text-slate-100">
      {/* Top Nav */}
      <nav className="no-print sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/60 border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
          <Link to="/" className="font-semibold">Anjali</Link>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/certifications" className="hover:underline">Certifications</Link>
            <button
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border shadow hover:shadow-md"
              onClick={()=>setDark(d=>!d)}
              title="Toggle theme"
            >
              {dark ? <Sun size={16}/> : <Moon size={16}/>}{dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Routes>
    </div>
  );
}

function Home() {
  const fade = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

  const education = [
    { degree:"BTech in Computer Science and Engineering", school:"Marathwada Institute of Technology", period:"07/2022 – 06/2025 • Ch. Sambhaji Nagar, India" },
    { degree:"Diploma in Information Technology", school:"Government Polytechnic", period:"07/2019 – 06/2022 • Ch. Sambhaji Nagar, India" },
    { degree:"10th Grade", school:"Ellora English High School", period:"07/2018 – 03/2019 • Ch. Sambhaji Nagar, India" },
  ];

  const experience = [
    { role:"Work & Assist Technical Intern", org:"NIELIT", period:"02/2025 – 08/2025 • India", bullets:[
      "Contributed to 3 AI/ML applications using Java & Python; improved efficiency and data accuracy by 15%.",
      "Assisted in writing & reviewing Java scripts for testing and validation.",
      "Led a 3‑month Bootcamp for 50 Army Education Officers (communication, presentation & collaboration).",
    ]},
    { role:"Web Development Intern", org:"Sumago‑Infotech", period:"08/2021 – 09/2021 • India", bullets:[
      "Built a fully responsive class website with HTML, CSS, JavaScript, Bootstrap.",
      "Collaborated with mentors/teammates; strong debugging & problem‑solving.",
    ]},
  ];

  const projects = [
    { title:"AI-Based Leaf Disease Detection Model", duration:"02/2025 – 08/2025 • India", desc:"Deep-learning model to classify 7 plant diseases using Python with Java-based backend scripts; 92% accuracy.", tech:["Python","Deep Learning","Java","UI Testing"] },
    { title:"Staff Recruitment Portal", duration:"02/2024 – 08/2024 • India", desc:"Hiring workflow platform. Frontend: Bootstrap; Backend: MySQL; Logic: Java. Includes UI validation & tests.", tech:["Bootstrap","Java","MySQL"] },
    { title:"Superstore Sales Dashboard", duration:"—", desc:"Interactive analytics in Power BI with Java + SQL preprocessing for validated data.", tech:["Power BI","Java","SQL"] },
  ];

  const skills = ["HTML","CSS","JavaScript","React","Tailwind","Core Java","Python","PHP","MySQL","C/C++","AI/ML","Power BI"];

  return (
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      {/* Header */}
      <header className="mb-8 sm:mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
          <img
            src="/profile.jpg"
            alt="Anjali Nandlal Gunjale"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl object-cover border shadow bg-white"
            onError={(e)=>{ e.currentTarget.style.display='none'; }}
          />
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">ANJALI NANDLAL GUNJALE</h1>
            <p className="mt-1 text-[15px] sm:text-base text-slate-600 dark:text-slate-300">Computer Science and Engineering • Software Developer (Fresher)</p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[14px]">
              <ContactItem icon={<Mail size={16}/>} href={`mailto:gunjaleanjali@gmail.com`} label="gunjaleanjali@gmail.com" />
              <ContactItem icon={<Phone size={16}/>} href={`tel:+919307656794`} label="+91 9307656794" />
              <ContactItem icon={<Linkedin size={16}/>} href="https://www.linkedin.com/in/anjali-gunjale/" label="LinkedIn" />
              <ContactItem icon={<Github size={16}/>} href="https://github.com/anjaligunjale" label="GitHub" />
              <ContactItem icon={<MapPin size={16}/>} label="Ch. Sambhaji Nagar, India" />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/Anjali_Gunjale_Resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white shadow hover:opacity-95"><Download size={16}/> Download Resume</a>
              <button onClick={()=>window.print()} className="no-print inline-flex items-center gap-2 px-4 py-2 rounded-lg border shadow hover:shadow-md"><Download size={16}/> Print / Save as PDF</button>
            </div>
          </div>
        </div>
      </header>

      {/* Summary */}
      <Section title="Summary">
        I am a dedicated Computer Science student with experience in AI/ML software development and web development. I have a passion for technology and a strong foundation in programming languages like Java and Python. My internships have equipped me with practical skills in developing applications, conducting training sessions, and working in team settings. I am eager to continue learning and contributing to innovative projects.
      </Section>

      {/* Education */}
      <Section title="Education">
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((ed, i) => (
            <div key={i} className="card rounded-xl border bg-white p-4 shadow-sm dark:bg-gray-900/40">
              <h3 className="font-medium">{ed.degree}</h3>
              <p className="text-sm">{ed.school}</p>
              <p className="text-xs text-slate-500 mt-1">{ed.period}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="Experience & Internships">
        <ol className="relative border-s pl-6 space-y-6">
          {experience.map((e, i) => (
            <li key={i}>
              <span className="absolute -start-1 top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow" />
              <div className="card rounded-xl border bg-white p-4 shadow-sm dark:bg-gray-900/40">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-semibold">{e.role} – {e.org}</h3>
                  <span className="text-sm text-slate-500">{e.period}</span>
                </div>
                <ul className="mt-2 list-disc ms-5 text-sm space-y-1">
                  {e.bullets.map((b, idx) => (<li key={idx}>{b}</li>))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Projects */}
      <Section title="Selected Projects">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="card rounded-2xl border bg-white shadow-sm hover:shadow-md transition dark:bg-gray-900/40">
              <div className="p-5">
                <h3 className="font-semibold text-lg tracking-tight">{p.title}</h3>
                {p.duration !== "—" && (<p className="text-xs text-slate-500 mt-0.5">{p.duration}</p>)}
                <p className="text-sm mt-3 text-slate-700 dark:text-slate-200">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech.map((t) => (<span key={t} className="text-xs px-2 py-1 rounded border">{t}</span>))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="px-3 py-1 rounded-full border bg-white shadow-sm text-sm dark:bg-gray-900/40">{s}</span>
          ))}
        </div>
      </Section>

      {/* Certifications preview */}
      <section id="certs-preview" className="mt-10">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <Link to="/certifications" className="text-indigo-600 hover:underline text-sm">View all →</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.slice(0,3).map((c)=>(
            <CertificationCard key={c.id} cert={c} onOpen={()=>{}} />
          ))}
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-slate-600 dark:text-slate-400 border-t mt-10">
        © {new Date().getFullYear()} Anjali Nandlal Gunjale — Built with React & Tailwind
      </footer>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <motion.section initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.35}} className="mb-8 text-left">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-2 border-b pb-1">{title}</h2>
      <div className="text-slate-700 dark:text-slate-200 text-[0.98rem] leading-7">{children}</div>
    </motion.section>
  );
}

function ContactItem({ icon, label, href }) {
  const C = (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border bg-white shadow-sm text-[13px] dark:bg-gray-900/40">
      {icon}<span>{label}</span>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{C}</a> : C;
}
