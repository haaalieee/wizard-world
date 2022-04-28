import React, { useContext, useState } from "react";

const CallOutContext = React.createContext();
const CallOutUpdateContext = React.createContext();

export function useCallOut() {
  return useContext(CallOutContext);
}

export function useCallOutUpdate() {
  return useContext(CallOutUpdateContext);
}

export function WizardProvider({ children }) {
  const [callOut, setCallOut] = useState(false);

  function toggleCallOut() {
    setCallOut((prevCallOut) => !prevCallOut);
  }

  return (
    <CallOutContext.Provider value={callOut}>
      <CallOutUpdateContext.Provider value={toggleCallOut}>
        {children}
      </CallOutUpdateContext.Provider>
    </CallOutContext.Provider>
  );
}
