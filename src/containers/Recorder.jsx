import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
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
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  question14,
  question15,
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
      conferenceId: props.match.params && props.match.params.conferenceId ? props.match.params.conferenceId : null,
    };
  }

  componentWillMount = () => {
  }

  componentDidMount() {
    // this.child.record();
  }


  stopRecorder = (value) => {
    this.setState({ videoToken: value });
    console.log(value)
  }

  showBackground = value => {
    this.setState({ showBg: value });
  }


  render() {
    const { showBg, conferenceId } = this.state;
    const { classes } = this.props;
    return (
      <div className={`recorderVideo`}>
        <Grid container spacing={24}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Paper className={classes.paper} style={{ position: "relative" }}>
              {
                showBg && <div className="recorderBg"></div>
              }
              {/* <div className="recorderBg"></div> */}

              {
                !this.state.videoToken &&
                <RecorderVideo
                  stopRecorder={this.stopRecorder}
                  showBackground={this.showBackground}
                />
              }

              {
                this.state.videoToken &&
                <PlayVideo
                  videoToken={this.state.videoToken}
                  showBackground={this.showBackground}
                />
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
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Paper className={`list_question ${classes.paper}`}>
              <h3 className="title">Questions</h3>
              {
                (conferenceId === '3' || conferenceId === '1') && (
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
                )
              }

              {
                (conferenceId === '2' || conferenceId === '4') && (
                  <div className="questions">
                    <div className="play-item">
                      <h3>Question 6</h3>
                      <AudioQuestion srcAudio={question6} endAsk={this.endAsk} />
                    </div>
                    <div className="play-item">
                      <h3>Question 7</h3>
                      <AudioQuestion srcAudio={question7} endAsk={this.endAsk} />
                    </div>
                    <div className="play-item">
                      <h3>Question 8</h3>
                      <AudioQuestion srcAudio={question8} endAsk={this.endAsk} />
                    </div>
                    <div className="play-item">
                      <h3>Question 9</h3>
                      <AudioQuestion srcAudio={question9} endAsk={this.endAsk} />
                    </div>
                    <div className="play-item">
                      <h3>Question 10</h3>
                      <AudioQuestion srcAudio={question10} endAsk={this.endAsk} />
                    </div>
                  </div>
                )
              }

              {
                conferenceId === '5' && (
                  <div className="questions">
                    <div className="play-item">
                      <h3>Question 11</h3>
                      <AudioQuestion srcAudio={question11} endAsk={this.endAsk} />
                    </div>
                    <div className="play-item">
                      <h3>Question 12</h3>
                      <AudioQuestion srcAudio={question12} endAsk={this.endAsk} />
                    </div>
                    <div className="play-item">
                      <h3>Question 13</h3>
                      <AudioQuestion srcAudio={question13} endAsk={this.endAsk} />
                    </div>
                    <div className="play-item">
                      <h3>Question 14</h3>
                      <AudioQuestion srcAudio={question14} endAsk={this.endAsk} />
                    </div>
                    <div className="play-item">
                      <h3>Question 15</h3>
                      <AudioQuestion srcAudio={question15} endAsk={this.endAsk} />
                    </div>
                  </div>
                )
              }

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

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

const appRecorder = withStyles(styles)(Recorder);

export default connect(
  mapStateToProps,
)(appRecorder);