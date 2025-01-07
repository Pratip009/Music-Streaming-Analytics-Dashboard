import Card from "../components/Card";
import DataTable from "../components/DataTable";
import Charts from "../components/LineChart";
import {
  mockUserGrowth,
  mockMetrics,
  mockRevenue,
  mockTopSongs,
} from "../data/mockData";

const DashboardPage = () => {
  return (
    <div className="container-fluid mt-2 p-3 full-width-container">
      <h1 className="mb-5 text-center font-weight-bold">
        Music Streaming Analytics Dashboard
      </h1>

      {/* Cards Section */}
      <div className="d-flex flex-wrap g-3 mb-5">
        <div className="col-12 col-sm-6 col-md-3">
          <div
            className="text-white rounded p-3 m-2 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "#E82561" }}
          >
            <Card
              title="Total Users"
              value={mockMetrics.totalUsers}
              icon={<i className="fas fa-users" />}
              bgColor="blue"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-3">
          <div
            className="text-white rounded p-3 m-2 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "#4C3BCF" }}
          >
            <Card
              title="Active Users"
              value={mockMetrics.activeUsers}
              icon={<i className="fas fa-user-check" />}
              bgColor="green"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-3">
          <div
            className="text-white rounded p-3 m-2 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "#FAB12F" }}
          >
            <Card
              title="Total Streams"
              value={mockMetrics.totalStreams}
              icon={<i className="fas fa-play-circle" />}
              bgColor="yellow"
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-3">
          <div
            className="text-white rounded p-3 m-2 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "#7A1CAC" }}
          >
            <Card
              title="Revenue"
              value={mockMetrics.revenue}
              icon={<i className="fas fa-dollar-sign" />}
              bgColor="purple"
            />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="mb-1">
        <Charts
          userGrowthData={mockUserGrowth}
          revenueData={mockRevenue}
          topSongsData={mockTopSongs}
        />
      </div>

      {/* DataTable Section */}
      <div className="p-3">
        <h1 className="text-2xl font-weight-bold mb-4">Streamify Dashboard</h1>
        <DataTable />
      </div>
    </div>
  );
};

export default DashboardPage;
