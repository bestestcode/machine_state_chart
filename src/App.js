import React from 'react';
import './App.css';

import Chart from './components/chart';
import data from './mock/response';

const App = () => (
  <div>
    <h1>Welcome to Machine State Chart Demo!</h1>
    <br />
    <Chart data={data} />
  </div>
);

export default App;
