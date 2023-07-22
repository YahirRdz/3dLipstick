import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Avatar } from "./Avatar";
import { useThree } from "@react-three/fiber";

export const Experience = () => {
  const map = useTexture("/textures/office.jpg");
  const viewport = useThree((state) => state.viewport);

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset='sunset' />
      <OrbitControls />
      <Avatar position={[0, 1, 5]} scale={3} />
      <mesh>
        <sphereGeometry args={[10, 64, 64]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </>
  );
};
