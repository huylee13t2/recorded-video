import React from "react";
import { ZiggeoPlayer } from 'react-ziggeo';

class PlayVideo extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
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

  onAttached = e => {
    console.log("onAttached")
    // console.log(e)
    // this.setState({ showBg: true });
    // this.setState({ isPlayAudio: true })
  }

  onLoaded = e => {
    console.log("onLoaded")
    // console.log(e)
  }


  render(){
    return(
      <ZiggeoPlayer
              apiKey={"0d668f2e730cac445575fe7cb0eba36e"}
              ziggeo-video={this.state.videoToken}
              video={this.props.videoToken}
              theme={'modern'}
              themecolor={'green'}
              skipinitial={false}
              onPlaying={e => this.onPlaying(e)}
              onPaused={e => this.onPaused(e)}
              onAttached={e => this.onAttached(e)}
              onLoaded={e => this.onLoaded(e)}
              onEnded={e => this.onEnded(e)}
              onError={e => this.onError(e)}
              onSeek={e => this.onSeek(e)}
            // onRef={ref => (this.child = ref)}
            />
    )
  }
}

export default PlayVideo;