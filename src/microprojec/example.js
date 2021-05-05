import { Component } from "react";
import "./exampl.css";
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fraseAleatorias: ""
    };
    this.trocarFrase = this.trocarFrase.bind(this);
    this.frases = [
      "Cada qual sabe amar a seu modo;",

      "o modo, pouco importa; o essencial é que saiba amar.",
      "Amai, porque nada melhor para a saúde que um amor correspondido",
      "Amar não é aceitar tudo. Aliás: onde tudo é aceito, desconfio que há falta de amor."
    ];
  }
  trocarFrase() {
    let state = this.state;

    let numerAleatorios = Math.floor(Math.random() * this.frases.length);
    state.fraseAleatorias = this.frases[numerAleatorios];
    this.setState(state);
  }
  render() {
    return (
      <div>
        <img src="https://cdn.panelinha.com.br/receita/962766000000-Biscoitos-amanteigados.jpg" />
        <h1>{this.state.fraseAleatorias}</h1>
        <Botan action="Abrir os Biscoitos" acaobtn={this.trocarFrase} />
      </div>
    );
  }
}
export default Example;

class Botan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={this.props.acaobtn}>{this.props.action}</button>
      </div>
    );
  }
}
