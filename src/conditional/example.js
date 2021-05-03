import { Component } from "react";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comprovar: 1
    };
  }

  render() {
    return (
      <div>
        {this.state.comprovar === 1 && <h1> welcome...</h1>}
        <div>bay</div>
      </div>
    );
  }
}

export default Example;
