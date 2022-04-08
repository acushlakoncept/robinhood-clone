import { createContext, useEffect, useState } from "react";

export const RobinhoodContext = createContext();

export const RobinhoodProvider = ({ children }) => {
  return (
    <RobinhoodContext.Provider value={{}}>
      {children}
    </RobinhoodContext.Provider>
  )
}