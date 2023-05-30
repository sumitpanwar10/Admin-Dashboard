import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard"
import Sounds from "./components/sounds";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="sounds" element={<Sounds />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
