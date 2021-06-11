import { useState } from "react";

import "./Audio.scss";

// Icons
import soundOn from "../../img/sound-on.svg";
import soundOff from "../../img/sound-off.svg";

// Music
import stressabbau from "../../music/stressabbau.mp3";

const Audio = ({ data }) => {
  const [sound, setSound] = useState(false);

  const handleSound = () => {
    const music = document.getElementById("audio");
    sound ? music.pause() : music.play();

    setSound(!sound);
  };

  return (
    <div className="audio">
      <span data-title={sound ? data.music.soundOn : data.music.soundOff}>
        <img onClick={handleSound} src={sound ? soundOff : soundOn}></img>
      </span>
      <audio loop id="audio">
        <source src={stressabbau} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Audio;
