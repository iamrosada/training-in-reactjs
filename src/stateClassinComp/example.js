import { Component } from "react";

class Equipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Luis",
      contador: 0
    };
    this.aumentar = this.aumentar.bind(this);
    this.deminuir = this.deminuir.bind(this);
  }
  aumentar() {
    //o state esta a receber todos os estdos
    let state = this.state;
    state.contador += 1;
    state.nome = "Rosada";
    this.setState(state);
  }

  deminuir() {
    let state_para_diminuir = this.state;
    state_para_diminuir.contador -= 1;
    //para nao ser negativo
    if (state_para_diminuir.contador < 0) {
      state_para_diminuir.contador = 0;
    }
    this.setState(state_para_diminuir);
  }
  render() {
    return (
      <div>
        <h1>Contador</h1>
        {this.state.nome}
        <button onClick={this.aumentar}>+</button>
        <h3>{this.state.contador}</h3>
        <button onClick={this.deminuir}>-</button>
      </div>
    );
  }
}

export default Equipe;
