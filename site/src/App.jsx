import { BrowserRouter, Routes, Route } from "./lib/router";
import ScrollToTop from "./components/ScrollToTop";
import Landing from "./pages/Landing";
import Kuwait from "./pages/Kuwait";
import Oman from "./pages/Oman";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/kuwait" element={<Kuwait />} />
        <Route path="/oman" element={<Oman />} />
      </Routes>
    </BrowserRouter>
  );
}
