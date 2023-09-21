import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Analyze from "./Analyze";

function App() {
  return (
    <div>
      <h1>Basic Example</h1>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="analyze" element={<Analyze />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
