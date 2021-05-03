import { Component } from "react";

class Membro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: props.nome
    };
    this.Entrar = this.Entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  Entrar() {
    this.setState({ nome: "rosada" });
  }
  sair() {}
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.state.nome}</h1>
        <button onClick={this.Entrar}>Entrar como Rosada ?</button>

        <button
          onClick={() =>
            this.setState({
              nome: ""
            })
          }
        >
          sair
        </button>
      </div>
    );
  }
}

export default Membro;
