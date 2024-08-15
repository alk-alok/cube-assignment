import React from 'react';
import "./CustomerList.css";
import { customers } from './CustomerData';

const CustomerList = ({ onCustomerSelect, selectedCustomer }) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <div 
          key={customer.id} 
          className={`customer-card ${selectedCustomer && selectedCustomer.id === customer.id ? 'selected' : ''}`}
          onClick={() => onCustomerSelect(customer)}
        >
          <h3>{customer.name}</h3>
          <p>{`${customer.title.split(' ').slice(0, 35).join(' ')}...`}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
