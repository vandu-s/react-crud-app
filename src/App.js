import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BankDetails from "./pages/BankDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bank/:id" element={<BankDetails />} />
      </Routes>
    </div>
  );
}

export default App;
