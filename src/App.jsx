import { useState } from 'react';
import arrow from '../assets/images/icon-arrow.svg';

import './App.css';

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [age, setAge] = useState({
    year: '--',
    month: '--',
    day: '--',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'day') setDay(value);
    if (name === 'month') setMonth(value);
    if (name === 'year') setYear(value);
  };

  const calculateAge = (e) => {
    e.preventDefault();

    if (!day || !month || !year) {
      setAge({ year: '--', month: '--', day: '--' });
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    console.log(birthDate);
    
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ year: years, month: months, day: days });
  };

  return (
    <div className="body">
      <div className="age-calculator">
        <form onSubmit={calculateAge}>
          <div className='input-section'>
            <div className='day'>
              <label htmlFor='day'>DAY</label>
              <input
                type='number'
                name='day'
                value={day}
                onChange={handleChange}
                placeholder='DD'
              />
            </div>

            <div className='month'>
              <label htmlFor='month'>MONTH</label>
              <input
                type='number'
                name='month'
                value={month}
                onChange={handleChange}
                placeholder='MM'
              />
            </div>

            <div className='year'>
              <label htmlFor='year'>YEAR</label>
              <input
                type='number'
                name='year'
                value={year}
                onChange={handleChange}
                placeholder='YYYY'
              />
            </div>
          </div>

          <div className="submit-block">
            <hr />
            <button type='submit'>
              <img src={arrow} alt="Calculate" />
            </button>
          </div>
        </form>

        <div className="output">
          <h1><span id="YY">{age.year}</span> years</h1>
          <h1><span id="MM">{age.month}</span> months</h1>
          <h1><span id="DD">{age.day}</span> days</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
