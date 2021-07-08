import { Provider } from "react-redux";
import Root from "./pages";
import { initStore } from "./store";

const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
