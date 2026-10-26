
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BriefcaseBusiness,
  ArrowUpRight,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Join Our Workforce", path: "/join-workforce" },
  { name: "Hire Tech Talent", path: "/hire-talent" },
  { name: "Success Stories", path: "/success-stories" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close sidebar with Escape and prevent background scrolling.
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    [
      "group relative inline-flex items-center py-1 text-sm font-medium",
      "transition-all duration-300 ease-out",
      "after:content-[''] after:absolute after:left-0 after:right-0",
      "after:-bottom-1 after:mx-auto after:h-[2px] after:w-full",
      "after:origin-center after:scale-x-0 after:rounded-full",
      "after:bg-gradient-to-r after:from-orange-400 after:via-orange-500 after:to-amber-400",
      "after:transition-transform after:duration-300",
      "hover:after:scale-x-100",
      "hover:-translate-y-0.5 hover:drop-shadow-[0_0_6px_rgba(249,115,22,0.35)]",
      isActive
        ? "text-orange-600 after:scale-x-100"
        : "text-slate-600 hover:text-orange-500",
      "focus-visible:outline-none focus-visible:ring-2",
      "focus-visible:ring-orange-400 focus-visible:ring-offset-2 rounded",
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "group flex items-center justify-between rounded-xl px-4 py-3",
      "text-sm transition-all duration-300 ease-out",
      "hover:translate-x-1",
      isActive
        ? "bg-orange-50 font-semibold text-orange-600 shadow-sm"
        : "font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600",
    ].join(" ");

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Brand */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md shadow-orange-500/20 transition-all duration-500 ease-out group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/40">
              <span className="absolute inset-0 rounded-xl bg-orange-400 opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-20" />

              <BriefcaseBusiness
                size={24}
                className="relative transition-transform duration-500 group-hover:scale-110"
              />
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
            {navLinks.map((link, index) => (
              <div
                key={link.path}
                className="animate-[fadeInDown_0.5s_ease-out_both]"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={linkClass}
                >
                  {link.name}
                </NavLink>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/hire-talent"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 lg:inline-flex"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />

            <span className="relative">Hire Tech Talent</span>

            <ArrowUpRight
              size={17}
              className="relative transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>

          {/* Orange animated hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-sidebar"
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-orange-200 bg-white text-orange-500 transition-all duration-300 hover:rotate-3 hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600 active:scale-90 lg:hidden"
          >
            <span className="relative h-5 w-6" aria-hidden="true">
              <span className="absolute left-0 top-1 h-[2px] w-full rounded-full bg-current transition-all duration-300 group-hover:translate-y-0.5" />

              <span className="absolute left-0 top-[9px] h-[2px] w-full rounded-full bg-current transition-all duration-300 group-hover:w-4" />

              <span className="absolute bottom-1 left-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </nav>
      </header>

      {/* Animated backdrop */}
      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-slate-950/50 backdrop-blur-[3px] transition-all duration-500 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile sidebar */}
      <aside
        id="mobile-sidebar"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[85%] max-w-sm flex-col overflow-hidden bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Animated watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
        >
          <span
            className={`select-none whitespace-nowrap -rotate-[35deg] text-[4rem] font-black tracking-widest text-orange-500/[0.07] sm:text-[5rem] ${
              menuOpen
                ? "animate-[watermarkFloat_7s_ease-in-out_infinite]"
                : ""
            }`}
          >
            KaziTech
          </span>

          <span className="absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-orange-400/[0.07] blur-3xl" />

          <span className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-300/[0.10] blur-3xl" />
        </div>

        {/* Sidebar header */}
        <div className="relative z-10 flex items-center justify-between border-b border-slate-200 bg-white/90 px-5 py-4 backdrop-blur-md">
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md shadow-orange-500/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
              <BriefcaseBusiness size={21} />
            </span>

            <span className="text-base font-extrabold tracking-tight text-slate-900">
              Kazi<span className="text-orange-500">Tech</span>

              <span className="mt-0.5 block text-[9px] font-semibold tracking-[0.13em] text-slate-500">
                TECHNOLOGY WORKFORCE
              </span>
            </span>
          </Link>

          {/* Close button */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:rotate-90 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 active:scale-90"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="relative z-10 flex-1 overflow-y-auto bg-white/50 px-4 py-6 backdrop-blur-[2px]">
          <p
            className={`mb-4 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 transition-all duration-500 ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
            style={{
              transitionDelay: menuOpen ? "150ms" : "0ms",
            }}
          >
            Explore KaziTech
          </p>

          <ul className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <li
                key={link.path}
                style={{
                  transitionDelay: menuOpen
                    ? `${180 + index * 90}ms`
                    : "0ms",
                }}
                className={`transition-all duration-500 ease-out motion-reduce:transition-none ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={mobileLinkClass}
                  onClick={closeMenu}
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={16}
                    className="text-orange-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Decorative accent */}
          <div
            className={`mx-4 mt-8 h-px origin-left bg-gradient-to-r from-orange-400 via-orange-200 to-transparent transition-transform duration-700 ${
              menuOpen ? "scale-x-100" : "scale-x-0"
            }`}
            style={{
              transitionDelay: menuOpen ? "500ms" : "0ms",
            }}
          />

          <p
            className={`px-4 pt-4 text-xs leading-6 text-slate-500 transition-all duration-500 ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
            style={{
              transitionDelay: menuOpen ? "550ms" : "0ms",
            }}
          >
            Connecting businesses with exceptional technology talent.
          </p>
        </nav>

        {/* Sidebar CTA */}
        <div
          className={`relative z-10 border-t border-slate-200 bg-white/90 px-4 py-5 backdrop-blur-md transition-all duration-500 ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{
            transitionDelay: menuOpen ? "300ms" : "0ms",
          }}
        >
          <Link
            to="/hire-talent"
            onClick={closeMenu}
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 active:scale-[0.98]"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative">Hire Tech Talent</span>

            <ArrowUpRight
              size={17}
              className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <p className="mt-3 text-center text-[10px] font-medium tracking-wide text-slate-400">
            YOUR NEXT OPPORTUNITY STARTS HERE
          </p>
        </div>
      </aside>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes watermarkFloat {
          0%, 100% {
            transform: rotate(-35deg) translate3d(0, 0, 0);
          }

          50% {
            transform: rotate(-32deg) translate3d(10px, -12px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </>
  );
}
