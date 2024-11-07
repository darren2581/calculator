import './App.css';
import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value); // Concatenates the value to the current value of calc

    if(!ops.includes(value)) {
      setResult(eval(calc +value).toString());
    }
  }

  const calculate = () => {
    if(calc === '14/10/2023'){
      setCalc('Love You Devon💕');
      setResult('Love You Devon💕');
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
  );
}

export default App;
