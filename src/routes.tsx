import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { DifficultyProvider } from './contexts/difficulty';

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
        <Route path="/quiz" component={Quiz} />
      </DifficultyProvider>
      <Route path="/about" component={About} />
      <Route path="/ranking" component={Ranking} />
      <Route path="/score" component={Score} />
    </BrowserRouter>
  );
}

export default Routes;