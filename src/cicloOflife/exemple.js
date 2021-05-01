import { Component } from "react";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: "00:00:00"
    };
  }
  //despois de montar o componente em tela vai chamar essa funtion
  componentDidMount() {
    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>o Horario {this.state.hora}</h1>
      </div>
    );
  }
}
export default Example;
