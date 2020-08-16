import React, { createContext, useState, useContext } from 'react';

interface ScoreContextData {
  scoreEndGame: number;
  setScoreEndGame(score: number): void;
}

const ScoreContext = createContext<ScoreContextData>({} as ScoreContextData);

  const ScoreProvider: React.FC = ({ children }) => {
    const [score, setScore] =  useState(0);

  function setScoreEndGame(scr: number) {
    setScore(scr);
  }

  return (
    <ScoreContext.Provider value={{ scoreEndGame: score, setScoreEndGame}}>
      {children}
    </ScoreContext.Provider>
  );
};

function useScore(): ScoreContextData {
  const context = useContext(ScoreContext);
  return context;
}

export { ScoreProvider, useScore };