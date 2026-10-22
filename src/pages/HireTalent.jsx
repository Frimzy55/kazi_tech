import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Building2,
  Users,
  BriefcaseBusiness,
  Calendar,
  MapPin,
  Wallet,
  X,
} from "lucide-react";

/* ---------------- Options ---------------- */

const specializations = [
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "Mobile Development",
  "Data Engineering",
  "Data Science & Analytics",
  "UI / UX & Product Design",
  "DevOps & Cloud",
  "QA & Testing",
  "Cybersecurity",
  "Product Management",
  "Other",
];

const experienceLevels = [
  "Junior (0–2 years)",
  "Mid-level (3–5 years)",
  "Senior (5–8 years)",
  "Lead / Principal (8+ years)",
  "Mixed team — multiple levels",
];

const engagementOptions = [
  "Short-term (under 6 months)",
  "Long-term (6+ months)",
  "Permanent hire",
];

const durationOptions = [
  "1–4 weeks",
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "12+ months",
  "Ongoing / permanent",
];

const workArrangementOptions = [
  { value: "remote", label: "Remote" },
  { value: "hybrid", label: "Hybrid" },
  { value: "onsite", label: "On-site" },
];

const teamSizeOptions = ["1", "2–5", "6–10", "11–20", "20+"];

const budgetTypes = ["hourly", "daily", "monthly", "project total"];

/* ---------------- Small helpers ---------------- */

const inputBase =
  "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:outline-none focus:ring-2 focus:ring-offset-0";

function fieldClass(hasError) {
  return `${inputBase} ${
    hasError
      ? "border-red-300 focus:border-red-400 focus:ring-red-200"
      : "border-slate-300 focus:border-orange-500 focus:ring-orange-200"
  }`;
}

function Field({ label, htmlFor, required, error, hint, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-baseline justify-between gap-2 text-sm font-medium text-slate-700"
      >
        <span>
          {label} {required && <span className="text-orange-500">*</span>}
        </span>
        {error && (
          <span className="text-xs font-normal text-red-600">{error}</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p className="mt-1 text-xs text-slate-500">{hint}</p>
      )}
    </div>
  );
}

function SectionCard({ icon: Icon, title, description, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
          <Icon size={20} />
        </span>
        <div>
          <h2 className="text-base font-bold text-slate-900">{title}</h2>
          {description && (
            <p className="mt-0.5 text-sm text-slate-600">{description}</p>
          )}
        </div>
      </div>
      <div className="mt-6 space-y-5">{children}</div>
    </div>
  );
}

/* ---------------- Page ---------------- */

