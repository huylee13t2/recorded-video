import React from "react";
import {withRouter} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSelect = async value => {
    await this.props.history.push(`/recorder-video/${value}`);
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div className="dashboard">
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={this.handleClick}
        >
          New Press Conference
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => this.handleSelect(1)}>Announce Trade</MenuItem>
          <MenuItem onClick={() => this.handleSelect(2)}>Announce Team Win</MenuItem>
          <MenuItem onClick={() =>this.handleSelect(3)}>Announce Team Loss</MenuItem>
          <MenuItem onClick={() => this.handleSelect(4)}>Announce Playoff Berth</MenuItem>
          <MenuItem onClick={() => this.handleSelect(5)}>Announce Playoff Elimination</MenuItem>
        </Menu>

        
      </div>
    )
  }
}

export default withRouter(Dashboard);