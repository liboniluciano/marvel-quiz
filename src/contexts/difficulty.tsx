import React, { createContext, useState, useContext } from 'react';

interface DifficultyContextData {
  difficultyGame: string;
  setDifficultyGame(difficulty: string): void;
}

const DifficultyContext = createContext<DifficultyContextData>({} as DifficultyContextData);

  const DifficultyProvider: React.FC = ({ children }) => {
  const [difficulty, setDifficulty] =  useState('');

  function setDifficultyGame(diff: string) {
    setDifficulty(diff);
  }

  return (
    <DifficultyContext.Provider value={{ difficultyGame: difficulty, setDifficultyGame}}>
      {children}
    </DifficultyContext.Provider>
  );
};

function useDifficulty(): DifficultyContextData {
  const context = useContext(DifficultyContext);
  return context;
}

export { DifficultyProvider, useDifficulty };