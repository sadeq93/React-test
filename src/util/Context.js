import React from "react";
export const Modules = React.createContext(null);
export const ModuleProvider = ({ children }) => {
  return <Modules.Provider value="rank">{children}</Modules.Provider>;
};
