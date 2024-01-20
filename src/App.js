import './App.css';
import { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function App() {

  let x10 = [];
  let yHp = [];

  let yGold = [];

  for (let i = 0; i <= 100000; i=i+1000) {
    let maxHp = (((i*2)**2)) - i**2;
    let goldReward = Math.ceil(maxHp / 10 ** (i**0.05));

    x10.push(i);
    yHp.push(maxHp);

    yGold.push(goldReward);
  }
  console.log(yHp);


  let testArr = [];
  for (let i = 0; i <= 100; i++) {
    let test = i**0.05;
    testArr.push(test);
  }
  console.log(testArr);

  return (
    <>
      <div className='app-container'>
        <div className='plot-container'>
          <Plot
            data={[
              {
                x: x10,
                y: yHp,
                type: 'scatter',
                mode: 'lines+markers',
                line: {color: 'red'},
                name: 'Hp plot',
              },
              {
                x: x10,
                y: yGold,
                type: 'scatter',
                mode: 'lines+markers',
                line: {color: '#fcc930'},
                name: 'Gold plot',
              },
            ]}
            layout={ {autosize: true, title: 'Gold + MaxHP based on level'} }
            useResizeHandler={true}
          />
        </div>
      </div>
    </>
  );
}

export default App;
