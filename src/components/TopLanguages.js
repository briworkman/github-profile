import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

function TopLanguages(props) {
  return (
    <div className='chart-container'>
      <div className='chart'>
        <h1>Top Languages</h1>
        <PieChart width={400} height={300} className='pie-chart'>
          <Pie
            data={props.languageData ? props.languageData : []}
            labelLine={true}
            fill='#8884d8'
            dataKey='value'
            label={(entry) => entry.label}
          >
            {props.languageData
              ? props.languageData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={props.COLORS[index % props.COLORS.length]}
                  />
                ))
              : []}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}

export default TopLanguages;
