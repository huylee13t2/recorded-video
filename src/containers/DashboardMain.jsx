import React from 'react';
import { node, PropTypes } from "prop-types";
import { Route, Switch } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
  Header,
  SliderBar,
} from './index';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Dashboard } from '../components';
import Recorder from './Recorder';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class DashboardMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />

        <Header />

        <SliderBar />

        <main className={classes.content}>
          <div className={classes.toolbar} />

          <div className="content">
            <Switch>
              <Route exact path={this.props.match.url} component={Dashboard} />
              <Route exact path={`${this.props.match.url}recorder-video/:conferenceId`} component={Recorder} />
            </Switch>
          </div>

        </main>
      </div>
    );
  }
}

DashboardMain.propTypes = {
  classes: PropTypes.object.isRequired,
  children: node,
};

export default withStyles(styles)(DashboardMain);