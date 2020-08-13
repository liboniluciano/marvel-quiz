import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { DifficultyProvider } from './contexts/difficulty';

import Home from './pages/Home';
import Quiz from './pages/Quiz';

function Routes() {
  return (
    <BrowserRouter>
      <DifficultyProvider>
        <Route path="/" exact component={Home} />
        <Route path="/quiz" exact component={Quiz} />
      </DifficultyProvider>
    </BrowserRouter>
  );
}

export default Routes;