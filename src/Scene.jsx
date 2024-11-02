import { useRef } from "react";
import { Environment, OrbitControls, useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";
import { Jsf } from "../public/Jsf";
import {
	Stars,
	CameraShake,
	Clouds,
	Cloud,
	RandomizedLight,
} from "@react-three/drei";
import * as THREE from "three";

const Scene = () => {
	const directionallightRef = useRef();
	useHelper(directionallightRef, DirectionalLightHelper, 0.5, "purple");

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
			{/* <CameraShake
				maxYaw={0.1} // Max amount camera can yaw in either direction
				maxPitch={0.1} // Max amount camera can pitch in either direction
				maxRoll={0.1} // Max amount camera can roll in either direction
				yawFrequency={0.1} // Frequency of the the yaw rotation
				pitchFrequency={0.1} // Frequency of the pitch rotation
				rollFrequency={0.1} // Frequency of the roll rotation
				intensity={1} // initial intensity of the shake
				decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
			/> */}
			<RandomizedLight
				castShadow
				amount={8}
				frames={100}
				position={[5, 5, -10]}
			/>

			{/* <Environment preset='night' /> */}
			<OrbitControls enableZoom={false} />
		</>
	);
};

export default Scene;
