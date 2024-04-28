import React from "react";

const Drumpad = () => {
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
          <button is="D">D</button>
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
