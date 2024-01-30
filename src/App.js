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

  //pie chart
  let itemData = [100, 1000, 25000, 125000];

  let itemCostDiff_subtract = [
    Math.abs(itemData[0]-itemData[1]),
    Math.abs(itemData[1]-itemData[2]),
    Math.abs(itemData[2]-itemData[3]),
  ]; //between: 1st and 2nd, 2nd and 3rd, 3rd and 4th; 
  console.log(itemCostDiff_subtract);

  let itemCostDiff_divide = [
    Math.abs(itemData[1]/itemData[0]),
    Math.abs(itemData[2]/itemData[1]),
    Math.abs(itemData[3]/itemData[2]),
  ]; //between: 1st and 2nd, 2nd and 3rd, 3rd and 4th;
  console.log(itemCostDiff_divide);


  let yLevelGold = [];

  for (let i = 1; i <= 10; i++) {
    let maxHp = (((i*2)**2)) - i**2;
    let goldReward = Math.ceil(maxHp / 10 ** (i**0.05));

    yLevelGold.push(goldReward);
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
          
          <div className='plot-div'>
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
              layout={ {
                autosize: true, 
                title: 'Gold + MaxHP based on level', 
                paper_bgcolor: "rgb(157, 192, 194)",
                plot_bgcolor: "rgb(157, 192, 194)",
              } }
              useResizeHandler={true}
            />
          </div>

          
          <div className='plot-div'>
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
              layout={ {
                autosize: true, 
                title: 'MaxHP levels 1-10',
                paper_bgcolor: "rgb(157, 192, 194)",
                plot_bgcolor: "rgb(157, 192, 194)",
              } }
              useResizeHandler={true}
            />
          </div>

          <div className='plot-div'>
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
              layout={ {
                autosize: true, 
                title: 'MaxHP levels 50-100',
                paper_bgcolor: "rgb(157, 192, 194)",
                plot_bgcolor: "rgb(157, 192, 194)",
              } }
              useResizeHandler={true}
            />
          </div>

          <div className='plot-div'>
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
              layout={ {
                autosize: true,
                title: 'Gold plot',
                paper_bgcolor: "rgb(157, 192, 194)",
                plot_bgcolor: "rgb(157, 192, 194)",
              } }
              useResizeHandler={true}
            />
          </div>

          <div className='plot-div'>
            <Plot
              data={[
                {
                  x: ['1st to 2nd', '2nd to 3rd', '3rd to 4th'],
                  y: itemCostDiff_divide,
                  marker: {
                    color: ['#4287f5', '#5af542', '#f54242'],
                  },
                  type: 'bar',
                  name: 'Items plot',
                },
              ]}
              layout={ {
                autosize: true, 
                title: 'Each item cost multiplier relative to the next one',
                paper_bgcolor: "rgb(157, 192, 194)",
                plot_bgcolor: "rgb(157, 192, 194)",
              } }
              useResizeHandler={true}
            />
          </div>

          <div className='plot-div'>
            <Plot
              data={[
                {
                  values: yLevelGold,
                  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                  marker: {
                    colors: ['#524300', '#7a6000', '#a17b00', '#cc9600', '#e6a900', '#ffbe0a', '#ffcb59', '#ffa754', '#ff7e29', '#ff4b0f'],
                  },
                  type: 'pie',
                  name: 'Gold income',
                },
              ]}
              layout={ {
                autosize: true, 
                title: 'Gold income from planets lv.1-10',
                paper_bgcolor: "rgb(157, 192, 194)",
                plot_bgcolor: "rgb(157, 192, 194)",
              } }
              useResizeHandler={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
