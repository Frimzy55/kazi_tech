import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Upload,
  X,
  CheckCircle2,
  AlertCircle,
  Loader2,
  BriefcaseBusiness,
  FileText,
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
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "5–8 years",
  "8+ years",
];

const educationLevels = [
  "Senior High School",
  "Diploma / HND",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctorate",
  "Self-taught / Bootcamp",
];

const availabilityOptions = [
  "Available now",
  "Available in 2 weeks",
  "Available in 1 month",
  "Available in 2+ months",
  "Currently employed — open to offers",
];

const engagementOptions = [
  "Full-time",
  "Part-time",
  "Contract",
  "Freelance / Project-based",
  "Internship",
];

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

export default function JoinWorkforceApply() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    specialization: "",
    experience: "",
    bio: "",
    education: "",
    institution: "",
    certifications: "",
    availability: "",
    engagement: "",
    startDate: "",
    rateType: "monthly",
    rateAmount: "",
  });
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [cvFile, setCvFile] = useState(null);
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

  /* ----- CV upload ----- */
  const handleFile = (file) => {
    if (!file) return;
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type)) {
      setErrors((prev) => ({ ...prev, cv: "Upload a PDF or Word document." }));
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, cv: "File must be under 5 MB." }));
      return;
    }
    setCvFile(file);
    setErrors((prev) => ({ ...prev, cv: undefined }));
  };

  /* ----- Validation ----- */
  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email required";
    if (!form.phone.trim()) errs.phone = "Required";
    if (!form.location.trim()) errs.location = "Required";
    if (!form.specialization) errs.specialization = "Required";
    if (skills.length === 0) errs.skills = "Add at least one skill";
    if (!form.experience) errs.experience = "Required";
    if (!form.education) errs.education = "Required";
    if (!cvFile) errs.cv = "CV is required";
    if (!form.availability) errs.availability = "Required";
    if (!form.engagement) errs.engagement = "Required";
    if (!form.rateAmount || parseFloat(form.rateAmount) <= 0)
      errs.rateAmount = "Must be greater than 0";
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
      const body = new FormData();
      Object.entries(form).forEach(([k, v]) => body.append(k, v));
      body.append("skills", JSON.stringify(skills));
      body.append("cv", cvFile);

      const endpoint = `${import.meta.env.VITE_API_URL ?? ""}/api/applications`;
      const res = await fetch(endpoint, { method: "POST", body });

      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitError(
        "We couldn't submit your application. Please try again or email talent@kazitech.com."
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
            Application received!
          </h1>
          <p className="mt-3 text-slate-600">
            Thanks, <strong>{form.fullName.split(" ")[0] || "there"}</strong>. Our
            talent team will review your profile and reach out within{" "}
            <strong className="text-slate-900">3–5 business days</strong>.
          </p>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              What happens next
            </p>
            <ol className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="font-semibold text-orange-500">1.</span>
                We review your CV, skills, and availability.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-orange-500">2.</span>
                If there's a fit, we schedule a short screening call.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-orange-500">3.</span>
                We match you with projects and companies in our network.
              </li>
            </ol>
          </div>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Back to home
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    );
  }

  /* ----- Form ----- */
  return (
    <section className="flex flex-1 flex-col px-5 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-3xl">
        {/* Header */}
        <Link
          to="/join-workforce"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition hover:text-orange-600"
        >
          <ArrowLeft size={16} />
          Back to overview
        </Link>

        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-700">
          <BriefcaseBusiness size={14} />
          Talent Registration
        </span>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Join Our <span className="text-orange-500">Workforce</span>
        </h1>
        <p className="mt-3 text-slate-600">
          Complete the form below and we'll match your skills to real
          opportunities in Ghana's tech ecosystem.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
          {/* ---------- Personal ---------- */}
          <SectionCard
            icon={BriefcaseBusiness}
            title="Personal information"
            description="How we'll reach you."
          >
            <Field
              label="Full name"
              htmlFor="fullName"
              required
              error={errors.fullName}
            >
              <input
                id="fullName"
                value={form.fullName}
                onChange={update("fullName")}
                placeholder="e.g. Ama Mensah"
                autoComplete="name"
                aria-invalid={!!errors.fullName}
                className={fieldClass(errors.fullName)}
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Email address"
                htmlFor="email"
                required
                error={errors.email}
              >
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  className={fieldClass(errors.email)}
                />
              </Field>

              <Field
                label="Phone number"
                htmlFor="phone"
                required
                error={errors.phone}
                hint="Include country code (+233 for Ghana)."
              >
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+233 24 000 0000"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  className={fieldClass(errors.phone)}
                />
              </Field>
            </div>

            <Field
              label="Location"
              htmlFor="location"
              required
              error={errors.location}
              hint="City or town — e.g. Accra, Kumasi, Takoradi."
            >
              <input
                id="location"
                value={form.location}
                onChange={update("location")}
                placeholder="City / region"
                autoComplete="address-level2"
                aria-invalid={!!errors.location}
                className={fieldClass(errors.location)}
              />
            </Field>
          </SectionCard>

          {/* ---------- Professional ---------- */}
          <SectionCard
            icon={BriefcaseBusiness}
            title="Professional details"
            description="What you do best."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Primary specialization"
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
                label="Years of experience"
                htmlFor="experience"
                required
                error={errors.experience}
              >
                <select
                  id="experience"
                  value={form.experience}
                  onChange={update("experience")}
                  aria-invalid={!!errors.experience}
                  className={fieldClass(errors.experience)}
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
              label="Skills"
              htmlFor="skills"
              required
              error={errors.skills}
              hint="Type a skill and press Enter. e.g. React, Node.js, Figma."
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
                    skills.length
                      ? "Add another…"
                      : "e.g. React, Python — press Enter"
                  }
                  className="min-w-[140px] flex-1 bg-transparent px-2 py-1 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
              </div>
            </Field>

            <Field
              label="Short bio"
              htmlFor="bio"
              hint="Optional — 2–3 sentences about your background and what you're looking for."
            >
              <textarea
                id="bio"
                rows={4}
                value={form.bio}
                onChange={update("bio")}
                placeholder="I'm a frontend developer with 3 years of experience building React apps…"
                className={fieldClass(false)}
              />
            </Field>
          </SectionCard>

          {/* ---------- Education ---------- */}
          <SectionCard
            icon={FileText}
            title="Education & certifications"
            description="Your learning background."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Highest education"
                htmlFor="education"
                required
                error={errors.education}
              >
                <select
                  id="education"
                  value={form.education}
                  onChange={update("education")}
                  aria-invalid={!!errors.education}
                  className={fieldClass(errors.education)}
                >
                  <option value="">Select…</option>
                  {educationLevels.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Institution"
                htmlFor="institution"
                hint="Optional — school or program name."
              >
                <input
                  id="institution"
                  value={form.institution}
                  onChange={update("institution")}
                  placeholder="e.g. KNUST, ALX, MEST"
                  className={fieldClass(false)}
                />
              </Field>
            </div>

            <Field
              label="Certifications"
              htmlFor="certifications"
              hint="One per line. e.g. AWS Cloud Practitioner, Google UX Design."
            >
              <textarea
                id="certifications"
                rows={3}
                value={form.certifications}
                onChange={update("certifications")}
                placeholder="AWS Cloud Practitioner&#10;Google UX Design Certificate"
                className={fieldClass(false)}
              />
            </Field>
          </SectionCard>

          {/* ---------- CV ---------- */}
          <SectionCard
            icon={Upload}
            title="CV / Resume"
            description="PDF or Word · max 5 MB."
          >
            <Field label="Upload your CV" required error={errors.cv}>
              <label
                className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-8 text-center transition ${
                  errors.cv
                    ? "border-red-300 bg-red-50/50 hover:bg-red-50"
                    : "border-slate-300 bg-slate-50 hover:border-orange-300 hover:bg-orange-50"
                }`}
              >
                {cvFile ? (
                  <>
                    <CheckCircle2 className="text-orange-500" size={28} />
                    <span className="text-sm font-medium text-slate-900">
                      {cvFile.name}
                    </span>
                    <span className="text-xs text-slate-500">
                      {(cvFile.size / 1024 / 1024).toFixed(2)} MB · click to
                      replace
                    </span>
                  </>
                ) : (
                  <>
                    <Upload className="text-slate-400" size={28} />
                    <span className="text-sm font-medium text-slate-700">
                      Click to upload your CV
                    </span>
                    <span className="text-xs text-slate-500">
                      PDF, DOC, or DOCX · up to 5 MB
                    </span>
                  </>
                )}
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={(e) => handleFile(e.target.files?.[0])}
                  className="hidden"
                />
              </label>
            </Field>
          </SectionCard>

          {/* ---------- Availability ---------- */}
          <SectionCard
            icon={BriefcaseBusiness}
            title="Availability & engagement"
            description="When and how you'd like to work."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Availability"
                htmlFor="availability"
                required
                error={errors.availability}
              >
                <select
                  id="availability"
                  value={form.availability}
                  onChange={update("availability")}
                  aria-invalid={!!errors.availability}
                  className={fieldClass(errors.availability)}
                >
                  <option value="">Select…</option>
                  {availabilityOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Preferred engagement"
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
            </div>

            <Field
              label="Earliest start date"
              htmlFor="startDate"
              hint="Optional — a rough date or 'immediately'."
            >
              <input
                id="startDate"
                type="date"
                value={form.startDate}
                onChange={update("startDate")}
                className={fieldClass(false)}
              />
            </Field>
          </SectionCard>

          {/* ---------- Rate ---------- */}
          <SectionCard
            icon={BriefcaseBusiness}
            title="Expected rate"
            description="Your preferred compensation — in GHS or USD."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Rate type" htmlFor="rateType" required>
                <select
                  id="rateType"
                  value={form.rateType}
                  onChange={update("rateType")}
                  className={fieldClass(false)}
                >
                  <option value="hourly">Per hour</option>
                  <option value="daily">Per day</option>
                  <option value="monthly">Per month</option>
                </select>
              </Field>

              <Field
                label="Amount"
                htmlFor="rateAmount"
                required
                error={errors.rateAmount}
                hint="Numbers only. We'll confirm currency with you."
              >
                <div className="relative">
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
                    GHS
                  </span>
                  <input
                    id="rateAmount"
                    type="number"
                    min="1"
                    step="1"
                    value={form.rateAmount}
                    onChange={update("rateAmount")}
                    placeholder="e.g. 8000"
                    aria-invalid={!!errors.rateAmount}
                    className={`${fieldClass(errors.rateAmount)} pl-14`}
                  />
                </div>
              </Field>
            </div>
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
              By submitting, you agree to be contacted about relevant
              opportunities.
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
                  Submit application
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