import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import AboutSection from "./sections/About";
import Footer from "./sections/Footer";

export default function Page() {
  return (
    <>
      <Home />
      <AboutSection />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
