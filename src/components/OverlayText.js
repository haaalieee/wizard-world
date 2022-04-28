import React from "react";
import { Html } from "@react-three/drei";
import { Button } from "antd";
import { useCallOut, useCallOutUpdate } from "../context/WizardContext";
import { Link } from "wouter";
import "antd/dist/antd.css";

/*-- Data for overlay text, export this when data is dynamic --*/
const attractions = [
  {
    name: "Dragon Bump Ride",
    question: "Hi, Do you want to experience riding a dragon?",
    world: "Dragon",
    link: 0,
    location: "/dragon-world"
  }
];

export default function OverlayText({ index, position, rotation }) {
  
  /*-- Get context update for callout states --*/
  const isVisible = useCallOut();
  const toggleCallOut = useCallOutUpdate();

  const question = attractions.map((data) => data.question);
  const location = attractions.map((data) => data.location);
  
  return (
    <mesh position={position} rotation={rotation}>
      <sphereGeometry args={[0, 0, 0]} />
      <meshBasicMaterial color="white" />
      <Html distanceFactor={3} position={[0, 0, 0.1]} transform>
        {isVisible === true && (
          <div className="callouts-bottom">
            <p>{question[index]}</p>
            <div className="callouts-btn-wrapper">
              <Button ghost onClick={toggleCallOut}>No</Button>
              <Link href={location[index]}>
                <Button type="primary">Yes</Button>
              </Link>
            </div>
          </div>
        )}
      </Html>
    </mesh>
  );
}
