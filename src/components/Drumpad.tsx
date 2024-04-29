import React, { useState, useEffect } from 'react';

interface AudioElementMap {
  [key: string]: HTMLAudioElement;
}

const Drumpad: React.FC = () => {
  const [audioElements, setAudioElements] = useState<AudioElementMap>({});

  useEffect(() => {
    const buttons = document.querySelectorAll('button');
    const audioElementsData: AudioElementMap = {};
    buttons.forEach((button) => {
      const audioElement = new Audio(`./audio/${button.id}.mp3`);
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
  }, []); // empty dependency array to only run the effect once on mount

  return (
    <div id="drum-machine">
      <div id="display">
        <div>
          <button id="Q" onClick={() => audioElements.Q && audioElements.Q.play()}>Q</button>
          <button id="W" onClick={() => audioElements.W && audioElements.W.play()}>W</button>
          <button id="E" onClick={() => audioElements.E && audioElements.E.play()}>E</button>
        </div>
        <div>
          <button id="A" onClick={() => audioElements.A && audioElements.A.play()}>A</button>
          <button id="S" onClick={() => audioElements.S && audioElements.S.play()}>S</button>
          <button id="D" onClick={() => audioElements.D && audioElements.D.play()}>D</button>
        </div>
        <div>
          <button id="Z" onClick={() => audioElements.Z && audioElements.Z.play()}>Z</button>
          <button id="X" onClick={() => audioElements.X && audioElements.X.play()}>X</button>
          <button id="C" onClick={() => audioElements.C && audioElements.C.play()}>C</button>
        </div>
      </div>
    </div>
  );
};

export default Drumpad;