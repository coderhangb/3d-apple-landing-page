import { Environment, Lightformer } from "@react-three/drei";

function StudioLight() {
  return (
    <group name="light">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 5, -5]}
            scale={10}
          />

          <Lightformer
            form="rect"
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
          />
        </group>
      </Environment>

      <spotLight position={[-2, 10, 5]} angle={0.15} intensity={0.6} />

      <spotLight position={[0, -25, 10]} angle={0.15} intensity={0.6} />

      <spotLight position={[0, 15, 5]} angle={0.15} intensity={3.15} />
    </group>
  );
}

export default StudioLight;
