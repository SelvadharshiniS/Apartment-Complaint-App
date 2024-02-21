import React from "react"
import "./About.css";
function About(props){
    return(
        <div className="about">
            <h2 className="about-title">About Us</h2>
            <p className="about-content">Welcome to ApartmentComplaintApp, your go-to platform for addressing and resolving apartment-related issues. We understand that living in an apartment complex comes with its own set of challenges, and our mission is to simplify the process of reporting and resolving complaints.
      </p>
      
      <h2 className="about-content">
        Key Features:
      </h2>
      <ul className="about-list">
        <li>Easy Complaint Submission: Report your complaints effortlessly through our user-friendly interface.</li>
        <li>Real-time Updates: Stay informed about the status of your complaint with real-time updates and notifications.</li>
        <li>Community Engagement: Connect with other residents, share experiences, and work together towards a better living environment.</li>
        <li>Secure and Confidential: Your privacy and security are our top priorities. Your complaints are confidential and securely handled.</li>
      </ul>
      <p className="about-content">
        Whether it's a leaky faucet, a noisy neighbor, or any other issue affecting your quality of life, ApartmentComplaintApp is here to help. Our goal is to create a seamless communication channel between residents and management, promoting a harmonious community living experience.
      </p>
      <p className="about-content">
        Thank you for choosing ApartmentComplaintApp. Let's build a better living environment together!
      </p>
        </div>
    );
}
export default About;
