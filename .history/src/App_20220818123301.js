import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { HomePage } from './homePage/HomePage';
import KPISPage from './kpisPage/KPISPage';
import ProjectDetails from './projectDetails/ProjectDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/kpis" component={KPISPage} />
        <Route exact path="/projectdetails" component={ProjectDetails} />
      </Switch>
    </Router>
  );
}

export default App;
