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


  let x1to10 = [];
  let yHp1to10 = [];

  for (let i = 1; i <= 10; i++) {
    let maxHp = (((i*2)**2)) - i**2;

    x1to10.push(i);
    yHp1to10.push(maxHp);
  }

  let x50to100 = [];
  let yHp50to100 = [];

  for (let i = 50; i <= 100; i++) {
    let maxHp = (((i*2)**2)) - i**2;

    x50to100.push(i);
    yHp50to100.push(maxHp);
  }

  let x100 = [];
  let yGold100 = [];

  for (let i = 1; i <= 100; i++) {
    let maxHp = (((i*2)**2)) - i**2;
    let goldReward = Math.ceil(maxHp / 10 ** (i**0.05));

    x100.push(i);
    yGold100.push(goldReward);
  }


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
          <Plot
            data={[
              {
                x: x1to10,
                y: yHp1to10,
                type: 'scatter',
                mode: 'lines+markers',
                line: {color: 'red'},
                name: 'Hp plot lv 1-10',
              },
            ]}
            layout={ {autosize: true, title: 'MaxHP levels 1-10'} }
            useResizeHandler={true}
          />
          <Plot
            data={[
              {
                x: x50to100,
                y: yHp50to100,
                type: 'scatter',
                mode: 'lines+markers',
                line: {color: 'red'},
                name: 'Hp plot lv 50-100',
              },
            ]}
            layout={ {autosize: true, title: 'MaxHP levels 50-100'} }
            useResizeHandler={true}
          />
          <Plot
            data={[
              {
                x: x100,
                y: yGold100,
                type: 'scatter',
                mode: 'lines+markers',
                line: {color: '#fcc930'},
                name: 'Gold plot',
              },
            ]}
            layout={ {autosize: true, title: 'Gold plot'} }
            useResizeHandler={true}
          />
        </div>
      </div>
    </>
  );
}

export default App;
