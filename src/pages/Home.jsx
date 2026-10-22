import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Target,
  Rocket,
  Users,
  BriefcaseBusiness,
  Code2,
  Palette,
  Database,
  LineChart,
  ShieldCheck,
  Zap,
  Handshake,
  Search,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Building2,
  Layers,
  MonitorSmartphone,
  Server,
  Cloud,
} from "lucide-react";
import heroImage from "../assets/kz.png";

/* ---------- Data ---------- */

const objectives = [
  {
    icon: Target,
    title: "Bridge the Skills Gap",
    description:
      "Connect trained tech talent to real opportunities, reducing the gap between education and employment in Ghana.",
  },
  {
    icon: Rocket,
    title: "Accelerate Careers",
    description:
      "Give professionals the projects, mentorship, and visibility they need to grow into senior roles faster.",
  },
  {
    icon: Handshake,
    title: "Power Employer Success",
    description:
      "Help companies hire pre-vetted talent quickly — with confidence, not guesswork.",
  },
  {
    icon: Layers,
    title: "Build a Talent Pipeline",
    description:
      "Create a sustainable, locally-grown workforce that keeps Ghana's tech ecosystem competitive.",
  },
];

const services = [
  {
    icon: Search,
    title: "Talent Matching",
    description:
      "We match the right skills to the right teams using structured assessments and role-fit profiling.",
  },
  {
    icon: ShieldCheck,
    title: "Skills Assessment & Vetting",
    description:
      "Every candidate is evaluated on technical skill, communication, and real-world problem solving.",
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    description:
      "Mentorship, portfolio reviews, and interview prep for professionals at every stage of their career.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Employer Hiring Support",
    description:
      "From role scoping to onboarding, we support hiring teams end-to-end so placements stick.",
  },
];

const specializations = [
  { icon: MonitorSmartphone, label: "Frontend Development" },
  { icon: Server, label: "Backend Development" },
  { icon: Code2, label: "Mobile Development" },
  { icon: Database, label: "Data Engineering" },
  { icon: LineChart, label: "Data Science & Analytics" },
  { icon: Palette, label: "UI / UX & Product Design" },
  { icon: Cloud, label: "DevOps & Cloud" },
  { icon: ShieldCheck, label: "QA & Security" },
];

const talentSteps = [
  "Create your profile in under 5 minutes",
  "Complete a short skills assessment",
  "Get matched to projects and roles",
  "Start earning and growing with KaziHub",
];

const employerSteps = [
  "Tell us the role, stack, and budget",
  "We curate a vetted shortlist",
  "Interview pre-screened candidates",
  "Hire and onboard with our support",
];

const forCompanies = [
  "Pre-vetted candidates — no wasted interviews",
  "Shortlists in days, not months",
  "No upfront fees — pay when you hire",
  "Dedicated hiring partner throughout",
];

const forProfessionals = [
  "Real projects with real teams",
  "Mentorship from senior engineers and leaders",
  "Portfolio, interview, and career support",
  "Free to join — no fees to apply",
];

/* ---------- Small helpers ---------- */

function SectionBadge({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-700">
      <Icon size={14} />
      {children}
    </span>
  );
}

function SectionHeader({ badge, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {badge}
      <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-slate-600">{description}</p>
      )}
    </div>
  );
}

