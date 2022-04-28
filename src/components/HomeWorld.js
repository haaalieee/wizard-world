import React from "react";
import BaseContainer from "./BaseContainer";
import Autowizard from "./Autowizard";
import Littledragon from "./Littledragon";
import Crystal from "./Crystal";
import { WizardProvider } from "../context/WizardContext";
import { a } from "@react-spring/three";

export default function HomeWorld({ ...props }) {
  return (
    <a.group {...props}>
      <Littledragon
        position={[-18, -2, -8]}
        scale={0.01}
        rotation={[0, 1, 0]}
      />
      <Crystal position={[11, -5.4, 2]} scale={0.02} />
      <WizardProvider>
        <Autowizard
          scale={0.15}
          position={[-14, -6.8, 0.4]}
          rotation={[0, 1.5, 0]}
        />
      </WizardProvider>
      <BaseContainer
        position={[0, -18, 0]}
        scale={2.2}
        rotation={[0, 2.4, 0]}
      />
    </a.group>
  );
}
