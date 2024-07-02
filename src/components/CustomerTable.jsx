import React from 'react';
import './CustomerTable.css';

const CustomerTable = () => {
  return (
    <>
    <h1 style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: '#455a64', padding: '10px', width:'141%' }}>
   Customer Table
    </h1>
    <table className="customer-table">
      <thead>
        <tr>
          <th>Customer Code</th>
          <th>Customer Name</th>
          <th>Contact Info</th>
          <th>Problem Description</th>
          <th>Module Name</th>
          <th>Comment</th>
          <th>MANAGER Decision</th>
          <th>M Decision date</th>
          <th>MO DECISION</th>
          <th>Module Type</th>
          <th>MO DECISION Date</th>
          <th>MO target Date</th>
          <th>Hemant DECISION</th>
          <th>Hemant DECISION Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
          <tr >
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <select>
                <option value="Pending">Pending</option>
                <option value="Accept">Accept</option>
                <option value="Reject">Reject</option>
              </select>
            </td>
            <td></td>
            <td>
              <select>
                <option value="Pending">Pending</option>
                <option value="Accept">Accept</option>
                <option value="Reject">Reject</option>
              </select>
            </td>
            <td><select>
                <option value="Technical">Technical</option>
                <option value="Functional">Functional</option>
                
              </select></td>
              <td></td>
              <td></td>
            <td>
              <select>
                <option value="Pending">Pending</option>
                <option value="Accept">Accept</option>
                <option value="Reject">Reject</option>
              </select>
            </td>
            <td></td>
            
            <td>
              <select>
                <option value="Pending">on it</option>
                <option value="Accept">Testing</option>
                <option value="Reject">UAT</option>
                <option value="Reject">Production</option>
                <option value="Reject">closed</option>
              </select>
            </td>
          </tr>
        
      </tbody>
    </table>
    <div style={{ marginTop: '20px' }}>
        <label htmlFor="comment">Manager's Comment:</label>
        <textarea id="comment" name="comment" rows="4" cols="50" placeholder="Enter your comment here..."></textarea>
        <button  style={{
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '1px 10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}>Submit Comment</button>
      </div>
    </>
  );
};

export default CustomerTable;
