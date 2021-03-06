/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Anthony Yanez (https://sketchfab.com/paulyanez)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/crystal-ball-23e1b3d8c0f843e0960c673d932712f2
title: Crystal Ball
*/
import * as THREE from "three";
import React, { useEffect, useState } from "react";
import { useGLTF, useAnimations, useCursor } from "@react-three/drei";
import { useLocation } from "wouter";


export default function Crystal({ v = new THREE.Vector3(), ...props }) {
  const { scene, animations } = useGLTF("/crystal.gltf");
  const { ref, actions } = useAnimations(animations);
  
  /*--- Add hover state to object --*/
  const [active, setActive] = useState(false);

   /*--- Set click location of object --*/
  const [, setLocation] = useLocation();

  useCursor(active);

  useEffect(() => {
    /*--- Play default animation object-*/
    actions["Take 001"].play();
    
  }, [actions]);

  return (
    <primitive
      object={scene}
      {...props}
      ref={ref}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
      onClick={() => setLocation("/ballpit-treasure")}
    />
  );
}

useGLTF.preload("/crystal.gltf");
