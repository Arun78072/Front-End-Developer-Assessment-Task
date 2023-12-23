
import "./App.css";
import Home from "./page/Home";
import Layout from "./component/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
