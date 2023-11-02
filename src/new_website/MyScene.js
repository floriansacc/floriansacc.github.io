import Box from "./Box";
import { Canvas } from "@react-three/fiber";

export default function MyScene(props) {
  const toStyleDiv = {
    position: "fixed",
    zIndex: "5",
  };

  return (
    <div style={toStyleDiv}>
      <Canvas>
        <ambientLight />
        <Box position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
