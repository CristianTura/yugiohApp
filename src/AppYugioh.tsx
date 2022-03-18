import { Provider } from "react-redux";
import { AppRouter } from "./routes/AppRouter";
import { store } from "./redux/store";

const AppYugioh = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default AppYugioh;
