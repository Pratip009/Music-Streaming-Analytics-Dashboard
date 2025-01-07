/* eslint-disable react/prop-types */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c"];

// User Growth Chart
// eslint-disable-next-line react/prop-types
const UserGrowthChart = ({ data }) => (
  <LineChart width={400} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
    <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
  </LineChart>
);

// Revenue Distribution Pie Chart
// eslint-disable-next-line react/prop-types
const RevenueDistribution = ({ data }) => (
  <PieChart width={400} height={300}>
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={100}
      fill="#8884d8"
      label
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

// Top 5 Streamed Songs Bar Chart
const TopStreamedSongsChart = ({ data }) => (
  <BarChart width={400} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="song" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="streams" fill="#8884d8">
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Bar>
  </BarChart>
);


// Main Charts Component
//  eslint-disable-next-line react/prop-types
const Charts = ({ userGrowthData, revenueData, topSongsData }) => {
  return (
    <div className="mb-1">
    <div className="d-flex flex-wrap g-3 mb-5">
      {/* User Growth Chart */}
      <div className="col-12 col-md-4 text-center mb-4" style={{
       display:'flex',
       flexDirection:'column',
       alignItems:'center'
      }}>
        <h2 className="h5 font-weight-bold mb-4">User Growth Chart</h2>
        <UserGrowthChart data={userGrowthData} />
      </div>
  
      {/* Revenue Distribution Chart */}
      <div className="col-12 col-md-4 text-center mb-4" style={{
       display:'flex',
       flexDirection:'column',
       alignItems:'center'
      }}>
        <h2 className="h5 font-weight-bold mb-4">Revenue Distribution</h2>
        <RevenueDistribution data={revenueData} />
      </div>
  
      {/* Top 5 Streamed Songs */}
      <div className="col-12 col-md-4 text-center mb-4" style={{
       display:'flex',
       flexDirection:'column',
       alignItems:'center'
      }}>
        <h2 className="h5 font-weight-bold mb-4">Top 5 Streamed Songs</h2>
        <TopStreamedSongsChart data={topSongsData} />
      </div>
    </div>
  </div>
  
  );
};

export default Charts;
