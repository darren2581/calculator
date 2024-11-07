import './App.css';
import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = (value) => {
    // Allow input to begin with zero if it is part of a non-calculation input
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    
    // Concatenate the value to calc
    setCalc(calc + value);
  
    // Avoid evaluation for certain inputs (e.g., phone numbers or specific dates)
    if (!ops.includes(value)) {
      try {
        setResult(eval(calc + value).toString());
      } catch {
        setResult('');
      }
    }
  };
  

  const calculate = () => {
    if(calc === '14/10/2023'){
      setCalc('Officially Together🤝');
      setResult('Officially Together🤝');
      return;
    }
    else if(calc === '14/10/2024'){
      setCalc('Happy 1st Anniversary💕');
      setResult('Happy 1st Anniversary💕');
      return;
    }
    else if(calc === '520'){
      setCalc('Love you Devon💖');
      setResult('Love you Devon💖');
      return;
    }
    else if(calc === '1314'){
      setCalc('Love you forever bb💞');
      setResult('Love you forever bb💞');
      return;
    }
    else if(calc === '0145752581'){
      setCalc('Calling Darren bb...📞');
      setResult('Calling Darren bb...📞');
      return;
    }
    else if(calc === '08/11/2005'){
      setCalc('Happy Birthday bb🎂');
      setResult('Happy Birthday bb🎂');
      return;
    }
    else if(calc === '999'){
      setCalc('Darren to the rescue🦸‍♂️');
      setResult('Darren to the rescue🦸‍♂️');
      return;
    }
    else{
      setCalc(eval(calc));
    }
  }

  const deleteLast = () => {
    if (calc === '') {
      return;
    }
    const value = calc.slice(0, -1); // Removes the last character from calc
    setCalc(value);
  }

  return (
    <div>
      <div className="calculator-grid">
        <div className="output">
          <div className="current-operand">
            {calc || '0'} 
          </div>
        </div>
        <button className="span-two" onClick={() => { setCalc(''); setResult(''); }}>AC</button>
        <button onClick={deleteLast}>DEL</button>
        <button onClick={() => updateCalc('/')}>/</button>
        <button onClick={() => updateCalc('1')}>1</button>
        <button onClick={() => updateCalc('2')}>2</button>
        <button onClick={() => updateCalc('3')}>3</button>
        <button onClick={() => updateCalc('*')}>*</button>
        <button onClick={() => updateCalc('4')}>4</button>
        <button onClick={() => updateCalc('5')}>5</button>
        <button onClick={() => updateCalc('6')}>6</button>
        <button onClick={() => updateCalc('+')}>+</button>
        <button onClick={() => updateCalc('7')}>7</button>
        <button onClick={() => updateCalc('8')}>8</button>
        <button onClick={() => updateCalc('9')}>9</button>
        <button onClick={() => updateCalc('-')}>-</button>
        <button onClick={() => updateCalc('.')}>.</button>
        <button onClick={() => updateCalc('0')}>0</button>
        <button className="span-two" onClick={calculate}>=</button>
      </div>

      <div className="info">
        <h3><span>Warning:</span> Not an Ordinary Calculator</h3>
        <h6>[ SECRET CODE ! ]</h6>
      </div>
    </div>
  );
}

export default App;
