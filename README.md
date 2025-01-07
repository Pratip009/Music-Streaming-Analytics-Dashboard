## Project Overview

This Music Streaming Analytics Dashboard allows users to view key streaming metrics such as total users, revenue, and streams using an intuitive interface. Built with React, Redux, and Recharts, it provides powerful visualizations for music platform analytics.

## Key Features

- **Interactive Dashboard**: Explore key metrics including user growth, revenue distribution, and top songs.
- **Charts**: View visualizations like user growth, revenue distribution (pie chart), and top songs (bar chart).
- **Data Table**: Displays recent streaming data with built-in sorting and filtering.


## Setup Instructions

### Prerequisites
Ensure **Node.js** and **npm** are installed.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Pratip009/Music-Streaming-Analytics-Dashboard.git
2.Install dependencies:
   ```bash
   npm install
3. Run the application:
   ```bash
   npm run dev


   ## Project Structure

- **src/**: Contains the main application code.
- **components/**: Reusable components like Card, DataTable, and charts.
- **pages/**: Page layouts (e.g., DashboardPage).
- **store/**: Redux store and slice for managing state.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **Recharts**: For rendering charts.
- **Bootstrap**: For styling and responsiveness.

## Component Analysis

- **Card**: Displays individual metrics (e.g., total users, revenue) with customizable backgrounds/icons
- **DataTable**: Shows recent streaming data with filtering and sorting.
- **Charts**: Visualizes data using line, pie, and bar charts (user growth, revenue, top songs).

## Redux Store

- **Metrics Slice**: Manages state for metrics (e.g., total users, streams, revenue), initialized with mock data.
- **Store**: Configures Redux store for global state management across components.

## Dashboard Page

- Combines Cards, Charts, and DataTable for cohesive analytics. Uses Redux to manage and share the metrics state.
