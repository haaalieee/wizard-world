import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls, PerspectiveCamera } from "@react-three/drei";
import { WorldProvider } from "./context/WorldContext";
import Nav from "./components/Nav";
import Music from "./components/Music";
import WorldContainer from "./components/WorldContainer";
import { useLocation } from "wouter";
import { useTransition } from "@react-spring/core";
import { Stars } from "@react-three/drei";
import Loader from "./components/Loader";

function App() {
  // Current route
  const [location] = useLocation();

  // Animated wrapper props
  const transition = useTransition(location, {
    from: {
      opacity: 0,
      position: [0, 0, -20],
      rotation: [0, Math.PI, 0],
      scale: [0, 0, 0],
    },
    enter: {
      opacity: 1,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    leave: {
      opacity: 0,
      position: [0, 0, -10],
      rotation: [0, -Math.PI, 0],
      scale: [0, 0, 0],
    },
  });

  return (
    <div className="App">
      <Nav />
      <Music />
      <Canvas className="canvas">
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[0, 2, 16]} fov={50} near={5}>
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight
            castShadow
            intensity={2.25}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, 0, 0]}
          polar={[0, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <Suspense fallback={<Loader />}>
            <WorldProvider>
              <WorldContainer transition={transition} />
              <Stars radius={500} count={1000} factor={10} />
            </WorldProvider>
          </Suspense>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;
