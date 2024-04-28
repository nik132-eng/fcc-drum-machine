import React, { useState, useEffect } from 'react';

interface AudioElementMap {
  [key: string]: HTMLAudioElement;
}

const Drumpad: React.FC = () => {
  const [audioElements, setAudioElements] = useState<AudioElementMap>({});
  console.log("🚀 ~ audioElements:", audioElements)

  useEffect(() => {
    const audioElementsData: AudioElementMap = {};
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      console.log("🚀 ~ buttons.forEach ~ button:", button)
      const audioElement = new Audio(`../audio/${button.id}.mp3`);
      audioElementsData[button.id] = audioElement;
    });
    setAudioElements(audioElementsData);

    const playSound = (e: KeyboardEvent) => {
      const buttonId = e.key.toUpperCase();
      console.log("🚀 ~ playSound ~ buttonId:", buttonId)
      const audioElement = audioElements[buttonId];
      console.log("🚀 ~ playSound ~ audioElement:", audioElement)
      if (!audioElement) return;
      audioElement.currentTime = 0;
      audioElement.play();
    };

    window.addEventListener('keydown', playSound);
    return () => {
      window.removeEventListener('keydown', playSound);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">
        <div>
          <button id="Q">Q</button>
          <button id="W">W</button>
          <button id="E">E</button>
        </div>
        <div>
          <button id="A">A</button>
          <button id="S">S</button>
          <button id="D">D</button>
        </div>
        <div>
          <button id="Z">Z</button>
          <button id="X">X</button>
          <button id="C">C</button>
        </div>
      </div>
    </div>
  );
};

export default Drumpad;