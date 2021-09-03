import React from 'react';
import Form from "./form";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import WhatAreTodos from "./whatAreTodos";

function App() {
  return (
      <Router>
        <Link to="/form"><input className="submit" type="submit" id="toForm"
                                        name="toForm"
                                        value="My TO-DO List"/></Link>
        <Link to="/whatAreTodos"><input className="submit" type="submit" id="whatAreTodos"
                                        name="whatAreTodos"
                                        value="What are to-dos?"/></Link>
        <Switch>
          <Route path="/form" component={Form}/>
          <Route path="/whatAreTodos" component={WhatAreTodos}/>
        </Switch>
      </Router>

      // <Form />
  );
}

export default App;
