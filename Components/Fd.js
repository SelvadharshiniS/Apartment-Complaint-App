import FeedbackData from "./FeedbackData";
import "./AboutUsStyles.css";

function Fd(props) {
  return (
    <div className="about-header">
      <h1>Who are We?</h1>
      <FeedbackData
        className="about-first"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
      make a type specimen book. It has 
      survived not only five centuries, but 
      also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
"
 
    
        imgUs="https://images.unsplash.com/photo-1596889157941-d2651f70a4f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
      />
    </div>
  );
}

export default Fd;