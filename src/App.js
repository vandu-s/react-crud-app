import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BankDetails from "./pages/BankDetails";
import AddData from "./pages/AddData";
import EditData from "./pages/EditData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bank/:id" element={<BankDetails />} />
        <Route path="/add-bank" element={<AddData />} />
        <Route path="/update-bank" element={<EditData />} />
      </Routes>
    </div>
  );
}

export default App;
