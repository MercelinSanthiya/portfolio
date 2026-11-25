import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import PHOTO from "./assets/pic.png";
import RESUME from "./assets/MercelinSanthiya.pdf";

const EMAILJS = { service: "service_x2mfuwl", template: "template_dq4ycym", key: "CcHytYggRiVKEHsZc" };

const ME = {
  first: "Mercelin", last: "Santhiya", role: "Junior Software Engineer",
  stack: ["Java", "Spring Boot", "Microservices", "ReactJS"],
  intro: "Full-stack developer passionate about building reliable backend services and responsive web applications. Experienced in RESTful APIs, role-based access control and booking workflows.",
  location: "Tiruvannamalai, Tamil Nadu", email: "mercelinsanthiya3105@gmail.com", phone: "6369602353",
  linkedin: "#", resume: RESUME, resumeName: "Mercelin_Resume.pdf",
  about: [
    "I'm a **Junior Software Engineer** with 1+ year of experience building and shipping production web applications at **Aroshell Infotech Pvt Ltd**, Tiruvannamalai.",
    "I work across the stack: **Java, Spring Boot, Hibernate** and RESTful services on the backend, and **React.js, Redux and RTK Query** on the frontend. I've delivered hotel management, e-commerce and taxi booking platforms with role-based access and booking workflows.",
    "I care about clean, maintainable code and enjoy working in a collaborative, fast-paced team.",
  ],
};
const STATS = [["1+", "Years experience"], ["4+", "Projects built"], ["94%", "BCA score"], ["5+", "Workshops"]];
const BARS = [["Java", 85], ["Spring Boot", 82], ["Hibernate / JPA", 80], ["ReactJS", 78], ["Redux & RTK Query", 75], ["MySQL", 80], ["SQL", 82]];
const SERVICES = [
  ["⚙️", "Backend Development", "REST APIs and microservice modules with Spring Boot, Hibernate and Spring Data JPA."],
  ["🎨", "Frontend Development", "Responsive React.js interfaces with Redux and RTK Query for state and data fetching."],
  ["🗄️", "Database Design", "MySQL schemas, keys, constraints and query optimization for reliable performance."],
  ["🔐", "Auth & Access Control", "Role-based authentication and authorization so each role gets only its features."],
  ["📑", "API Testing & Docs", "APIs tested with Postman and documented with Swagger."],
  ["🚀", "End-to-End Delivery", "From requirements to deployment for real client projects."],
  ["🧩", "Microservices Architecture", "Modular Spring Boot services that keep applications scalable and easy to maintain."],
  ["✨", "Clean, Maintainable Code", "Readable, reusable code and consistent REST conventions that make features easy to extend."],
];
const SKILLS = [
  ["Core", "c1", ["Java", "Spring Boot", "Hibernate", "Spring Data JPA", "RESTful Web Services"]],
  ["Frontend", "c2", ["ReactJS", "Redux", "RTK Query", "JavaScript (ES6+)", "HTML5", "CSS3"]],
  ["Databases", "c3", ["MySQL", "SQL"]],
  ["Architecture", "c4", ["Microservices Architecture", "REST APIs", "Role-Based Access Control"]],
  ["Tools", "c5", ["Postman", "Swagger", "Visual Studio Code"]],
  ["Soft Skills", "c6", ["Problem-Solving", "Time Management", "Communication", "Team Collaboration"]],
];
const EXP = [
  { r: "Junior Software Engineer", c: "Aroshell Infotech Pvt Ltd, Tiruvannamalai", y: "2025 – Present",
    p: ["Design, develop and maintain full-stack web applications for client projects, from requirements to deployment.",
      "Delivered three client platforms: a Hotel Management System, an E-Commerce Website and a Taxi Booking Website.",
      "Build REST APIs and microservices-based backend modules with Spring Boot, Hibernate and Spring Data JPA, tested and documented using Postman and Swagger.",
      "Develop responsive React.js interfaces with Redux and RTK Query for state management and API data fetching.",
      "Implement role-based authentication and authorization so each user role gets only its permitted features.",
      "Build booking workflows covering availability, reservation and booking management.",
      "Optimize MySQL queries and database design for reliable application performance.",
      "Collaborate with the team in a fast-paced environment, writing clean, maintainable and reusable code."],
    s: ["Java", "Spring Boot", "Hibernate", "JPA", "React", "Redux", "RTK Query", "MySQL", "Postman", "Swagger"] },
  { r: "Intern, RDBMS Development", c: "Agaram Soft, Tiruvannamalai", y: "2024",
    p: ["Designed the MySQL database for a Restaurant Management System, including tables, keys and constraints.",
      "Wrote SQL queries and planned the database structure.",
      "Gained hands-on experience in relational database design and SQL."],
    s: ["MySQL", "SQL", "Database Design"] },
];
const PROJECTS = [
  { ic: "🏨", tag: "Full-Stack · Client", t: "Hotel Management System",
    sum: "A complete hotel operations platform where every user sees only what their role allows, with an end-to-end room booking flow.",
    feats: ["Role-based access control: each user role gets only its permitted features", "Room booking covering availability, reservation and booking management", "Multiple backend services supporting day-to-day hotel operations", "Responsive React interface with Redux state management"],
    role: ["Designed and built the role-based authentication and authorization layer", "Developed the booking module and the backend services with Spring Boot, Hibernate and JPA", "Modelled the MySQL schema and optimized queries", "Tested and documented APIs with Postman and Swagger"],
    s: ["Java", "Spring Boot", "Hibernate", "React", "Redux", "MySQL", "RBAC"] },
  { ic: "🛒", tag: "Full-Stack · Client", t: "E-Commerce Website",
    sum: "An online shopping platform that takes a customer from browsing the catalogue to placing an order.",
    feats: ["Product catalogue for browsing items", "Shopping cart to add, review and manage products", "Order management from checkout to order tracking", "Fast, responsive storefront built with React and RTK Query"],
    role: ["Built REST APIs for products, cart and orders", "Created the React storefront with Redux and RTK Query data fetching", "Designed relational tables for catalogue and orders in MySQL", "Documented endpoints with Swagger"],
    s: ["Java", "Spring Boot", "JPA", "React", "Redux", "RTK Query", "MySQL"] },
  { ic: "🚕", tag: "Full-Stack · Client", t: "Taxi Booking Website",
    sum: "A ride booking platform that handles booking requests and trip management in one place.",
    feats: ["Ride booking flow for customers", "Trip management features to track and manage rides", "Role-based access for the different users of the platform", "Clean responsive UI with live API data"],
    role: ["Developed booking and trip management APIs", "Implemented authentication and authorization", "Built React screens connected through RTK Query", "Tested every endpoint with Postman"],
    s: ["Java", "Spring Boot", "Hibernate", "React", "RTK Query", "MySQL"] },
];
const ACADEMIC = {
  ic: "🎵", tag: "Academic · Full-Stack · 2024 – 2025", t: "DB Music Club Digital Platform",
  sum: "My final-year full-stack project: a digital home for a college music club, with a role-based website that manages events and attendance.",
  feats: ["Event management for creating and viewing club events", "Attendance tracking for members", "User login and registration", "Role-based access so each user sees the right pages", "Database connectivity with a responsive, user-friendly interface"],
  role: ["Designed the database and connected it to the application", "Built the login, registration and role-based flows", "Developed a responsive interface"],
  s: ["Full Stack", "MySQL", "Responsive UI"],
};
const EDU = { d: "Bachelor of Computer Application (BCA)", s: "Don Bosco College, Yelagiri Hills, Thirupathur", y: "2022 – 2025", g: "94%" };
const TRAIN = ["JavaScript Basics & Introduction to React with API Integration", "Django Basics using Templates (CRUD Operations)", "Django REST Framework: Developing RESTful APIs", "Introduction to Data Analytics using R", "Career Guidance & Upskilling"];
const NAV = ["about", "experience", "skills", "projects", "education", "contact"];

