import React, { useRef, useState } from "react";
import { MeshStandardMaterial, MeshStandardMaterialParameters } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const colorMap = useLoader(TextureLoader, "PavingStones092_1K-JPG_Color.jpg");

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.003;
  });
  // Return the view, these are regular Threejs elements expressed in JSX

  const colorSet = ["hotpink", "orange"];
  return (
    <>
      {" "}
      <ambientLight intensity={0.2} />
      <directionalLight color="white" position={[10, 10, 5]} />
      <mesh
        {...props}
        ref={ref}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <sphereGeometry args={[3, 32, 16]} />
        <meshStandardMaterial
          roughness={"0.3"}
          color={hovered ? colorSet[0] : colorSet[1]}
        />
      </mesh>
    </>
  );
}
