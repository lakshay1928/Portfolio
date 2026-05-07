"use client";

import { useState } from "react";
import {
  IoCodeSlashOutline,
  IoDocumentTextOutline,
  IoFolderOpenOutline,
  IoHomeOutline,
  IoLocationOutline,
  IoMailOutline,
  IoOpenOutline,
  IoPhonePortraitOutline,
  IoSchoolOutline,
} from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

const tabs = [
  { id: "about", label: "About", icon: IoHomeOutline },
  { id: "resume", label: "Resume", icon: IoDocumentTextOutline },
  { id: "projects", label: "Projects", icon: IoFolderOpenOutline },
  { id: "contact", label: "Contact", icon: IoMailOutline },
] as const;

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java basics",
  "C++ basics",
  "Beginner DSA",
  "MySQL basics",
  "Git & GitHub",
  "VS Code",
  "MS Office",
];

const strengths = [
  "Quick learner",
  "Team player",
  "Good communication",
  "Problem solving attitude",
];

const services = [
  {
    title: "Frontend Development",
    description:
      "Building clean web interfaces with HTML, CSS, JavaScript, and modern responsive layouts.",
    icon: IoCodeSlashOutline,
  },
  {
    title: "Database Basics",
    description:
      "Working with MySQL fundamentals and connecting UI ideas with simple data flows.",
    icon: IoFolderOpenOutline,
  },
  {
    title: "Project Collaboration",
    description:
      "Comfortable with GitHub basics, teamwork, testing, UI improvements, and debugging.",
    icon: FaGithub,
  },
];

const projects = [
  {
    title: "Draftly",
    type: "Blogging Website",
    description:
      "A live blogging website project focused on a polished writing and drafting experience with a clean web interface.",
    live: "https://draftly-frontend-gamma.vercel.app/",
  },
];

