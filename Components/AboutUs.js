/*import AboutUsData from "./AboutData";
import "./About.css";

function AboutUs(props) {
  return (
    <div className="about-header">
      <h1>ABOUT US</h1>
      <AboutUsData
        className="about-first"
        text={
            <ol>
        <li>Easy Complaint Submission: Report your complaints effortlessly through our user-friendly interface.</li>
        <li>Real-time Updates: Stay informed about the status of your complaint with real-time updates and notifications.</li>
        <li>Community Engagement: Connect with other residents, share experiences, and work together towards a better living environment.</li>
        <li>Secure and Confidential: Your privacy and security are our top priorities. Your complaints are confidential and securely handled.</li>
        </ol>
        }
        imgUs="https://i.pinimg.com/originals/d7/15/99/d7159910625efef2c505a556687189b1.png"
      />
    </div>
  );
}

export default AboutUs;*/


import AboutData from "./AboutData";
const AboutUs=()=>{
return(

<div className="Intro">
  <h1>ABOUT US</h1>
<AboutData  className="first-des" heading="Online Complaint" text={
  <ol>
    <li> Available on both website and App</li>
      <li>  Raise complaints about own flat or common areas.</li>
      <li>  Full visibility of the progress on the complaint.</li>
      <li> For paid editions: Auto-escalation of complaints that exceed SLA.</li>
      <li>  Provide rating on the complaint resolution process and result.</li>
    
  </ol>
}
img1="https://groups.commonfloor.com/blog/wp-content/uploads/2015/04/Mobile-Complaint.png"

/>


<AboutData
className="first-des-reverse-2"
heading="Secure Communication"
text={
<ol>
  <li>Communicate directly with your property management team through our secure messaging system.</li>
    <li> It's a direct line to ensure your messages are received and responded to promptly.</li>
    <li>For urgent matters that can't wait, use our Emergency hotline.</li>
     <li>Your safety is our top priority, and we're ready to assist you when you need it most.</li>
</ol>
}
img1="https://i1.wp.com/blog.apnacomplex.com/wp-content/uploads/2015/03/Communication-Tools.png"

/>
</div>
  
 

);
}

export default AboutUs;