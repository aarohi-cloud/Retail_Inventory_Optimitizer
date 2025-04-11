import React from 'react';

function Chart({ data }) {
  return (
    <div>
      <h3>Optimization Results</h3>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}: {item.suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default Chart;