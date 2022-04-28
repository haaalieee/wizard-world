import React, { createContext, useState } from "react";

export const TransitionContext = createContext();

export function TransitionContextProvider({ children }) {
  const [preset, setPreset] = useState("roomToBottom");
  const [enterAnimation, setEnterAnimation] = useState("");
  const [exitAnimation, setExitAnimation] = useState("");

  return (
    <TransitionContext.Provider
      value={{
        preset,
        enterAnimation,
        exitAnimation,
        setPreset,
        setEnterAnimation,
        setExitAnimation
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}
