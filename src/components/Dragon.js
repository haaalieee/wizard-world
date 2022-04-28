/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Théo Richard (https://sketchfab.com/theorichard)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/dragon-89888ad3d9694174ac0a38df184eb4c6
title: Dragon
*/
import { Vector3 } from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a, useTransition } from "@react-spring/three";
import Fireball from "./Fireball";

export default function Dragon({ ...props }) {
  const { scene, animations } = useGLTF("/dragon.gltf");
  const { ref, actions } = useAnimations(animations);
  const [isVisible, setIsVisible] = useState(false);

  const reffireball = useRef();
  const fb = useGLTF("/fireball.gltf");
  const fbactions = useAnimations(fb.animations, fb.scene);

  const vec = new Vector3();
  const viewport = useThree((state) => state.viewport);

  const transition = useTransition( isVisible, {
    from: { x: -100, y: -100, z: -100, opacity: 0},
    enter: { x: 0, y: 0, z: 0, opacity: 1},
    leave: { x: 0, y: 100, z: 0, opacity: 0}
  })

  useEffect(() => {
    actions["Take 001"].play();
    fbactions.actions["Default Take"].play();
  }, [actions, fbactions]);

  useFrame((state, delta) => {
    ref.current.position.lerp(
      vec.set((state.mouse.x * viewport.width) / 2, -12, 3),
      0.1
    );

    ref.current.updateMatrixWorld();
  });

  return (
    <a.mesh>
      {transition((style, item) => 
        item ? <Fireball scene={fb.scene} ref={reffireball} scale={2} /> : ""
      )}
      <primitive
        object={scene}
        {...props}
        ref={ref}
        onClick={() => {
          setIsVisible({isVisible: true});
        }}
      />
    </a.mesh>
  );
}

useGLTF.preload("/dragon.gltf");
