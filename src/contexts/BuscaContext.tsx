import React, { createContext, useState, useContext } from "react";

interface BuscaContextType {
  busca: string;
  setBusca: (value: string) => void;
}

const BuscaContext = createContext<BuscaContextType | undefined>(undefined);

export function BuscaProvider({ children }: { children: React.ReactNode }) {
  const [busca, setBusca] = useState<string>("");

  return (
    <BuscaContext.Provider value={{ busca, setBusca }}>
      {children}
    </BuscaContext.Provider>
  );
}

export function useBusca() {
  const context = useContext(BuscaContext);
  if (!context) {
    throw new Error("useBusca deve ser usado dentro de BuscaProvider");
  }
  return context;
}
