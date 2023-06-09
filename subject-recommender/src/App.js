import { useState } from 'react';
import './styles.css';

function MyButton() {
  const [color, setColor] = useState('red');

  function handleColorChange() {
    setColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
  }
  

  return (
    <button className="button" onClick={handleColorChange} style={{background: color}}>I'm a button</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
