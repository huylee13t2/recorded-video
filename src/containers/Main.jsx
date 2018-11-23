import React from "react";
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  DashboardMain,
  Login,
  Register,
} from "./index";

import { Provider } from 'react-redux';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { store } = this.props;
    
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="" exact component={DashboardMain} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

Main.propTypes = {
  store: PropTypes.object.isRequired
}

export default Main;