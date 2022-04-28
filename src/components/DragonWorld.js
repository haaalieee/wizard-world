import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import Planet from "./Planet";
import Dragon from "./Dragon";
import { a } from "@react-spring/three";

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 2, mouse.y * 1, camera.position.z),
      0.02
    )
  );
}

export default function DragonWorld({v = new THREE.Vector3(), ...props }) {
  const planet = useRef();

  useFrame(({ clock, camera }) => {
    planet.current.rotation.x = (clock.getElapsedTime() * Math.PI) / 7;

    camera.fov = THREE.MathUtils.lerp(
      camera.fov,
      90,
      0.05
    );

    camera.near = THREE.MathUtils.lerp(
      camera.near,
      5,
      0.05
    );

    camera.position.lerp(
      v.set(0, 2, 16),
      0.05
    );
    
    camera.updateProjectionMatrix();

  });

  return (
    <a.group {...props}>
      <Dragon scale={0.03} position={[0, -12, 3]} rotation={[0, 3.1, 0]} />
      <Planet
        scale={[0.11, 0.11, 0.11]}
        rotation={[0, 2, 2]}
        position={[0, -10, -10]}
        ref={planet}
      />
      <Rig />
    </a.group>
  );
}
