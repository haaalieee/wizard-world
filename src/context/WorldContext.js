import React, { useContext, useState } from "react";

const WorldContext = React.createContext();
const WorldUpdateContext = React.createContext();

export function useWorld() {
  return useContext(WorldContext);
}

export function useWorldUpdate() {
  return useContext(WorldUpdateContext);
}

export function WorldProvider({ children }) {
  const [world, setWorld] = useState(false);

  function toggleWorld() {
    setWorld((prevWorld) => !prevWorld);
    console.log(world);
  }

  return (
    <WorldContext.Provider value={world}>
      <WorldUpdateContext.Provider value={toggleWorld}>
        {children}
      </WorldUpdateContext.Provider>
    </WorldContext.Provider>
  );
}
