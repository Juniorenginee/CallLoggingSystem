import { useState } from "react";
import Navbar from "./components/Navbar";
import CustomerForm from "./components/CustomerForm";
import CustomerTable from "./components/CustomerTable";
import ManagerTable from "./components/ManagerTable";
import MoTable from "./components/MoTable";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CustomerTable />} />
        <Route path="/MoTable" element={<MoTable />} />
        <Route path="/ManagerTable" element={<ManagerTable />} />
        <Route path="/CustomerForm" element={<CustomerForm />} />
      </Routes>
    </>
  );
}

export default App;
