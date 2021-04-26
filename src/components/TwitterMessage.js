import React from "react";

class TwitterMessage extends React.Component {

  state = {
    crntMessage: '',
    chrLimit: this.props.maxChars
  }

  handleChange = (event) => {
    this.setState({
      crntMessage: event.target.value,
      chrLimit: this.state.chrLimit - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.crntMessage} />
        <p>Remaining available characters {this.state.chrLimit}</p>
      </div>
    );
  }
}

export default TwitterMessage;
