import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Paper,
  Grid,
} from '@material-ui/core/';
import red from '@material-ui/core/colors/red';
import { AudioPlay } from "../components";
import {
  question1,
  question2,
  question3,
  question4,
  question5,
} from "../assets/audio/index";
import { AudioQuestion, RecorderVideo, PlayVideo } from "../components";


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 14,
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});


class Recorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoToken: null,
      isStart: false,
      showBg: false,
      isPlayAudio: false,
      srcAudio: null,
      showAsk: false,
      isDisabled: false,
    };
  }

  componentWillMount = () => {
  }

  componentDidMount() {
    // this.child.record();
  }


  handleAsk = () => {
    const { srcAudio } = this.state;

    if (srcAudio) {
      let index = srcAudio.indexOf(".");
      let value = Number(srcAudio.substring(index - 1, index)) + 1;
      // let value = srcAudio.substring(srcAudio.length - 5, srcAudio.length-4);
      console.log(value)
      value === 2 && this.setState({ srcAudio: question2 });
      value === 3 && this.setState({ srcAudio: question3 });
      value === 4 && this.setState({ srcAudio: question4 });
      value === 5 && this.setState({ srcAudio: question5 });
    } else {
      this.setState({ srcAudio: question1 });
    }
    this.setState({ showAsk: true });
    this.setState({ isDisabled: true })
  }

  stopRecorder = (value) => {
    this.setState({ videoToken: value });
    console.log(value)
  }

  endAsk = () => {
    this.setState({ isDisabled: false });
    this.setState({ showAsk: false });
  }

  render() {
    const { showBg } = this.state;
    const { classes } = this.props;

    return (
      <div className={`recorderVideo`}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper} style={{ position: "relative" }}>
              {
                showBg && <div className="recorderBg"></div>
              }
              <div className="recorderBg"></div>

              {
                !this.state.videoToken && <RecorderVideo stopRecorder={this.stopRecorder} />
              }

              {
                this.state.videoToken && <PlayVideo videoToken={this.state.videoToken} />
              }

              {
                this.state.isPlayAudio && <AudioPlay isPlayAudio={this.state.isPlayAudio} />
              }

              {
                this.state.isPlayAudio &&
                <div>
                  <Button variant="contained" color="secondary" disabled={this.state.isDisabled} className={styles.button} onClick={() => this.handleAsk()} >ASK</Button>
                </div>
              }

              {
                this.state.showAsk && <AudioQuestion srcAudio={this.state.srcAudio} endAsk={this.endAsk} />
              }

              
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={`list_question ${classes.paper}`}>
              <h3 className="title">Questions</h3>
              <div className="questions">
                <div className="play-item">
                  <h3>Question 1</h3>
                  <AudioQuestion srcAudio={question1} endAsk={this.endAsk} />
                </div>
                <div className="play-item">
                  <h3>Question 2</h3>
                  <AudioQuestion srcAudio={question2} endAsk={this.endAsk} />
                </div>
                <div className="play-item">
                  <h3>Question 3</h3>
                  <AudioQuestion srcAudio={question3} endAsk={this.endAsk} />
                </div>
                <div className="play-item">
                  <h3>Question 4</h3>
                  <AudioQuestion srcAudio={question4} endAsk={this.endAsk} />
                </div>
                <div className="play-item">
                  <h3>Question 5</h3>
                  <AudioQuestion srcAudio={question5} endAsk={this.endAsk} />
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Recorder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Recorder);