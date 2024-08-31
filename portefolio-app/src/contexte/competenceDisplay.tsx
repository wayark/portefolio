import React, { useState, createContext, ReactNode } from "react";

interface CompetenceDisplayContextType {
    competenceToDisplay: number;
    setCompetenceToDisplay: (competence: number) => void;
}

export const CompetenceDisplay = createContext<CompetenceDisplayContextType | undefined>(undefined);

interface CompetenceDisplayProviderProps {
    children: ReactNode;
}

export const CompetenceDisplayProvider: React.FC<CompetenceDisplayProviderProps> = ({ children }) => {
    const [competenceToDisplay, setCompetenceToDisplay] = useState<number>(1);

    return (
        <CompetenceDisplay.Provider value={{ competenceToDisplay, setCompetenceToDisplay }}>
            {children}
        </CompetenceDisplay.Provider>
    );
};
