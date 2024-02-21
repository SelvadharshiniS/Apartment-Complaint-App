/*import { Component } from "react";
import "./About.css";


class AboutUsData extends Component {
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
export default AboutUsData;*/
import { Component } from "react";
import "./About.css";

class AboutData extends Component {
  render() {
    return (
      
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p> {this.props.text}</p>
        </div>

        <div className="image">
          <img src={this.props.img1} alt="" />
          
        </div>
      </div>
    );
  }
}
export default AboutData;