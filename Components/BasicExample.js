import Accordion from 'react-bootstrap/Accordion';
//import "./BasicExample.css";
function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Welcome</Accordion.Header>
        <Accordion.Body>
        "Welcome to our Apartment Complaint App – your dedicated platform for addressing concerns and improving the quality of your living experience.
         We understand that your home is more than just a space; it's where you build memories and create a sense of belonging. 
         Our goal is to ensure that your living environment meets your expectations.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Concerns</Accordion.Header>
        <Accordion.Body>
        With this app, you have the power to voice your concerns and contribute to the betterment of your community. 
        We believe that open communication is the key to a harmonious living space, and your feedback is invaluable in making positive changes
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;