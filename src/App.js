import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JoinWorkforce from "./pages/JoinWorkforce";
import HireTalent from "./pages/HireTalent";
import SuccessStories from "./pages/SuccessStories";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative flex min-h-dvh flex-col overflow-hidden bg-white">
        {/* Watermark — unchanged */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 select-none"
        >
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />
          <div className="absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute bottom-[-10rem] left-1/3 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='160'><text x='0' y='80' font-family='ui-sans-serif, system-ui, sans-serif' font-size='42' font-weight='800' fill='%23F97316' transform='rotate(-18 160 80)'>KaziHub</text></svg>\")",
              backgroundSize: "320px 160px",
              backgroundRepeat: "repeat",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <BriefcaseBusiness
              size={520}
              strokeWidth={0.75}
              className="text-orange-500/[0.05]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-dvh flex-col">
          <Navbar />

          <main className="flex flex-1 flex-col overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/join-workforce" element={<JoinWorkforce />} />
              <Route path="/hire-talent" element={<HireTalent />} />
              <Route path="/success-stories" element={<SuccessStories />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}