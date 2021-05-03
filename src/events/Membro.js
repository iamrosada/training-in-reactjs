import { Component } from "react";

class Membro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>{this.props.title}</div>;
  }
}

export default Membro;
