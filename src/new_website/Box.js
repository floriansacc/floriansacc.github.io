import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Texture } from "three";

export default function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  // Return the view, these are regular Threejs elements expressed in JSX

  const colorSet = ["hotpink", "orange"];
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 2 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[2, 32, 16]} />
      <meshStandardMaterial
        alphaMap={null}
        color={hovered ? colorSet[0] : colorSet[1]}
      />
    </mesh>
  );
}
