import { useState } from "react";
import { recentStreams } from "../data/mockData";

const DataTable = () => {
  const [filter, setFilter] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredData = recentStreams.filter((row) =>
    row.song.toLowerCase().includes(filter.toLowerCase()) ||
    row.artist.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    if (sortOrder === "asc") return aValue > bValue ? 1 : -1;
    return aValue < bValue ? 1 : -1;
  });

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  return (
    <div className="overflow-auto">
      <input
        type="text"
        placeholder="Search by song or artist"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 form-control"
      />
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th
              className="cursor-pointer"
              onClick={() => handleSort("song")}
            >
              Song Name
            </th>
            <th
              className="cursor-pointer"
              onClick={() => handleSort("artist")}
            >
              Artist
            </th>
            <th
              className="cursor-pointer"
              onClick={() => handleSort("date")}
            >
              Date Streamed
            </th>
            <th
              className="cursor-pointer"
              onClick={() => handleSort("streams")}
            >
              Stream Count
            </th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index}>
              <td>{row.song}</td>
              <td>{row.artist}</td>
              <td>{row.date}</td>
              <td>{row.streams}</td>
              <td>{row.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
