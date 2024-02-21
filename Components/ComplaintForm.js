/*import React, { useState } from 'react';
import { Form, Button ,Row,Col} from 'react-bootstrap';

function ComplaintForm({ onSubmit }) {
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(complaint);
    setComplaint('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="complaintForm">
        <Form.Label>Submit a Complaint:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ComplaintForm;*/
// App.js
// ... (other imports)

// ComplaintForm.js
// ApartmentComplaintForm.js
// ComplaintForm.js

import React, { useState } from 'react';
import './ComplaintForm.css'; // Import your CSS file for styling

function ComplaintForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    apartmentNumber: '',
    buildingName: '',
    description: '',
  });
  const [category, setCategory] = useState('');
  const[apartmentNumber,setApartmentNumber]= useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleApartmentNumberChange = (e) => {
    setApartmentNumber(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({...formData, category});
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      apartmentNumber: '',
      buildingName: '',
      
      description: '',
    });
    setCategory('');
    window.alert('Form submitted successfully!');
    window.alert('We will try to rectify your complaint winthin 24 hours.')
  };

  return (
 <div className="Page">
    <div className="complaint-form-container">
      <h2>Apartment Complaint Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Apartment Number:</label>
          <select
            type="apartmentNumber"
            name="apartmentNumber"
            value={apartmentNumber}
            onChange={handleApartmentNumberChange}
            required>
            <option value="">Select Block</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              </select>
        </div>

        <div className="form-group">
          <label>Building Name:</label>
          <input
            type="text"
            name="buildingName"
            value={formData.buildingName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category of Complaint:</label>
          <select
            type="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
            required>
             <option value="">Select Category</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Noise">Noise</option>
              <option value="Security">Security</option>
            </select>
         
        </div>

        <div className="form-group">
          <label>Complaint Description:</label>
          <textarea
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
    
    </div>
  );
}

export default ComplaintForm;
