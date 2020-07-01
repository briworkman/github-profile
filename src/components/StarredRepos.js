import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function StarredRepos(props) {
  console.log('STARRED PROPS:', props);

  const data = props.topRepos.map((repos) => ({
    name: `${repos.name}`,
    stars: `${repos.stargazers_count}`,
  }));

  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='stars' fill='#71CF64' />
      </BarChart>
    </div>
  );
}

export default StarredRepos;
