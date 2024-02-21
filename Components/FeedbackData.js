import { Component } from "react";
import "./Feedback.css";

class FeedbackData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className={this.props.className}>
          <h1>{this.props.heading}</h1>
          <p> {this.props.text}</p>
          <img src={this.props.imgUs} alt="/" />
        </div>
      </div>
    );
  }
}
export default FeedbackData;