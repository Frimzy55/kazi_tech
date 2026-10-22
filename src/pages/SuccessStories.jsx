import { Link } from "react-router-dom";
import {
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  MapPin,
  Building2,
  CheckCircle2,
  Users,
  Code2,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react";

/* ============================================================
   DATA
   ============================================================ */

const featured = {
  professional: {
    name: "Ama Mensah",
    role: "Frontend Engineer",
    company: "Hubtel",
    location: "Accra",
    initials: "AM",
    accent: "from-orange-400 to-amber-500",
    quote:
      "KaziTech matched me with a team where I could actually ship. Within three months I went from tutorial projects to production code used by thousands of Ghanaians.",
  },
  company: {
    companyName: "Hubtel",
    industry: "Fintech / Payments",
    initials: "HB",
    accent: "from-amber-400 to-orange-500",
    contactName: "Kwame Osei",
    contactRole: "Engineering Manager",
    quote:
      "We'd been trying to fill this role for four months. KaziTech sent us three candidates — all strong, all hireable. Ama was the first we interviewed and the first we hired.",
    metric: { value: "3", label: "Offers in 14 days" },
  },
  meta: {
    role: "Frontend Engineer · Full-time",
    location: "Accra, Ghana",
    timeToHire: "3 weeks",
    engagement: "Permanent",
  },
};

const professionalStories = [
  {
    name: "Kwame Asante",
    role: "Data Analyst",
    company: "mPharma",
    location: "Kumasi",
    initials: "KA",
    accent: "from-amber-400 to-orange-500",
    category: "Placement",
    quote:
      "The skills assessment was real. It prepared me for the interviews that actually mattered.",
    outcome: "42% salary increase",
  },
  {
    name: "Akosua Boateng",
    role: "Product Designer",
    company: "Zeepay",
    location: "Accra",
    initials: "AB",
    accent: "from-orange-500 to-rose-400",
    category: "Placement",
    quote:
      "My mentor helped me rebuild my portfolio. Two weeks later I had three offers.",
    outcome: "3 offers in 14 days",
  },
  {
    name: "Yaw Osei",
    role: "Backend Engineer",
    company: "Turntabl",
    location: "Tema",
    initials: "YO",
    accent: "from-amber-500 to-orange-400",
    category: "Career switch",
    quote:
      "I didn't have a CS degree. KaziTech cared about what I could build, not where I learned it.",
    outcome: "First tech job",
  },
  {
    name: "Efua Addo",
    role: "QA Engineer",
    company: "Kudigo",
    location: "Accra",
    initials: "EA",
    accent: "from-orange-400 to-amber-400",
    category: "Career development",
    quote:
      "The mock interviews were brutal — in the best way. I walked into the real one calm.",
    outcome: "Hired in 5 weeks",
  },
  {
    name: "Kojo Antwi",
    role: "Data Engineer",
    company: "Fido",
    location: "Accra",
    initials: "KAn",
    accent: "from-amber-400 to-orange-600",
    category: "Career development",
    quote:
      "From bootcamp grad to data team lead in 18 months. The support never stopped.",
    outcome: "Promoted to lead",
  },
  {
    name: "Adwoa Nyarko",
    role: "Product Manager",
    company: "Complete Farmer",
    location: "Kumasi",
    initials: "AN",
    accent: "from-orange-500 to-amber-400",
    category: "Career switch",
    quote:
      "I was switching careers from finance. KaziTech made the jump feel possible — and then routine.",
    outcome: "Career switch",
  },
];

const companyTestimonials = [
  {
    companyName: "mPharma",
    industry: "Health Tech",
    initials: "mP",
    accent: "from-orange-500 to-amber-500",
    contactName: "Kwesi Baffoe",
    contactRole: "Head of Engineering",
    quote:
      "KaziTech understood the role better than our own job description. They sent three candidates who'd each have worked — we could have hired any of them.",
    metric: { value: "42 days", label: "To fill 3 senior roles" },
  },
  {
    companyName: "Zeepay",
    industry: "Fintech",
    initials: "ZP",
    accent: "from-amber-400 to-orange-500",
    contactName: "Nana Yaa Owusu",
    contactRole: "Head of Product",
    quote:
      "The quality of the shortlist was the surprise. Zero wasted interviews — every candidate was someone we'd genuinely consider.",
    metric: { value: "3", label: "Interviews to 1 hire" },
  },
  {
    companyName: "Complete Farmer",
    industry: "AgriTech",
    initials: "CF",
    accent: "from-orange-400 to-amber-500",
    contactName: "Kwabena Adjei",
    contactRole: "CTO",
    quote:
      "We were sceptical about hiring through a network, but the vetting is real. The engineer we hired shipped to production in week one.",
    metric: { value: "94%", label: "Retention after 6 months" },
  },
];

const completedProjects = [
  {
    title: "Checkout Rebuild for a Fintech Scale-up",
    client: "Zeepay",
    industry: "Fintech",
    duration: "14 weeks",
    teamSize: "3 engineers + 1 designer",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
    description:
      "Replaced a legacy checkout flow with a mobile-first redesign. KaziTech assembled the cross-functional pod, ran weekly sprints, and handed over a production-ready stack.",
    outcomes: [
      { value: "3.2x", label: "Faster checkout" },
      { value: "12%", label: "Fewer cart drops" },
    ],
  },
  {
    title: "Data Platform for a Health-Tech Scale-up",
    client: "mPharma",
    industry: "Health Tech",
    duration: "20 weeks",
    teamSize: "2 data engineers + 1 analyst",
    techStack: ["Python", "dbt", "Snowflake", "Airflow"],
    description:
      "Built a data warehouse and reporting layer from scratch to replace spreadsheet-driven decisions across 200+ pharmacies. Full audit trail, ELT pipelines, and a self-serve BI layer.",
    outcomes: [
      { value: "200+", label: "Pharmacies connected" },
      { value: "8 hrs", label: "Weekly reporting saved" },
    ],
  },
  {
    title: "Mobile App MVP for an AgriTech Startup",
    client: "Complete Farmer",
    industry: "AgriTech",
    duration: "10 weeks",
    teamSize: "1 mobile dev + 1 backend dev",
    techStack: ["React Native", "Firebase", "GraphQL"],
    description:
      "Shipped an MVP iOS + Android app for farmer onboarding, plot tracking, and produce listings. Design to app-store launch in 10 weeks with a lean two-person KaziTech pod.",
    outcomes: [
      { value: "10 wks", label: "Idea → App Store" },
      { value: "1.2k", label: "Farmers onboarded" },
    ],
  },
];

const stats = [
  { value: "500+", label: "Placements made" },
  { value: "120+", label: "Companies hired" },
  { value: "94%", label: "Retention after 6 months" },
  { value: "3 wks", label: "Average time to hire" },
];

/* ============================================================
   SMALL COMPONENTS
   ============================================================ */

function Avatar({ initials, accent, size = "h-12 w-12", text = "text-sm" }) {
  return (
    <span
      className={`flex ${size} shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent} ${text} font-bold text-white shadow-sm`}
    >
      {initials}
    </span>
  );
}

function SectionHeader({ icon: Icon, label, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-700">
        <Icon size={14} />
        {label}
      </span>
      <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-slate-600">{description}</p>
      )}
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

export default function SuccessStories() {
  return (
    <div className="flex flex-1 flex-col">
      {/* ============ HERO ============ */}
      <section className="mx-auto w-full max-w-3xl px-5 pb-12 pt-16 text-center sm:pt-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-700">
          <Star size={14} />
          Real People, Real Outcomes
        </span>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Success <span className="text-orange-500">Stories</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          From bootcamp grads landing their first role to scale-ups shipping
          production code — these are the placements, projects, and people
          building Ghana's tech ecosystem.
        </p>
      </section>

      {/* ============ STATS ============ */}
      <section className="mx-auto w-full max-w-5xl px-5 pb-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white px-4 py-6 text-center transition hover:bg-orange-50"
            >
              <div className="text-2xl font-extrabold text-orange-500 sm:text-3xl">
                {value}
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FEATURED CASE STUDY ============ */}
      <section className="mx-auto w-full max-w-5xl px-5 pb-16">
        <SectionHeader
          icon={Sparkles}
          label="Featured Case Study"
          title={
            <>
              A placement seen from <span className="text-orange-500">both sides</span>
            </>
          }
          description="Ama's first production role — and the hiring team that filled it faster than they expected."
        />

        <article className="relative mt-10 overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-sm sm:p-10">
          <Quote
            size={140}
            strokeWidth={0.75}
            className="pointer-events-none absolute -right-6 -top-6 text-orange-500/[0.08]"
          />

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Professional side */}
            <div className="relative">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                  1
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  The Professional
                </span>
              </div>

              <blockquote className="text-lg leading-relaxed text-slate-800">
                "{featured.professional.quote}"
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <Avatar
                  initials={featured.professional.initials}
                  accent={featured.professional.accent}
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {featured.professional.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {featured.professional.role} @ {featured.professional.company}
                  </div>
                </div>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                <TrendingUp size={13} />
                Hired in 3 weeks
              </div>
            </div>

            {/* Company side */}
            <div className="relative lg:border-l lg:border-orange-200/70 lg:pl-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                  2
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  The Employer
                </span>
              </div>

              <blockquote className="text-lg leading-relaxed text-slate-800">
                "{featured.company.quote}"
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <Avatar
                  initials={featured.company.initials}
                  accent={featured.company.accent}
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {featured.company.contactName}
                  </div>
                  <div className="text-xs text-slate-500">
                    {featured.company.contactRole} @ {featured.company.companyName}
                  </div>
                </div>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
                <Users size={13} />
                {featured.company.metric.value} — {featured.company.metric.label}
              </div>
            </div>
          </div>

          {/* Meta bar */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-orange-200/60 pt-6 text-sm">
            <span className="inline-flex items-center gap-1.5 text-slate-600">
              <Briefcase2 /> {featured.meta.role}
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-600">
              <MapPin size={14} /> {featured.meta.location}
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-600">
              <Clock size={14} /> Time to hire: {featured.meta.timeToHire}
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-600">
              <CheckCircle2 size={14} /> {featured.meta.engagement}
            </span>
          </div>
        </article>
      </section>

      {/* ============ PROFESSIONAL STORIES ============ */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-16">
        <SectionHeader
          icon={Users}
          label="Professional Journeys"
          title={
            <>
              Placements, growth, and <span className="text-orange-500">career switches</span>
            </>
          }
          description="Talent who found a role, levelled up, or changed industries through KaziTech."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {professionalStories.map((story) => (
            <article
              key={story.name}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_12px_30px_-12px_rgba(249,115,22,0.35)]"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Avatar initials={story.initials} accent={story.accent} />
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      {story.name}
                    </div>
                    <div className="text-xs text-slate-500">{story.role}</div>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-orange-700">
                  {story.category}
                </span>
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                "{story.quote}"
              </blockquote>

              <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 text-xs">
                <span className="inline-flex items-center gap-1 text-slate-500">
                  <Building2 size={13} />
                  {story.company}
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1 text-slate-500">
                  <MapPin size={13} />
                  {story.location}
                </span>
              </div>

              <div className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700 transition group-hover:bg-orange-500 group-hover:text-white">
                <TrendingUp size={12} />
                {story.outcome}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ CLIENT TESTIMONIALS ============ */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-16">
        <SectionHeader
          icon={Building2}
          label="Client Testimonials"
          title={
            <>
              What <span className="text-orange-500">hiring teams</span> say
            </>
          }
          description="Companies that filled critical roles with KaziTech talent — and would do it again."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {companyTestimonials.map((t) => (
            <article
              key={t.companyName}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_12px_30px_-12px_rgba(249,115,22,0.35)]"
            >
              {/* Company header */}
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${t.accent} text-sm font-bold text-white shadow-sm`}
                >
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {t.companyName}
                  </div>
                  <div className="text-xs text-slate-500">{t.industry}</div>
                </div>
              </div>

              <Quote
                size={24}
                className="mt-5 text-orange-500/40"
                strokeWidth={2}
              />

              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">
                "{t.quote}"
              </blockquote>

              <div className="mt-5 rounded-lg bg-orange-50 px-3 py-2.5 transition group-hover:bg-orange-500">
                <div className="text-lg font-extrabold text-orange-600 transition group-hover:text-white">
                  {t.metric.value}
                </div>
                <div className="text-[11px] font-medium text-orange-700/80 transition group-hover:text-white/90">
                  {t.metric.label}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2.5 border-t border-slate-100 pt-4">
                <Avatar
                  initials={t.contactName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                  accent="from-slate-400 to-slate-500"
                  size="h-8 w-8"
                  text="text-[10px]"
                />
                <div className="text-xs">
                  <div className="font-semibold text-slate-900">
                    {t.contactName}
                  </div>
                  <div className="text-slate-500">{t.contactRole}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ COMPLETED IT PROJECTS ============ */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-16">
        <SectionHeader
          icon={Layers}
          label="Completed IT Projects"
          title={
            <>
              Real projects, <span className="text-orange-500">shipped</span>
            </>
          }
          description="Case studies where KaziTech pods — engineers, designers, and data specialists — delivered end-to-end."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {completedProjects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_12px_30px_-12px_rgba(249,115,22,0.35)]"
            >
              {/* Header band */}
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-4">
                <div className="flex items-center gap-2">
                  <Code2 size={16} className="text-orange-600" />
                  <span className="text-xs font-semibold text-orange-700">
                    {project.industry}
                  </span>
                </div>
                <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-slate-600 ring-1 ring-slate-200">
                  {project.client}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-bold leading-snug text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Meta row */}
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} /> {project.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users size={12} /> {project.teamSize}
                  </span>
                </div>

                {/* Outcomes */}
                <div className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
                  {project.outcomes.map((o) => (
                    <div key={o.label} className="text-center">
                      <div className="text-base font-extrabold text-orange-500">
                        {o.value}
                      </div>
                      <div className="mt-0.5 text-[10px] font-medium text-slate-600">
                        {o.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="mx-auto w-full max-w-3xl px-5 pb-20">
        <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 text-center">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Your story could be next
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
            Join the talent network or hire from it — either way, you're
            building the next chapter of Ghana's tech scene.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/join-workforce"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Join Our Workforce
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/hire-talent"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-500 px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Hire Tech Talent
            </Link>
          </div>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-orange-700">
            <CheckCircle2 size={13} />
            Free to join. No fees to apply.
          </div>
        </div>
      </section>
    </div>
  );
}

/* Small inline icon helper for the meta bar — avoids another lucide import */
function Briefcase2() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}