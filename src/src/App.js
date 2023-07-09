import './App.css';
import { useState,useEffect } from 'react';

function App() {

const drumPads = [
  { id: 'Heater-1', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', key: 'Q' },
  { id: 'Heater-2', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', key: 'W' },
  { id: 'Heater-3', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', key: 'E' },
  { id: 'Heater-4', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', key: 'A' },
  { id: 'Clap', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', key: 'S' },
  { id: 'Open-HH', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', key: 'D' },
  { id: 'Kick-n\'-Hat', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', key: 'Z' },
  { id: 'Kick', sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', key: 'X' },
  { id: 'Closed-HH', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', key: 'C' },
];

const DrumPad = ({ id, sound, keyTrigger }) => {
  const [isActive, setIsActive] = useState(false);

  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  const handlePadClick = () => {
    playSound();
    setIsActive(true);
    setTimeout(() => setIsActive(false), 100); 
  };

  const handleKeyPress = (event) => {
    if (event.key === keyTrigger.toLowerCase()) {
      playSound();
      setIsActive(true);
      setTimeout(() => setIsActive(false), 100);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  return (
    <div
     id='drumpad'
      className={`drum-pad ${isActive ? 'active' : ''}`}
      onClick={handlePadClick}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      {keyTrigger}
    </div>
  );
};

  return (
    <div className="App" >
         <h1>Drum Machine</h1>
      <div className="drum-pad-container">
        {drumPads.map((drumPad) => (
          <DrumPad
            key={drumPad.id}
            id={drumPad.id}
            sound={drumPad.sound}
            keyTrigger={drumPad.key}
          />
          ))}
      </div>
    </div>
    
  );
}
export default App;
