import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Quiz from './pages/Quiz';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/quiz" exact component={Quiz} />
    </BrowserRouter>
  );
}

export default Routes;