import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Timeline from "./sections/Timeline";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";

const StyledApp = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	// border-left: 1px solid #ffc86b;
	// border-right: 1px solid #ffc86b;
`;

function App() {
	return (
		<StyledApp>
			<Navbar />
			<Hero />
			<Canvas camera={{ position: [200, 200, 350], fov: 75 }}>
				<Scene />
			</Canvas>
			<About />
			<Skills />
			<Experience />
			<Timeline />
			<Testimonial />
			<Contact />
		</StyledApp>
	);
}

export default App;
