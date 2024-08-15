import React, { useState } from "react";
import "./App.css";
import CustomerList from "./components/left-slider/CustomerList";
import CustomerDetails from "./components/right-part/CustomerDetails";

const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="app-container">
      <CustomerList
        onCustomerSelect={handleCustomerSelect}
        selectedCustomer={selectedCustomer}
      />
      <CustomerDetails customer={selectedCustomer} />
    </div>
  );
};

export default App;
