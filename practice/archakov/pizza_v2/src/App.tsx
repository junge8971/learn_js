import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./AppRouter/AppRouter";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
