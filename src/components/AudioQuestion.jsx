import React from "react";
import ReactAudioPlayer from 'react-audio-player';
// import AudioPlayer from "react-h5-audio-player";

class AudioQuestion extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handleEndAudio = () => {
        console.log("handleEndAudio");
    }

    render() {
        // console.log(adodda)
        // console.log(isPlayAudio)
        const { srcAudio } = this.props;
        return (
            <ReactAudioPlayer
                src={srcAudio}
                // autoPlay
                loop={false}
                onEnded={() => this.handleEndAudio()}
                controls
                ref={(element) => { this.rap = element; }}
                style={{ width: "100%" }}
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

export default AudioQuestion;