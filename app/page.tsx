// app/page.tsx
import Home from "./sections/Home";
// import About from "./sections/About";
// import Experience from "./sections/Experience";
// import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import AboutSection from "./sections/AboutSection";

export default function Page() {
  return (
    <>
      <Home />
      <AboutSection />
      <Projects />
      <Contact />
    </>
  );
}
