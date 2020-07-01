import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
} from 'recharts';

function StarredRepos(props) {
  const data = props.topRepos.map((repos) => ({
    name: `${repos.name}`,
    stars: `${repos.stargazers_count}`,
  }));

  return (
    <div className='chart-container'>
      <div className='chart'>
        <h1>Top Starred repos</h1>
        <BarChart
          width={400}
          height={275}
          data={data}
          margin={{
            top: 5,
            right: 30,
          }}
        >
          <CartesianGrid strokeDasharray='1 1' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='stars' fill='#71CF64' />
          <Brush
            dataKey='name'
            height={20}
            stroke='#919791'
            startIndex={2}
            endIndex={7}
          ></Brush>
        </BarChart>
      </div>
    </div>
  );
}

export default StarredRepos;