export default function HireTalentRequest() {
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    companyWebsite: "",
    jobTitle: "",
    specialization: "",
    experienceLevel: "",
    teamSize: "",
    engagement: "",
    duration: "",
    startDate: "",
    workArrangement: "",
    location: "",
    budgetType: "monthly",
    budgetMin: "",
    budgetMax: "",
    additionalRequirements: "",
  });
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  /* ----- Skills tag input ----- */
  const addSkill = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const value = skillInput.trim().replace(/,$/, "");
      if (value && !skills.includes(value)) {
        setSkills((prev) => [...prev, value]);
      }
      setSkillInput("");
    } else if (e.key === "Backspace" && !skillInput && skills.length) {
      setSkills((prev) => prev.slice(0, -1));
    }
  };

  const removeSkill = (skill) =>
    setSkills((prev) => prev.filter((s) => s !== skill));

  /* ----- Validation ----- */
  const validate = () => {
    const errs = {};
    if (!form.companyName.trim()) errs.companyName = "Required";
    if (!form.contactName.trim()) errs.contactName = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contactEmail))
      errs.contactEmail = "Valid email required";
    if (!form.contactPhone.trim()) errs.contactPhone = "Required";
    if (!form.jobTitle.trim()) errs.jobTitle = "Required";
    if (!form.specialization) errs.specialization = "Required";
    if (skills.length === 0) errs.skills = "Add at least one skill";
    if (!form.experienceLevel) errs.experienceLevel = "Required";
    if (!form.teamSize) errs.teamSize = "Required";
    if (!form.engagement) errs.engagement = "Required";
    if (!form.duration) errs.duration = "Required";
    if (!form.startDate) errs.startDate = "Required";
    if (!form.workArrangement) errs.workArrangement = "Required";
    if (
      (form.workArrangement === "onsite" ||
        form.workArrangement === "hybrid") &&
      !form.location.trim()
    )
      errs.location = "Required for on-site/hybrid";
    if (!form.budgetMin || parseFloat(form.budgetMin) <= 0)
      errs.budgetMin = "Must be greater than 0";
    if (
      form.budgetMax &&
      parseFloat(form.budgetMax) < parseFloat(form.budgetMin)
    )
      errs.budgetMax = "Max must be ≥ min";
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      const first = document.querySelector("[aria-invalid='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      first?.focus({ preventScroll: true });
    }
    return Object.keys(errs).length === 0;
  };

  /* ----- Submit ----- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;
    setSubmitting(true);

    try {
      const payload = {
        ...form,
        skills,
        budgetMin: parseFloat(form.budgetMin),
        budgetMax: form.budgetMax ? parseFloat(form.budgetMax) : null,
      };

      const endpoint = `${import.meta.env.VITE_API_URL ?? ""}/api/talent-requests`;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitError(
        "We couldn't submit your request. Please try again or email hello@kazitech.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  /* ----- Success state ----- */
  if (submitted) {
    return (
      <section className="flex flex-1 items-center justify-center px-5 py-16">
        <div className="mx-auto w-full max-w-md text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-500">
            <CheckCircle2 size={36} />
          </span>
          <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Request received!
          </h1>
          <p className="mt-3 text-slate-600">
            Thanks for choosing KaziTech. We've sent a confirmation to{" "}
            <strong className="text-slate-900">{form.contactEmail}</strong>. A
            hiring partner will be in touch within{" "}
            <strong className="text-slate-900">1 business day</strong>.
          </p>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              What happens next
            </p>
            <ol className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="font-semibold text-orange-500">1.</span>
                We review your brief and confirm scope.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-orange-500">2.</span>
                We shortlist pre-vetted candidates from our network.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-orange-500">3.</span>
                You interview curated candidates — no spam, no waste.
              </li>
            </ol>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Back to home
            </Link>
            <Link
              to="/hire-talent"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-500 px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              View roles we place
            </Link>
          </div>
        </div>
      </section>
    );
  }

  /* ----- Form ----- */
  const needsLocation =
    form.workArrangement === "onsite" || form.workArrangement === "hybrid";

  return (
    <section className="flex flex-1 flex-col px-5 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          to="/hire-talent"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition hover:text-orange-600"
        >
          <ArrowLeft size={16} />
          Back to overview
        </Link>

        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-700">
          <Building2 size={14} />
          Employer Request
        </span>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Request <span className="text-orange-500">Tech Talent</span>
        </h1>
        <p className="mt-3 text-slate-600">
          Tell us who you're looking for and we'll curate a shortlist of
          pre-vetted candidates within days.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
          {/* ---------- Company ---------- */}
          <SectionCard
            icon={Building2}
            title="Company information"
            description="Who we should reply to."
          >
            <Field
              label="Company name"
              htmlFor="companyName"
              required
              error={errors.companyName}
            >
              <input
                id="companyName"
                value={form.companyName}
                onChange={update("companyName")}
                placeholder="e.g. Hubtel, mPharma, Zeepay"
                autoComplete="organization"
                aria-invalid={!!errors.companyName}
                className={fieldClass(errors.companyName)}
              />
            </Field>

            <Field
              label="Company website"
              htmlFor="companyWebsite"
              hint="Optional — helps us understand your business."
            >
              <input
                id="companyWebsite"
                type="url"
                value={form.companyWebsite}
                onChange={update("companyWebsite")}
                placeholder="https://yourcompany.com"
                autoComplete="url"
                className={fieldClass(false)}
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Contact name"
                htmlFor="contactName"
                required
                error={errors.contactName}
              >
                <input
                  id="contactName"
                  value={form.contactName}
                  onChange={update("contactName")}
                  placeholder="Your full name"
                  autoComplete="name"
                  aria-invalid={!!errors.contactName}
                  className={fieldClass(errors.contactName)}
                />
              </Field>

              <Field
                label="Work email"
                htmlFor="contactEmail"
                required
                error={errors.contactEmail}
              >
                <input
                  id="contactEmail"
                  type="email"
                  value={form.contactEmail}
                  onChange={update("contactEmail")}
                  placeholder="you@company.com"
                  autoComplete="email"
                  aria-invalid={!!errors.contactEmail}
                  className={fieldClass(errors.contactEmail)}
                />
              </Field>
            </div>

            <Field
              label="Phone number"
              htmlFor="contactPhone"
              required
              error={errors.contactPhone}
              hint="Include country code (+233 for Ghana)."
            >
              <input
                id="contactPhone"
                type="tel"
                value={form.contactPhone}
                onChange={update("contactPhone")}
                placeholder="+233 24 000 0000"
                autoComplete="tel"
                aria-invalid={!!errors.contactPhone}
                className={fieldClass(errors.contactPhone)}
              />
            </Field>
          </SectionCard>

          {/* ---------- Role ---------- */}
          <SectionCard
            icon={BriefcaseBusiness}
            title="Role requirements"
            description="What you need built."
          >
            <Field
              label="Job title"
              htmlFor="jobTitle"
              required
              error={errors.jobTitle}
            >
              <input
                id="jobTitle"
                value={form.jobTitle}
                onChange={update("jobTitle")}
                placeholder="e.g. Senior React Engineer, Product Designer"
                aria-invalid={!!errors.jobTitle}
                className={fieldClass(errors.jobTitle)}
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Specialization"
                htmlFor="specialization"
                required
                error={errors.specialization}
              >
                <select
                  id="specialization"
                  value={form.specialization}
                  onChange={update("specialization")}
                  aria-invalid={!!errors.specialization}
                  className={fieldClass(errors.specialization)}
                >
                  <option value="">Select…</option>
                  {specializations.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Experience level"
                htmlFor="experienceLevel"
                required
                error={errors.experienceLevel}
              >
                <select
                  id="experienceLevel"
                  value={form.experienceLevel}
                  onChange={update("experienceLevel")}
                  aria-invalid={!!errors.experienceLevel}
                  className={fieldClass(errors.experienceLevel)}
                >
                  <option value="">Select…</option>
                  {experienceLevels.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field
              label="Required skills"
              htmlFor="skills"
              required
              error={errors.skills}
              hint="Type a skill and press Enter. e.g. React, TypeScript, AWS."
            >
              <div
                className={`flex flex-wrap gap-2 rounded-lg border bg-white p-2 transition focus-within:ring-2 focus-within:ring-offset-0 ${
                  errors.skills
                    ? "border-red-300 focus-within:border-red-400 focus-within:ring-red-200"
                    : "border-slate-300 focus-within:border-orange-500 focus-within:ring-orange-200"
                }`}
              >
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      aria-label={`Remove ${skill}`}
                      className="rounded hover:bg-orange-100"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
                <input
                  id="skills"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={addSkill}
                  placeholder={
                    skills.length ? "Add another…" : "Press Enter to add"
                  }
                  className="min-w-[140px] flex-1 bg-transparent px-2 py-1 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
              </div>
            </Field>

            <Field
              label="Number of professionals needed"
              htmlFor="teamSize"
              required
              error={errors.teamSize}
            >
              <div className="flex flex-wrap gap-2">
                {teamSizeOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() =>
                      setForm((prev) => ({ ...prev, teamSize: opt }))
                    }
                    aria-invalid={!!errors.teamSize}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                      form.teamSize === opt
                        ? "border-orange-500 bg-orange-500 text-white shadow-sm"
                        : "border-slate-300 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </Field>
          </SectionCard>

          {/* ---------- Engagement ---------- */}
          <SectionCard
            icon={Calendar}
            title="Engagement & timeline"
            description="How long, when, and where."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Engagement type"
                htmlFor="engagement"
                required
                error={errors.engagement}
              >
                <select
                  id="engagement"
                  value={form.engagement}
                  onChange={update("engagement")}
                  aria-invalid={!!errors.engagement}
                  className={fieldClass(errors.engagement)}
                >
                  <option value="">Select…</option>
                  {engagementOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Project duration"
                htmlFor="duration"
                required
                error={errors.duration}
              >
                <select
                  id="duration"
                  value={form.duration}
                  onChange={update("duration")}
                  aria-invalid={!!errors.duration}
                  className={fieldClass(errors.duration)}
                >
                  <option value="">Select…</option>
                  {durationOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field
              label="Expected start date"
              htmlFor="startDate"
              required
              error={errors.startDate}
            >
              <input
                id="startDate"
                type="date"
                value={form.startDate}
                onChange={update("startDate")}
                aria-invalid={!!errors.startDate}
                className={fieldClass(errors.startDate)}
              />
            </Field>

            <Field
              label="Work arrangement"
              htmlFor="workArrangement"
              required
              error={errors.workArrangement}
            >
              <div className="flex flex-wrap gap-2">
                {workArrangementOptions.map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        workArrangement: value,
                      }))
                    }
                    aria-invalid={!!errors.workArrangement}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                      form.workArrangement === value
                        ? "border-orange-500 bg-orange-500 text-white shadow-sm"
                        : "border-slate-300 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </Field>

            {needsLocation && (
              <Field
                label="Location"
                htmlFor="location"
                required
                error={errors.location}
                hint="City or office address."
              >
                <div className="relative">
                  <MapPin
                    size={16}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="location"
                    value={form.location}
                    onChange={update("location")}
                    placeholder="e.g. Accra, Ghana"
                    aria-invalid={!!errors.location}
                    className={`${fieldClass(errors.location)} pl-9`}
                  />
                </div>
              </Field>
            )}
          </SectionCard>

          {/* ---------- Budget ---------- */}
          <SectionCard
            icon={Wallet}
            title="Budget"
            description="Your range helps us match the right talent level."
          >
            <Field label="Budget type" htmlFor="budgetType" required>
              <select
                id="budgetType"
                value={form.budgetType}
                onChange={update("budgetType")}
                className={fieldClass(false)}
              >
                {budgetTypes.map((s) => (
                  <option key={s} value={s}>
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </option>
                ))}
              </select>
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Minimum"
                htmlFor="budgetMin"
                required
                error={errors.budgetMin}
              >
                <div className="relative">
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
                    GHS
                  </span>
                  <input
                    id="budgetMin"
                    type="number"
                    min="1"
                    step="1"
                    value={form.budgetMin}
                    onChange={update("budgetMin")}
                    placeholder="e.g. 5000"
                    aria-invalid={!!errors.budgetMin}
                    className={`${fieldClass(errors.budgetMin)} pl-14`}
                  />
                </div>
              </Field>

              <Field
                label="Maximum"
                htmlFor="budgetMax"
                error={errors.budgetMax}
                hint="Optional"
              >
                <div className="relative">
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
                    GHS
                  </span>
                  <input
                    id="budgetMax"
                    type="number"
                    min="1"
                    step="1"
                    value={form.budgetMax}
                    onChange={update("budgetMax")}
                    placeholder="e.g. 10000"
                    aria-invalid={!!errors.budgetMax}
                    className={`${fieldClass(errors.budgetMax)} pl-14`}
                  />
                </div>
              </Field>
            </div>

            <Field
              label="Additional requirements"
              htmlFor="additionalRequirements"
              hint="Optional — anything else we should know. e.g. must-have tools, languages, time zone overlap."
            >
              <textarea
                id="additionalRequirements"
                rows={4}
                value={form.additionalRequirements}
                onChange={update("additionalRequirements")}
                placeholder="e.g. Must overlap with GMT working hours; experience with fintech products preferred."
                className={fieldClass(false)}
              />
            </Field>
          </SectionCard>

          {/* ---------- Errors + submit ---------- */}
          {submitError && (
            <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
              {submitError}
            </div>
          )}

          <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              We'll confirm scope within 1 business day. No upfront fees.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Submit request
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}