import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header, SliderBar } from '.';
import { Dashboard } from '../components';
import Recorder from './Recorder';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class DashboardMain extends React.Component {
  state = {
    openBar: false,
  };

  handleDrawerOpen = () => {
    this.setState({ openBar: true });
  };

  handleDrawerClose = () => {
    this.setState({ openBar: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />

        <Header
          openBar={this.state.openBar}
          handleDrawerOpen={this.handleDrawerOpen}
          handleDrawerClose={this.handleDrawerClose}
        />

        <SliderBar
          openBar={this.state.openBar}
          handleDrawerClose={this.handleDrawerClose}
          handleDrawerOpen={this.handleDrawerOpen}
        />

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
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DashboardMain);