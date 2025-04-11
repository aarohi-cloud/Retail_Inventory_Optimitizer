import React, { useState } from 'react';
import Chart from './Chart';
import { getOptimization } from '../services/api';

function InventoryDashboard() {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Product A', stock: 10, demand: 20 },
    { id: 2, name: 'Product B', stock: 30, demand: 25 }
  ]);
  const [results, setResults] = useState([]);

  const optimize = async () => {
    const response = await getOptimization({ inventory });
    setResults(response.optimized_inventory);
  };

  return (
    <div>
      <h2>Retail Inventory Dashboard</h2>
      <button onClick={optimize}>Optimize</button>
      <Chart data={results} />
    </div>
  );
}

export default InventoryDashboard;