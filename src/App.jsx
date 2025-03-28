import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Timeline from "./sections/Timeline";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const StyledApp = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [searchParams]);
  return (
    <StyledApp>
      <Navbar />
      <Hero />
      <Canvas camera={{ position: [200, 200, 350], fov: 75 }}>
        <Scene />
      </Canvas>
      <About id="about" />
      <Skills />
      <Experience id="work" />
      <Timeline />
      <Testimonial />
      <Contact id="contact" />
    </StyledApp>
  );
}

export default App;
