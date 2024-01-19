import './App.css';
import { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function App() {

  let xHp = [];
  let yHp = [];

  let xGold = [];
  let yGold = [];

  for (let i = 1; i <= 100; i++) {
    let maxHp = (((i*2)**2)) - i**2;
    let goldReward = Math.floor(5 * Math.pow(1.2, i - 1));

    xHp.push(i);
    yHp.push(maxHp);

    xGold.push(i);
    yGold.push(goldReward);
  }
  console.log(yHp);

  return (
    <>
      <div className='app-container'>
        <div className='plot-container'>
          <Plot
            data={[
              {
                x: xHp,
                y: yHp,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
                name: 'Hp plot',
              },
              {
                x: xGold,
                y: yGold,
                type: 'scatter',
                mode: 'lines+markers',
                line: 'yellow',
                marker: {color: 'darkyellow'},
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
