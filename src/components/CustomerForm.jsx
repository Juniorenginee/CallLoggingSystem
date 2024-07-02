import React, { useState } from 'react';
import './CustomerForm.css'; // Import the CSS file for styling

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    customerCode: '',
    customerName: '',
    contactInfo: '',
    problemDesc: '',
    moduleType: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
     <h1 style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: '#455a64', padding: '10px' }}>
      CUSTOMER FORM
    </h1>
    <form className="customer-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="customerCode">Customer Code</label>
        <input
          type="text"
          id="customerCode"
          name="customerCode"
          value={formData.customerCode}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="customerName">Customer Name</label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contactInfo">Contact Info</label>
        <input
          type="text"
          id="contactInfo"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="problemDesc">Problem Description</label>
        <textarea
          id="problemDesc"
          name="problemDesc"
          value={formData.problemDesc}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="moduleName">Module Name</label>
        <select
          id="moduleName"
          name="moduleName"
          value={formData.moduleType}
          onChange={handleChange}
          required
        >
          <option value="">Select Module</option>
         
            <option key={1} value={`SapAbap`}>
              SAP ABAP
            </option>
            <option key={2} value={`SAPFICO`}>
              SAP FICO
            </option>
            <option key={3} value={`SAPMM`}>
              SAP MM
            </option>
            <option key={4} value={`SAPSD`}>
              SAP SD
            </option>
            <option key={5} value={`SAPPP`}>
             SAP PP
            </option>
            <option key={6} value={`SAPHRM`}>
              SAP HRM
            </option>
            <option key={7} value={`SAPBI`}>
              SAP BI
            </option>
            <option key={8} value={`SapCRM`}>
              SAP CRM
            </option>
            <option key={9} value={`SAPBWS`}>
              SAP BWS
            </option>
            <option key={10} value={`SAPBM`}>
              SAP BM
            </option>
            <option key={11} value={`SAPHANA`}>
              SAP HANA
            </option>
            <option key={12} value={`SAPQM`}>
              SAP QM
            </option>
          
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default CustomerForm;
