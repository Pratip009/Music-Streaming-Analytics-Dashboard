import { Provider } from "react-redux";
import store from "./store/store";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <Provider store={store}>
      <DashboardPage />
    </Provider>
  );
};

export default App;