/* ---------- Page ---------- */

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* ===================== HERO ===================== */}
      <section className="flex items-center justify-center px-5 pb-12 pt-10 sm:pb-16 sm:pt-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column (below image on mobile) */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <SectionBadge icon={Sparkles}>
              🇬🇭 Built for Ghana's tech talent
            </SectionBadge>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Welcome to <span className="text-orange-500">KaziTech</span>
            </h1>

            <p className="mt-4 text-base text-slate-600 sm:text-lg lg:max-w-lg">
              Connecting technology talent with opportunities in Ghana — from
              bootcamp grads to senior engineers, we match skills with the
              teams that need them.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/hire-talent"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Hire Tech Talent
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/join-workforce"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-500 px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <Play size={16} />
                Join Our Workforce
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6 text-xs text-slate-500 lg:justify-start">
              <span><strong className="text-slate-900">500+</strong> placements</span>
              <span className="h-3 w-px bg-slate-200" />
              <span><strong className="text-slate-900">3 wks</strong> avg. hire</span>
              <span className="h-3 w-px bg-slate-200" />
              <span><strong className="text-slate-900">94%</strong> retention</span>
            </div>
          </div>

          {/* Image column (first on mobile) */}
          <div className="relative order-1 mx-auto w-full max-w-lg lg:order-2">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-orange-200/60 via-amber-100/50 to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_-20px_rgba(249,115,22,0.35)]">
              <img
                src={heroImage}
                alt="KaziHub talent collaborating on a technology project"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white">
                  <ArrowRight size={16} />
                </span>
                <div className="text-left">
                  <div className="text-xs font-semibold text-slate-900">
                    New roles weekly
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Apply in minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MISSION & OBJECTIVES ===================== */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            badge={<SectionBadge icon={Target}>Our Mission</SectionBadge>}
            title={
              <>
                Building Ghana's <span className="text-orange-500">tech future</span>
              </>
            }
            description="KaziHub exists to connect technology talent with the companies building Africa's next generation of products — and to make that connection fast, fair, and reliable."
          />

          {/* Mission statement panel */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 text-center sm:p-8">
            <p className="text-base leading-relaxed text-slate-800 sm:text-lg">
              We believe skills matter more than credentials. Our platform
              gives every trained technologist a fair shot at the roles they
              deserve — and gives employers a reliable way to find them.
            </p>
          </div>

          {/* Business objectives */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {objectives.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_12px_30px_-12px_rgba(249,115,22,0.35)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            badge={<SectionBadge icon={BriefcaseBusiness}>What We Do</SectionBadge>}
            title={
              <>
                Services we <span className="text-orange-500">offer</span>
              </>
            }
            description="Everything we do is built to shorten the distance between skilled people and the teams that need them."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_12px_30px_-12px_rgba(249,115,22,0.35)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TECH SKILLS ===================== */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-5xl">
          <SectionHeader
            badge={<SectionBadge icon={Layers}>Specializations</SectionBadge>}
            title={
              <>
                Technology skills we <span className="text-orange-500">cover</span>
              </>
            }
            description="We place talent across the full stack — from frontend to data to product."
          />

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {specializations.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-[0_8px_22px_-10px_rgba(249,115,22,0.35)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-medium text-slate-800">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            badge={<SectionBadge icon={Zap}>How It Works</SectionBadge>}
            title={
              <>
                From skills to <span className="text-orange-500">placement</span>
              </>
            }
            description="Two paths, one platform — whether you're building a team or building your career."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* For Talent */}
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Users size={20} />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                    For Professionals
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Join the workforce
                  </h3>
                </div>
              </div>

              <ol className="mt-6 space-y-3">
                {talentSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-sm text-slate-700">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <Link
                to="/join-workforce"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition hover:text-orange-700"
              >
                Start your application
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* For Employers */}
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Building2 size={20} />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                    For Companies
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Hire with confidence
                  </h3>
                </div>
              </div>

              <ol className="mt-6 space-y-3">
                {employerSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-sm text-slate-700">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <Link
                to="/hire-talent"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition hover:text-orange-700"
              >
                Request talent
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            badge={<SectionBadge icon={CheckCircle2}>Why KaziHub</SectionBadge>}
            title={
              <>
                Why teams and talent <span className="text-orange-500">choose us</span>
              </>
            }
            description="Whether you're hiring or job-hunting, the platform is designed to remove friction at every step."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* For Companies */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-orange-200 hover:shadow-[0_12px_30px_-12px_rgba(249,115,22,0.35)] sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <Building2 size={22} />
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  For Companies
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {forCompanies.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-orange-500"
                    />
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/hire-talent"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Hire Tech Talent
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* For Professionals */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-orange-200 hover:shadow-[0_12px_30px_-12px_rgba(249,115,22,0.35)] sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <Users size={22} />
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  For Professionals
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {forProfessionals.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-orange-500"
                    />
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/join-workforce"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-orange-500 px-5 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Join Our Workforce
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="px-5 pb-20 pt-4">
        <div className="mx-auto w-full max-w-4xl rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Ready to get <span className="text-orange-500">started?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-slate-600">
            Whether you're hiring or job-hunting, KaziHub is where Ghana's
            tech talent and tech teams meet.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/hire-talent"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Hire Tech Talent
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/join-workforce"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-500 px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Join Our Workforce
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}