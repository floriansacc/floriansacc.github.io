import Box from "./Box";
import { Canvas } from "@react-three/fiber";

export default function MyScene(props) {
  const toStyleDiv = {
    position: "fixed",
    zIndex: "5",
    width: "500px",
    height: "500px",
  };

  return (
    <div style={toStyleDiv}>
      <Canvas>
        <Box position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
