/* eslint-disable no-unused-expressions */
import React from "react"
import ReactAudioPlayer from 'react-audio-player';
// import AudioPlayer from "react-h5-audio-player";
import {audio} from "../assets/audio/index";

class AudioPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        // console.log(adodda)
        // console.log(isPlayAudio)
        return (
            <ReactAudioPlayer
                src={audio}
                autoPlay
                controls
                loop={true}
                ref={(element) => { this.rap = element; }}
                style={{ position: "absolute", top: "50%", zIndex: "-10" }}
            />
            // <audio
            //     id="t-rex-roar"
            //     controls
            //     src="../assets/audio/adodda.mp3">
            //     Your browser does not support the <code>audio</code> element.
            // </audio>
            // <AudioPlayer
            //     autoPlay
            //     src={adodda}
            //     onPlay={e => console.log("onPlay")}
            // // other props here
            // />
        )
    }
}

export default AudioPlay;