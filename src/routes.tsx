import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { DifficultyProvider } from './contexts/difficulty';
import { ScoreProvider } from './contexts/score'

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import About from './pages/About';
import Ranking from './pages/Ranking';
import Score from './pages/Score';

function Routes() {
  return (
    <BrowserRouter>
      <DifficultyProvider>
        <Route path="/" exact component={Home} />
        <ScoreProvider>
          <Route path="/quiz" component={Quiz} />
          <Route path="/score" component={Score} />
        </ScoreProvider>
      </DifficultyProvider>
      <Route path="/about" component={About} />
      <Route path="/ranking" component={Ranking} />
    </BrowserRouter>
  );
}

export default Routes;