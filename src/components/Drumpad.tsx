import React, { useState, useEffect, useRef } from 'react';
import './Drumpad.css'; // Import CSS file for styling

interface DrumButtonProps {
  id: string;
  audioSrc: string;
}

const DrumButton: React.FC<DrumButtonProps> = ({ id, audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <button className="drum-button" id={id} onClick={playSound}>
      {id}
      <audio ref={audioRef} src={audioSrc}></audio>
    </button>
  );
};

const Drumpad: React.FC = () => {
  const buttonsData: DrumButtonProps[] = [
    { id: 'Q', audioSrc: './audio/Q.mp3' },
    { id: 'W', audioSrc: './audio/W.mp3' },
    { id: 'E', audioSrc: './audio/E.mp3' },
    { id: 'A', audioSrc: './audio/A.mp3' },
    { id: 'S', audioSrc: './audio/S.mp3' },
    { id: 'D', audioSrc: './audio/D.mp3' },
    { id: 'Z', audioSrc: './audio/Z.mp3' },
    { id: 'X', audioSrc: './audio/X.mp3' },
    { id: 'C', audioSrc: './audio/C.mp3' },
  ];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const buttonId = e.key.toUpperCase();
      const button = document.getElementById(buttonId);
      if (button) {
        button.click();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="drumpad-container">
      <div id="display" className="drumpad-display">
        {buttonsData.map((button) => (
          <DrumButton key={button.id} id={button.id} audioSrc={button.audioSrc} />
        ))}
      </div>
    </div>
  );
};

export default Drumpad;