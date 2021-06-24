import React, { Component } from "react";
import Todo from "./components/example";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefa: ""
    };
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Nova Tarefa?"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(ev) =>
              this.setState({
                tarefa: ev.target.value
              })
            }
          />
        </form>
        <h1>Lista de Tarefa</h1>
        <Todo />
      </div>
    );
  }
}

export default Example;