const rich = (s) => s.split("**").map((x, i) => (i % 2 ? <b key={i}>{x}</b> : x));

function Count({ v }) {
  const n = parseFloat(v), suf = v.replace(/[\d.]/g, ""), [x, setX] = useState(0);
  useEffect(() => { let i = 0; const id = setInterval(() => { i++; setX(Math.round((n * i) / 30)); i >= 30 && clearInterval(id); }, 40); return () => clearInterval(id); }, [n]);
  return <>{x}{suf}</>;
}
function Tilt({ children, className, onClick }) {
  const mv = (e) => { const r = e.currentTarget.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5; e.currentTarget.style.transform = `perspective(800px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-4px)`; };
  return <div onClick={onClick} className={className} onMouseMove={mv} onMouseLeave={(e) => (e.currentTarget.style.transform = "")}>{children}</div>;
}
const Head = ({ k, a, b }) => (<div className="reveal"><span className="kick">{k}</span><h3 className="title">{a} <span>{b}</span></h3></div>);

function ProjCard({ p, onOpen }) {
  return (
    <Tilt className="card proj reveal" onClick={() => onOpen(p)}>
      <div className="ic">{p.ic}</div><span className="ptag">{p.tag}</span>
      <h5>{p.t}</h5><p>{p.sum}</p>
      <ul className="arr">{p.feats.slice(0, 3).map((f) => <li key={f}>{f}</li>)}</ul>
      <div className="tags">{p.s.map((s) => <span key={s}>{s}</span>)}</div>
      <span className="more">View full details →</span>
    </Tilt>
  );
}

