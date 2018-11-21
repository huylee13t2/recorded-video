import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { ZiggeoRecorder } from 'react-ziggeo'; import {
  Button,
  Icon,
} from '@material-ui/core/';

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

class RecorderVideo extends React.Component {
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
    }
  }

  componentWillMount = () => {

  }

  componentDidMount = () => {
    this.child.record();
    console.log(this.child);
  }

  recorderRecording = () => {
    console.log('Recorder onRecording');
    this.setState({ isPlayAudio: true });

  };

  recorderUploaded = () => {
    console.log('Recorder onUploaded');
    this.setState({ showBg: false });
  };

  playing = () => {
    console.log('it\'s playing, your action here');
  };

  paused = () => {
    console.log('it\'s paused, your action when pause');
  };

  onUploaded = e => {
    console.log("onUploaded")
    // console.log(e)
    // this.setState({ videoToken: e.video })
    this.setState({ isPlayAudio: false });
    this.setState({ showBg: false });
  }

  onAttached = e => {
    console.log("onAttached")
    // console.log(e)
    // this.setState({ showBg: true });
    // this.setState({ isPlayAudio: true })
  }

  onUploadProgress = () => {
    console.log("onUploadProgress")
    this.setState({ showBg: true });
  }

  onLoaded = e => {
    console.log("onLoaded")
    // console.log(e)
  }

  onUploadSelected = () => {
    console.log("onUploadSelected")
  }

  onRerecord = e => {
    console.log("onRerecord")
    // console.log(e)
  }

  onPlaying = e => {
    console.log("onPlaying")
    // console.log(e)
    this.setState({ showBg: true })
  }

  onPaused = () => {
    console.log("onPaused")
  }

  onEnded = e => {
    console.log("onEnded")
    // console.log(e)
    this.setState({ showBg: false })
  }

  onSeek = e => {
    console.log("onSeek")
    // console.log(e)
  }

  onError = e => {
    console.log("onError")
    // console.log(e)
  }

  onManuallySubmitted = () => {
    console.log("onManuallySubmitted")
  }

  onRecordingProgress = () => {
    // console.log("onRecordingProgress")
    this.setState({ showBg: true })
  }

  onAccessForbidden = () => {
    console.log("onAccessForbidden")
  }

  onAccessGranted = () => {
    console.log("onAccessGranted")
    // this.setState({ showBg: true })
  }

  onCameraUnresponsive = () => {
    console.log("onCameraUnresponsive")
  }

  onVerified = e => {
    console.log("onVerified")
    // console.log(e)
    this.setState({ videoToken: e.video })
    this.props.stopRecorder(e.video);
  }

  onNoCamera = () => {
    console.log("onNoCamera")
  }

  onNoMicrophone = () => {
    console.log("onNoMicrophone")
  }

  handleStart = () => {
    // this.child.play();
    this.child.record();
    // this.child.upload();
    // this.child.rerecord();
    // this.child.stop();
    // this.child.hidePopup();
    // this.child.reset();

    this.setState({ isStart: true });
  }

  handlStopRecorder = () => {
    this.child.stop();
    console.log(this.state.videoToken);
    // this.child.upload();
    this.props.stopRecorder(this.state.videoToken);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <ZiggeoRecorder
          apiKey={"ca222df12203cee18e55562941948d8a"}
          // preventReRenderOnUpdate={false}
          allowscreen={false}
          allowrecord={true}
          allowupload={false}
          onRecording={this.recorderRecording}
          onUploading={this.recorderUploading}
          onUploaded={e => this.onUploaded(e)}
          onAttached={e => this.onAttached(e)}
          onUploadProgress={this.onUploadProgress}
          onLoaded={e => this.onLoaded(e)}
          onUploadSelected={this.onUploadSelected}
          onRerecord={this.onRerecord}
          onPlaying={e => this.onPlaying(e)}
          onPaused={this.onPaused}
          onEnded={e => this.onEnded(e)}
          onSeek={e => this.onSeek(e)}
          onError={e => this.onError(e)}
          onManuallySubmitted={this.onManuallySubmitted}
          onRecordingProgress={this.onRecordingProgress}
          onAccessForbidden={this.onAccessForbidden}
          onAccessGranted={this.onAccessGranted}
          onCameraUnresponsive={this.onCameraUnresponsive}
          onVerified={e => this.onVerified(e)}
          onNoCamera={this.onNoCamera}
          onNoMicrophone={this.onNoMicrophone}
          theme={'modern'}
          themecolor={'green'}
          style={{ width: "100%" }}
          className="zigg_recorder"
          onRef={ref => (this.child = ref)}
        />
        <div className="action_recorder">
          <Button
            className={`btn_stop ${classes.button}`}
            variant="outlined"
            color="secondary"
            onClick={() => this.handlStopRecorder()}
          >
            <Icon className={`icon_button ${classes.icon}`} >stop</Icon>
            End Recorder
          </Button>
        </div>
      </div>
    )
  }
}

RecorderVideo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecorderVideo);