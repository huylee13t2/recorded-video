import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  DashboardMain,
  Login,
  Register,
} from "./index";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="" exact component={DashboardMain} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    )
  }
}

export default Main;