// Dashboard.jsx
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header>
        <h2>Welcome to Your Apartment Complaint Dashboard</h2>
      </header>

      <section className="quick-links">
        <button onClick={() => console.log('Navigate to Submit Complaint')}>Submit a Complaint</button>
        <button onClick={() => console.log('Navigate to Check Complaint Status')}>Check Complaint Status</button>
        <button onClick={() => console.log('Navigate to Account Settings')}>Account Settings</button>
      </section>

      <section className="complaints-section">
        <h3>Recent Complaints</h3>
        {/* Placeholder for displaying recent complaints */}
        <ul>
          <li>Complaint 1</li>
          <li>Complaint 2</li>
          {/* Map through an array of complaints to render dynamically */}
        </ul>
      </section>

      <section className="announcements-section">
        <h3>Community Announcements</h3>
        {/* Placeholder for displaying community announcements */}
        <ul>
          <li>Announcement 1</li>
          <li>Announcement 2</li>
          {/* Map through an array of announcements to render dynamically */}
        </ul>
      </section>

      <section className="account-settings-section">
        <h3>Account Settings</h3>
        <button onClick={() => console.log('Navigate to Profile Settings')}>Profile Settings</button>
        <button onClick={() => console.log('Navigate to Notification Preferences')}>Notification Preferences</button>
        <button onClick={() => console.log('Navigate to Change Password')}>Change Password</button>
      </section>

      <section className="help-section">
        <h3>Help and Support</h3>
        <button onClick={() => console.log('Navigate to FAQ')}>FAQ</button>
        <button onClick={() => console.log('Contact Customer Support')}>Contact Customer Support</button>
      </section>

      <section className="feedback-section">
        <h3>Feedback and Suggestions</h3>
        <button onClick={() => console.log('Provide Feedback')}>Provide Feedback</button>
      </section>
    </div>
  );
};

export default Dashboard;