export default function App() {
  const [active, setActive] = useState("about"), [prog, setProg] = useState(0), [menu, setMenu] = useState(false);
  const empty = { name: "", company: "", email: "", phone: "", msg: "" };
  const [form, setForm] = useState(empty), [status, setStatus] = useState("idle"), [open, setOpen] = useState(null);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    const spy = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    NAV.forEach((id) => spy.observe(document.getElementById(id)));
    const sc = () => setProg((scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100);
    const esc = (e) => e.key === "Escape" && setOpen(null);
    addEventListener("scroll", sc); addEventListener("keydown", esc);
    return () => { io.disconnect(); spy.disconnect(); removeEventListener("scroll", sc); removeEventListener("keydown", esc); };
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  useEffect(() => {
    if (status !== "success") return;
    const t = setTimeout(() => setStatus("idle"), 3000);
    return () => clearTimeout(t);
  }, [status]);

  const send = async (e) => {
    e.preventDefault(); setStatus("sending");
    try {
      await emailjs.send(EMAILJS.service, EMAILJS.template, {
        from_name: form.name, company: form.company || "Not provided", from_email: form.email,
        phone: form.phone || "Not provided", message: form.msg, reply_to: form.email,
      }, { publicKey: EMAILJS.key });
      setStatus("success"); setForm(empty);
    } catch (err) { console.error(err); setStatus("error"); }
  };

  return (
    <>
      <div className="progress" style={{ width: prog + "%" }} />
      <nav className="nav">
        <a href="#home" className="brand"><span className="bi">{"</>"}</span>{(ME.first + " " + ME.last).toUpperCase()}</a>
        <button className="burger" onClick={() => setMenu(!menu)}>☰</button>
        <div className={"links" + (menu ? " open" : "")} onClick={() => setMenu(false)}>
          {NAV.map((s) => <a key={s} href={"#" + s} className={active === s ? "on" : ""}>{s}</a>)}
          <a className="resume" href={ME.resume} download={ME.resumeName}>Resume</a>
        </div>
      </nav>

      <header id="home" className="hero">
        <div className="dotgrid" />
        <div className="hero-text">
          <span className="badge"><i /> AVAILABLE FOR OPPORTUNITIES</span>
          <h1>{ME.first}<br /><span className="grad">{ME.last}</span></h1>
          <h2>{ME.role}</h2>
          <p className="stack">{ME.stack.join(" • ")}</p>
          <p className="intro">{ME.intro}</p>
          <div className="cta">
            <a className="btn" href="#contact">Get in Touch</a>
            <a className="btn ghost" href="#projects">View Projects</a>
            <a className="btn ghost" href={ME.resume} download={ME.resumeName}>Download CV</a>
          </div>
        </div>
        <div className="photo">
          <i className="circ pc1" /><i className="circ pc2" /><i className="circ pc3" />
          <img src={PHOTO} alt={ME.first + " " + ME.last} />
          <span className="exp">1+ Year Experience</span>
        </div>
      </header>

      <section id="about" className="sec">
        <Head k="👤 ABOUT ME" a="Who I" b="Am" />
        <div className="two">
          <div className="reveal">{ME.about.map((t) => <p key={t} className="txt">{rich(t)}</p>)}<p className="txt loc">📍 {ME.location}</p></div>
          <div className="card bars reveal"><h5>⌨️ Languages &amp; Frameworks</h5>
            {BARS.map(([n, v]) => <div key={n} className="bar"><div><span>{n}</span><b>{v}%</b></div><u><i style={{ "--w": v + "%" }} /></u></div>)}</div>
        </div>
        <div className="stats reveal">{STATS.map(([a, b]) => <Tilt key={b} className="stat"><strong><Count v={a} /></strong><span>{b}</span></Tilt>)}</div>
        <h4 className="sub reveal">What I Do</h4>
        <div className="grid">{SERVICES.map(([i, t, d]) => <Tilt key={t} className="card reveal"><div className="ic">{i}</div><h5>{t}</h5><p>{d}</p></Tilt>)}</div>
      </section>

      <section id="experience" className="sec alt">
        <Head k="💼 CAREER" a="Work" b="Experience" />
        <div className="timeline">{EXP.map((e) => (
          <div key={e.r} className="tl reveal"><i className="dot" />
            <div className="tlh"><h5>{e.r}</h5><span className="pill">{e.y}</span></div><em>{e.c}</em>
            <ul>{e.p.map((x) => <li key={x}>{x}</li>)}</ul>
            <div className="tags">{e.s.map((s) => <span key={s}>{s}</span>)}</div></div>))}</div>
      </section>

      <section id="skills" className="sec">
        <Head k="</> TECH STACK" a="" b="Skills" />
        <div className="skrows">{SKILLS.map(([g, c, l]) => (
          <div key={g} className="skrow reveal"><h6 className={c}>{g}</h6><div className="chips">{l.map((s) => <span key={s} className={"chip " + c}>{s}</span>)}</div></div>))}</div>
      </section>

      <section id="projects" className="sec alt">
        <Head k="📂 PORTFOLIO" a="Featured" b="Projects" />
        <p className="txt reveal lead">Real applications I've designed and built. Click any project to see what it does, what I built and the tech behind it.</p>
        <div className="grid p">{PROJECTS.map((p) => <ProjCard key={p.t} p={p} onOpen={setOpen} />)}</div>
      </section>

      <section id="education" className="sec">
        <Head k="🎓 LEARNING" a="Education &amp;" b="Training" />
        <div className="two">
          <Tilt className="card reveal"><div className="ic">🎓</div><h5>{EDU.d}</h5><p>{EDU.s}</p><div className="tags"><span>{EDU.y}</span><span>Score: {EDU.g}</span></div></Tilt>
          <div className="card reveal"><h5>📚 Workshops &amp; Training</h5><ul className="train">{TRAIN.map((t) => <li key={t}>{t}</li>)}</ul></div>
        </div>
        <h4 className="sub reveal">Academic Project</h4>
        <div className="grid p"><ProjCard p={ACADEMIC} onOpen={setOpen} /></div>
      </section>

      <section id="contact" className="sec alt">
        <Head k="✈️ GET IN TOUCH" a="" b="Contact" />
        <div className="two">
          <div className="reveal">
            <h4 className="lets">Let's build something together</h4>
            <p className="txt">I'm currently open to new opportunities, whether it's a full-time role, a freelance project, or just a conversation about technology. My inbox is always open.</p>
            {[["✉️", "Email", ME.email, "mailto:" + ME.email], ["📞", "Phone", ME.phone, "tel:" + ME.phone], ["🔗", "LinkedIn", "Mercelin Santhiya", ME.linkedin], ["📍", "Location", ME.location]].map(([i, l, v, h]) => (
              <a key={l} className="ct" href={h || undefined}><span className="ic sm">{i}</span><span><small>{l}</small><b>{v}</b></span></a>))}
          </div>
          <form className="card form reveal" onSubmit={send}>
            <h5>📩 Send me an enquiry</h5>
            <div className="row2">
              <label>Full Name *<input required value={form.name} onChange={set("name")} placeholder="Your name" /></label>
              <label>Company / Organization<input value={form.company} onChange={set("company")} placeholder="Company name" /></label>
            </div>
            <div className="row2">
              <label>Email *<input required type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" /></label>
              <label>Phone<input type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 00000 00000" /></label>
            </div>
            <label>Message *<textarea required rows="5" value={form.msg} onChange={set("msg")} placeholder="Tell me about the role or project..." /></label>
            <button className="btn" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send Message"}</button>
            {status === "success" && <p className="note ok">✅ Thank you! Your message has been sent. I'll get back to you soon.</p>}
            {status === "error" && <p className="note bad">❌ Something went wrong. Please email me directly at {ME.email}.</p>}
          </form>
        </div>
      </section>

      <section className="sec dl reveal">
        <div className="ic big">⬇️</div>
        <h3>Download My Resume</h3>
        <p>Get a complete overview of my experience, technical skills, projects, and training in one document.</p>
        <a className="btn" href={ME.resume} download={ME.resumeName}>⬇ Download Resume</a>
      </section>
      <footer>© {new Date().getFullYear()} {ME.first} {ME.last} · Built with React</footer>

      {open && (
        <div className="modal" onClick={() => setOpen(null)}>
          <div className="mbox" onClick={(e) => e.stopPropagation()}>
            <button className="x" onClick={() => setOpen(null)}>✕</button>
            <div className="ic">{open.ic}</div><span className="ptag">{open.tag}</span>
            <h3>{open.t}</h3><p className="txt">{open.sum}</p>
            <h6 className="c1">Key Features</h6><ul className="arr">{open.feats.map((f) => <li key={f}>{f}</li>)}</ul>
            <h6 className="c2">What I Built</h6><ul className="arr">{open.role.map((f) => <li key={f}>{f}</li>)}</ul>
            <h6 className="c3">Tech Stack</h6><div className="tags">{open.s.map((s) => <span key={s}>{s}</span>)}</div>
          </div>
        </div>
      )}
    </>
  );
}