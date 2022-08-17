import React from 'react';
import './App.css';
import CampaignChart from './pages/Campaign';

function App() {
  return (
    <div className="App">
      <CampaignChart
        title='Campaign chart'
        categories={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Item8', 'Item9', 'Item10', 'Item11', 'Item12', 'Item13', 'Item14', 'Item15']}
      />      
    </div>
  );
}

export default App;
