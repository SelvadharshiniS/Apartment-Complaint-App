
import React, { useState } from 'react';
import './Feedback.css';

function Feedback({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    rating: '',
    feedback: '',
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
    onSubmit(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      rating: '',
      feedback: '',
    });
    window.alert('Feedback submitted successfully!');
   
  };

  return (
    <div className="image-container">
    <img src="https://i1.wp.com/www.appzi.com/wp-content/uploads/2020/07/form-feedback-1200.jpg?fit=1200%2C799&ssl=1"/>
  
    <div className="feedback-form-container">
      
      <h2> Feedback Form</h2>
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
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Feedback:</label>
          <textarea
            rows="4"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    
    
  </div>
  </div>
  );
}

export default Feedback;
