import React, { useState } from "react";
import Sound from "react-sound";
import WizardRoom from "../sound/electrica.mp3";
import { Button } from "antd";
import { SoundOutlined, AudioMutedOutlined } from "@ant-design/icons";

const Music = () => {

  /*-- Add toggle music function --*/
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Button onClick={() => setIsPlaying(!isPlaying)} className="btn-music" icon={isPlaying? <SoundOutlined /> : <AudioMutedOutlined />} ghost/>
      <Sound
        url={WizardRoom}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={300 /* in milliseconds */}
      />
    </>
  );
};

export default Music;
