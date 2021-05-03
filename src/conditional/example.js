import { Component } from "react";
import Examp from "./example_2";
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comprovar: 2
    };
  }

  render() {
    return (
      <div>
        {this.state.comprovar === 1 && <h1> welcome...</h1>}
        <Examp />
      </div>
    );
  }
}

export default Example;
