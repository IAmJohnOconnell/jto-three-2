import { OrbitControls } from "@react-three/drei";
import { Jsf } from "../public/Jsf";
import { Stars, Clouds, Cloud, RandomizedLight } from "@react-three/drei";
import * as THREE from "three";

const Scene = () => {
	return (
		<>
			<Jsf />
			<Stars
				radius={100}
				depth={100}
				count={5000}
				factor={2}
				saturation={1}
				fade
				speed={3}
			/>
			<Clouds material={THREE.MeshBasicMaterial}>
				<Cloud
					seed={1}
					scale={50}
					color='#FFC86B'
					fade={10000}
					position={[-0, -0, -250]}
				/>
				<Cloud
					seed={2}
					scale={50}
					color='#666'
					fade={7000}
					position={[0, 50, 100]}
				/>
			</Clouds>
			<RandomizedLight
				castShadow
				amount={8}
				frames={100}
				position={[5, 5, -10]}
			/>
			<OrbitControls enableZoom={false} />
		</>
	);
};

export default Scene;