type TabId = (typeof tabs)[number]["id"];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("about");

  return (
    <main className="min-h-screen bg-[#15120f] px-4 py-6 text-[#f7efe4] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
          <div className="flex h-full flex-col rounded-[22px] border border-white/10 bg-[#211d18] p-6 shadow-2xl shadow-black/30">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffcc66] to-[#31c5a6] text-3xl font-black text-[#17120d]">
                LV
              </div>
              <div>
                <h1 className="text-2xl font-bold leading-tight">Lakshay Vig</h1>
                <p className="mt-2 inline-flex rounded-full bg-white/8 px-3 py-1 text-xs font-semibold text-[#f7d690]">
                  BCA Student
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-4 border-t border-white/10 pt-6 text-sm">
              <a
                href="mailto:lmailofficial18@gmail.com"
                className="flex items-center gap-3 text-[#d8cfc3] transition hover:text-[#ffcc66]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-black/25 text-[#ffcc66]">
                  <IoMailOutline size={20} />
                </span>
                <span className="min-w-0 break-all">lmailofficial18@gmail.com</span>
              </a>
              <a
                href="tel:+917011531926"
                className="flex items-center gap-3 text-[#d8cfc3] transition hover:text-[#ffcc66]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-black/25 text-[#ffcc66]">
                  <IoPhonePortraitOutline size={20} />
                </span>
                <span>+91 70115 31926</span>
              </a>
              <div className="flex items-center gap-3 text-[#d8cfc3]">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-black/25 text-[#ffcc66]">
                  <IoLocationOutline size={20} />
                </span>
                <span>New Delhi, India</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href="https://github.com/lakshay1928"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/7 px-4 py-3 text-sm font-semibold transition hover:border-[#ffcc66]/50 hover:text-[#ffcc66]"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                href="/Lakshay_Vig_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffcc66] px-4 py-3 text-sm font-bold text-[#17120d] transition hover:bg-[#f5bd49]"
              >
                Resume
                <IoOpenOutline />
              </a>
            </div>

            <nav className="mt-8 grid gap-2 border-t border-white/10 pt-6 lg:mt-auto">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                    activeTab === id
                      ? "bg-[#ffcc66] text-[#17120d]"
                      : "text-[#d8cfc3] hover:bg-white/7 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <section className="min-h-[calc(100vh-3rem)] rounded-[22px] border border-white/10 bg-[#1d1915] p-5 shadow-2xl shadow-black/25 sm:p-8 lg:p-10">
          {activeTab === "about" && (
            <div className="space-y-8">
              <SectionTitle eyebrow="Portfolio" title="About Me" />
              <div className="max-w-3xl space-y-4 text-base leading-8 text-[#d8cfc3]">
                <p>
                  I am a motivated second-year BCA student at IITM Information,
                  Janakpuri, building my foundation in web development and
                  software development.
                </p>
                <p>
                  My focus is on learning by building: clean interfaces, simple
                  workflows, teamwork, debugging, and turning practical ideas
                  into usable products.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {services.map(({ title, description, icon: Icon }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-white/10 bg-[#17130f] p-5"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ffcc66]/12 text-[#ffcc66]">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#c6baac]">
                      {description}
                    </p>
                  </article>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-bold">Technologies Known</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-white/10 bg-white/7 px-4 py-2 text-sm font-semibold text-[#f3e4cf]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "resume" && (
            <div className="space-y-8">
              <SectionTitle eyebrow="Resume" title="Education & Skills" />
              <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <article className="rounded-2xl border border-white/10 bg-[#17130f] p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#31c5a6]/12 text-[#31c5a6]">
                      <IoSchoolOutline size={23} />
                    </span>
                    <h3 className="text-xl font-bold">Education</h3>
                  </div>
                  <div className="mt-6 border-l border-[#ffcc66]/30 pl-5">
                    <p className="text-lg font-bold">
                      Bachelor of Computer Applications (BCA)
                    </p>
                    <p className="mt-2 text-[#ffcc66]">
                      IITM Information, Janakpuri
                    </p>
                    <p className="mt-3 text-sm text-[#c6baac]">
                      Currently pursuing, 2nd year
                    </p>
                    <p className="mt-2 text-sm text-[#c6baac]">
                      Current CGPA: 8.3+
                    </p>
                  </div>
                </article>

                <article className="rounded-2xl border border-white/10 bg-[#17130f] p-6">
                  <h3 className="text-xl font-bold">Strengths</h3>
                  <div className="mt-5 grid gap-3">
                    {strengths.map((strength) => (
                      <div
                        key={strength}
                        className="rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-semibold text-[#d8cfc3]"
                      >
                        {strength}
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              <article className="rounded-2xl border border-white/10 bg-[#17130f] p-6">
                <h3 className="text-xl font-bold">Technical Skills</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-semibold"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ffcc66]" />
                      {skill}
                    </div>
                  ))}
                </div>
              </article>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="space-y-8">
              <SectionTitle eyebrow="Work" title="Projects" />
              <div className="grid gap-5 xl:grid-cols-2">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className="flex min-h-64 flex-col rounded-2xl border border-white/10 bg-[#17130f] p-6"
                  >
                    <p className="text-sm font-semibold text-[#31c5a6]">
                      {project.type}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-[#c6baac]">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#ffcc66] px-4 py-3 text-sm font-bold text-[#17120d] transition hover:bg-[#f5bd49]"
                      >
                        View Project
                        <IoOpenOutline />
                      </a>
                      <a
                        href="https://github.com/lakshay1928"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-[#31c5a6]/60 hover:text-[#31c5a6]"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="space-y-8">
              <SectionTitle eyebrow="Contact" title="Let's Connect" />
              <div className="grid gap-5 lg:grid-cols-3">
                <ContactCard
                  icon={<IoMailOutline size={22} />}
                  label="Email"
                  value="lmailofficial18@gmail.com"
                  href="mailto:lmailofficial18@gmail.com"
                />
                <ContactCard
                  icon={<IoPhonePortraitOutline size={22} />}
                  label="Phone"
                  value="+91 70115 31926"
                  href="tel:+917011531926"
                />
                <ContactCard
                  icon={<FaGithub size={20} />}
                  label="GitHub"
                  value="github.com/lakshay1928"
                  href="https://github.com/lakshay1928"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#17130f] p-6">
                <p className="max-w-2xl text-base leading-8 text-[#d8cfc3]">
                  I am open to internship opportunities, web development
                  practice projects, and collaborations where I can learn,
                  contribute, and improve by building real things.
                </p>
                <a
                  href="mailto:lmailofficial18@gmail.com?subject=Portfolio%20Contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#ffcc66] px-5 py-3 text-sm font-bold text-[#17120d] transition hover:bg-[#f5bd49]"
                >
                  Send Email
                  <IoMailOutline size={18} />
                </a>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase text-[#31c5a6]">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-black tracking-normal text-white sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-[#ffcc66]" />
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="rounded-2xl border border-white/10 bg-[#17130f] p-5 transition hover:border-[#ffcc66]/60"
    >
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ffcc66]/12 text-[#ffcc66]">
        {icon}
      </span>
      <p className="mt-4 text-sm font-semibold text-[#31c5a6]">{label}</p>
      <p className="mt-2 break-words text-sm font-semibold text-[#f7efe4]">
        {value}
      </p>
    </a>
  );
}
