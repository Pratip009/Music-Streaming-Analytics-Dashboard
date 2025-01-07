import { createSlice } from "@reduxjs/toolkit";
import { mockMetrics } from "../data/mockData";

const metricsSlice = createSlice({
  name: "metrics",
  initialState: mockMetrics,
  reducers: {},
});

export default metricsSlice.reducer;