import HeroSection from "./components/HeroSection";
import MerciSection from "./components/MerciSection";
import SouvenirSection from "./components/SouvenirSection";
import FutureSection from "./components/FutureSection";
import BadgeSection from "./components/BadgeSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <HeroSection />
      <MerciSection />
      <SouvenirSection />
      <FutureSection />
      <BadgeSection />
      <Footer />
    </main>
  );
}
