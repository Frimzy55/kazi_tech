import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BriefcaseBusiness, ArrowUpRight, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Join Our Workforce", path: "/join-workforce" },
  { name: "Hire Tech Talent", path: "/hire-talent" },
  { name: "Success Stories", path: "/success-stories" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    [
      "group relative inline-flex items-center py-1 text-sm font-medium transition-all duration-300",
      "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:mx-auto",
      "after:h-[2px] after:w-full after:rounded-full after:origin-center after:scale-x-0",
      "after:bg-gradient-to-r after:from-orange-400 after:via-orange-500 after:to-amber-400",
      "after:transition-transform after:duration-300 after:ease-out",
      "hover:after:scale-x-100 hover:after:shadow-[0_0_10px_rgba(249,115,22,0.55)]",
      "hover:-translate-y-0.5 hover:drop-shadow-[0_0_6px_rgba(249,115,22,0.45)]",
      isActive
        ? "text-orange-600 after:scale-x-100 after:shadow-[0_0_10px_rgba(249,115,22,0.55)]"
        : "text-slate-600 hover:text-orange-500",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 rounded",
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "flex items-center rounded-xl px-4 py-3 text-sm transition-all duration-200",
      isActive
        ? "bg-orange-50 font-semibold text-orange-600"
        : "font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-600",
    ].join(" ");

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Brand */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm transition-all duration-300 ease-out group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-[0_6px_20px_-4px_rgba(249,115,22,0.6)]">
              <BriefcaseBusiness size={24} />
            </span>
            <span>
              <span className="block text-xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-orange-600">
                Kazi<span className="text-orange-500">Tech</span>
              </span>
              <span className="block text-[9px] font-semibold tracking-[0.16em] text-slate-500 transition-colors duration-300 group-hover:text-orange-500">
                TECHNOLOGY WORKFORCE
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={linkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/hire-talent"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-[0_10px_24px_-8px_rgba(249,115,22,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 lg:inline-flex"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />
            <span className="relative">Hire Tech Talent</span>
            <ArrowUpRight
              size={17}
              className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 active:scale-95 lg:hidden"
          >
            <span className="relative h-4 w-6" aria-hidden="true">
              <span className="absolute left-0 top-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-out" />
              <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-current transition-all duration-300 ease-out" />
              <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-out" />
            </span>
          </button>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Right-side drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <span className="text-base font-extrabold tracking-tight text-slate-900">
            Kazi<span className="text-orange-500">Tech</span>
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 active:scale-95"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <li
                key={link.path}
                style={{
                  transitionDelay: menuOpen ? `${80 + i * 40}ms` : "0ms",
                }}
                className={`transition-all duration-300 ease-out ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-6 opacity-0"
                }`}
              >
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={mobileLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-slate-200 px-4 py-4">
          <Link
            to="/hire-talent"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-600 active:scale-[0.98]"
          >
            Hire Tech Talent
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </aside>
    </>
  );
}