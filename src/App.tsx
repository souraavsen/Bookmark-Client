import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./modules/Dashboard/pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path='admin/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
