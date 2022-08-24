import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from './components/header/Header';
import Converter from './components/converter/Converter';

function App() {
  let [corrency, setCorrency] = useState([]);


  useEffect(() => {
      async function fetchData() {

          let result = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
          if (result.status === 200 || result.ok === true) {
              let data = await result.json();
              setCorrency(data)
          }
      }
      fetchData()
  }, [])


  return (
    <div className="App">
      <Header corrency={corrency} />
      <div className="main">
        <div className="main__container _container">
        <Converter corrency={corrency} />
        </div>
      </div>
      
    </div>
  );
}

export default App;

// fieldValue={fieldValue} valueInput={valueInput.value}
