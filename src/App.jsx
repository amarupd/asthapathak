import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    function setHeaderOffset() {
      const h = headerRef.current?.offsetHeight ?? 80;
      document.documentElement.style.setProperty("--header-offset", `${h + 12}px`);
    }

    setHeaderOffset();
    window.addEventListener("resize", setHeaderOffset);
    window.requestAnimationFrame(setHeaderOffset);
    return () => window.removeEventListener("resize", setHeaderOffset);
  }, []);

  const contact = {
    name: "Astha Pathak",
    title: "HR Business Partner",
    email: "asthau1210@gmail.com",
    phone: "+91 72350 96364",
    location: "Varanasi, India",
    linkedin: "https://linkedin.com/in/astha-upd",
    x: "https://x.com/asthau1210",
    instagram: "https://www.instagram.com/astha_upd/", // optional
    quora: "https://quora.com/profile/Astha-920",
    resume: "/Astha_HR_BP.pdf",
  };

  const summary = `Results-driven HR Business Partner who partners with Compliance & Risk leadership to attract and retain top talent. I build people-first processes, run data-backed HR initiatives, and design smooth employee experiences.`;

  const experience = [
    {
      role: "HR Business Partner",
      company: "Utkarsh Small Finance Bank",
      range: "Aug 2024 - Present",
      location: "Varanasi, Uttar Pradesh",
      color: "from-rose-400 to-yellow-400",
      bullets: [
        "Lead end-to-end hiring and workforce planning for Compliance & Risk functions.",
        "Coordinate performance management cycles and provide manager coaching.",
        "Designed onboarding improvements that reduced early employee queries.",
      ],
    },
    {
      role: "Corporate Intern",
      company: "Essel Mining & Industry Limited (EMIL)",
      range: "Sep 2023 - Oct 2023",
      location: "Kolkata, West Bengal",
      color: "from-indigo-400 to-cyan-400",
      bullets: [
        "Worked on Treasury Management & Corporate Finance projects.",
        "Prepared due-diligence reports and aided financial analysis.",
      ],
    },
  ];

  const skills = [
    { name: "Talent Acquisition", level: 88 },
    { name: "Performance Management", level: 82 },
    { name: "HR Analytics", level: 72 },
    { name: "HR Operations", level: 85 },
    { name: "Employee Engagement", level: 80 },
  ];

  const projects = [
    { title: "Industry Analysis: HR in Banking", desc: "Research into hiring trends, attrition, and skill gaps in the banking sector." },
    { title: "FinTech & HR: Emerging Trends", desc: "How FinTech adoption affects talent strategy and upskilling." },
  ];

  // small helper for image-button styles
  const imgBtn = "w-10 h-10 rounded-full inline-flex items-center justify-center shadow-sm transition-transform hover:scale-105 overflow-hidden";

  return (
    <div className={"min-h-screen " + (dark ? "bg-neutral-900 text-neutral-100" : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-neutral-900")}>
      <style>{`html{scroll-behavior:smooth} :root{--header-offset:88px}`}</style>

      <div className={"transition-colors duration-500 " + (dark ? "bg-neutral-900" : "bg-transparent")}>
        <header ref={headerRef} className="backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-full w-14 h-14 bg-gradient-to-tr from-emerald-500 to-indigo-600 flex items-center justify-center text-white font-semibold shadow-xl">AP</div>
              <div>
                <h1 className="text-lg font-bold tracking-tight">{contact.name}</h1>
                <p className="text-sm opacity-80">{contact.title} • {contact.location}</p>
              </div>
            </div>

            <nav className="hidden md:flex gap-6 items-center">
              <a href="#about" className="text-sm hover:underline">About</a>
              <a href="#experience" className="text-sm hover:underline">Experience</a>
              <a href="#skills" className="text-sm hover:underline">Skills</a>
              <a href="#projects" className="text-sm hover:underline">Projects</a>

              {/* CV image button */}
              <a href={contact.resume} className="text-sm px-3 py-2 border rounded-md shadow-sm hover:shadow">Download CV</a>

              {/* Theme toggle (keeps icon text) */}
              <button
                onClick={() => setDark(!dark)}
                className={`${imgBtn} border bg-transparent text-neutral-900 dark:text-neutral-100`}
                title="Toggle theme"
                aria-label="Toggle theme"
              >
                <span className="select-none">{dark ? "☀️" : "🌙"}</span>
              </button>
            </nav>

            <div className="md:hidden flex items-center gap-2">
              <button onClick={() => setDark(!dark)} className="px-2 py-1 rounded border">{dark ? '☀️' : '🌙'}</button>
              <button className="px-3 py-2 border rounded">Menu</button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12">
          {/* Hero */}
          <section className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-gradient-to-tr from-rose-300 to-yellow-300 text-xs font-semibold">HR • Banking</span>
                <span className="px-3 py-1 rounded-full bg-gradient-to-tr from-cyan-300 to-indigo-300 text-xs font-semibold">Compliance & Risk</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I'm {contact.name} <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-indigo-600">— HR Business Partner</span></h2>

              <p className="mt-4 text-lg max-w-2xl opacity-90">{summary} I enjoy building people-centric HR practices and using data to drive better people decisions.</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className={`${imgBtn} bg-white`} title="LinkedIn" aria-label="LinkedIn">
                  <img src="/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain" />
                </a>

                <a href={contact.x} target="_blank" rel="noreferrer" className={`${imgBtn} bg-white`} title="X / Twitter" aria-label="X / Twitter">
                  <img src="/twitter.png" alt="X" className="w-full h-full object-contain" />
                </a>

                <a href={`mailto:${contact.email}`} className={`${imgBtn} bg-white`} title="Email" aria-label="Email">
                  <img src="/gmail.png" alt="Email" className="w-full h-full object-contain" />
                </a>

                {/* optional Instagram - using same social image if you don't have one */}
                <a href={contact.instagram} target="_blank" rel="noreferrer" className={`${imgBtn} bg-white`} title="Instagram" aria-label="Instagram">
                  <img src="/social.png" alt="Instagram" className="w-full h-full object-contain" />
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-md text-sm opacity-90">
                <div className="bg-white/70 p-3 rounded-lg shadow">📍 <div className="font-semibold">{contact.location}</div><div className="text-xs">Location</div></div>
                <div className="bg-white/70 p-3 rounded-lg shadow">🎓 <div className="font-semibold">MBA</div><div className="text-xs">AKTU</div></div>
                <div className="bg-white/70 p-3 rounded-lg shadow">💼 <div className="font-semibold">Utkarsh SFB</div><div className="text-xs">Current</div></div>
              </div>
            </div>

            {/* ASIDE */}
            <aside className="relative bg-gradient-to-br from-[rgba(20,194,66,0.6)] to-[rgba(38,38,38,0.4)] p-6 rounded-2xl shadow-xl">
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-30 blur-2xl"></div>
              <div className="w-36 h-36 rounded-full mx-auto bg-gradient-to-tr from-indigo-600 to-pink-500 text-white flex items-center justify-center text-3xl font-bold shadow-2xl">AP</div>

              <div className="mt-6 text-center">
                <h3 className="font-semibold text-lg">{contact.name}</h3>
                <p className="text-sm opacity-80">{contact.title}</p>
              </div>

              <div className="mt-6 text-sm space-y-2">
                <div className="flex items-center justify-between"><span className="opacity-80">Experience</span><span className="font-semibold">1 yr+</span></div>
                <div className="flex items-center justify-between"><span className="opacity-80">Languages</span><span className="font-semibold">Hindi, English</span></div>
                <div className="flex items-center justify-between"><span className="opacity-80">Open to</span><span className="font-semibold">Hiring, Advisory</span></div>
              </div>

              <div className="mt-6 flex justify-center gap-3">
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className={`${imgBtn} bg-white`} title="LinkedIn" aria-label="LinkedIn">
                  <img src="/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain" />
                </a>
                <a href={contact.x} target="_blank" rel="noreferrer" className={`${imgBtn} bg-white`} title="X" aria-label="X">
                  <img src="/twitter.png" alt="X" className="w-full h-full object-contain" />
                </a>
                <a href={contact.instagram} target="_blank" rel="noreferrer" className={`${imgBtn} bg-white`} title="Instagram" aria-label="Instagram">
                  <img src="/social.png" alt="Instagram" className="w-full h-full object-contain" />
                </a>
              </div>

              <a href={contact.resume} className="mt-6 block text-center px-4 py-2 rounded-full bg-amber-600 text-sm font-medium shadow" aria-label="Download resume">Download Resume</a>
            </aside>
          </section>

          {/* ABOUT */}
          <section id="about" style={{ scrollMarginTop: "var(--header-offset)" }} className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[rgba(20,194,66,0.6)] to-[rgba(38,38,38,0.4)] shadow">
            <h3 className="text-2xl font-semibold mb-4">About me</h3>
            <p className="text-lg max-w-3xl opacity-90">
              {summary} I combine people-first curiosity with business-focused HR practices —
              hiring, onboarding, performance cycles, and compliance — to help teams do their
              best work.
            </p>
          </section>

          {/* Experience */}
          <section id="experience" style={{ scrollMarginTop: "var(--header-offset)" }} className="mt-10">
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i} className="relative rounded-xl p-6 shadow-lg overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3))' }}>
                  <div className={`absolute -left-4 top-6 w-2 h-2 rounded-full bg-gradient-to-b ${exp.color}`}></div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold">{exp.role} <span className="text-sm font-medium text-neutral-600">@ {exp.company}</span></h4>
                      <p className="text-sm opacity-80">{exp.range} • {exp.location}</p>

                      <ul className="mt-3 list-disc list-inside text-sm opacity-90">
                        {exp.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section id="skills" style={{ scrollMarginTop: "var(--header-offset)" }} className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/20 backdrop-blur-sm shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Skills</h3>
              <p className="text-sm opacity-80">Proficiency shown below</p>
            </div>

            <div className="mt-4 space-y-4 max-w-3xl">
              {skills.map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm"><span>{s.name}</span><span className="font-medium">{s.level}%</span></div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-700 h-2 rounded-full mt-2">
                    <div className="h-2 rounded-full shadow-sm" style={{ width: `${s.level}%`, background: 'linear-gradient(90deg,#10b981,#06b6d4)' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" style={{ scrollMarginTop: "var(--header-offset)" }} className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Projects & Research</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((p, i) => (
                <div key={i} className="p-4 rounded-xl shadow-lg bg-gradient-to-br from-amber-50 to-rose-50 dark:from-amber-900/10 dark:to-rose-900/10 backdrop-blur-sm">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="mt-2 text-sm opacity-90">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact / CTA */}
          <section id="contact" style={{ scrollMarginTop: "var(--header-offset)" }} className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">Let's connect</h3>
                <p className="opacity-90 mt-2">Open to collaborations, hiring needs, or HR advisory. Reach out and let's talk.</p>
              </div>

              <div className="flex gap-3">
                <a href={`mailto:${contact.email}`} className={`${imgBtn} bg-white`} title="Email" aria-label="Email">
                  <img src="/gmail.png" alt="Email" className="w-full h-full object-contain" />
                </a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className={`${imgBtn} bg-white`} title="LinkedIn" aria-label="LinkedIn">
                  <img src="/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain" />
                </a>
                <a href={contact.x} target="_blank" rel="noreferrer" className={`${imgBtn} bg-white`} title="X" aria-label="X">
                  <img src="/twitter.png" alt="X" className="w-full h-full object-contain" />
                </a>
                <a href={contact.instagram} target="_blank" rel="noreferrer" className={`${imgBtn} bg-white`} title="Instagram" aria-label="Instagram">
                  <img src="/social.png" alt="X" className="w-full h-full object-contain" />
                </a>
              </div>
            </div>
          </section>

          <footer className="mt-12 text-center text-sm opacity-80">
            <p>© {new Date().getFullYear()} {contact.name}. Designed with ❤️</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
