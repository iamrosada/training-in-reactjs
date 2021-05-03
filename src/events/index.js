import { Component } from "react";
import Membro from "./Membro";

class Example extends Component {
  render() {
    return (
      <div>
        <Membro title="Welcome" nome="Visitante" />
      </div>
    );
  }
}

export default Example;
