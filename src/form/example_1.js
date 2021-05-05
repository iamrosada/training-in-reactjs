import { Component } from "react";
import "./exa.css";
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      nome: ""
    };
    this.trocaSenha = this.trocaSenha.bind(this);
    this.trocarEmail = this.trocarEmail.bind(this);
    this.Cadastra = this.Cadastra.bind(this);
  }
  trocarEmail(e) {
    let trocarValueEmail = e.target.value;
    this.setState({ email: trocarValueEmail });
  }
  trocaSenha(e) {
    let trocarValueSenha = e.target.value;
    this.setState({ senha: trocarValueSenha });
  }
  Cadastra(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>Novo Usuario</h1>
        <form onSubmit={this.Cadastra}>
          <input
            type="text"
            name="nome"
            value={this.state.nome}
            onChange={(e) => {
              this.setState({ nome: e.target.value });
            }}
            placeholder="digite o teu nome"
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="digite o e-mail"
            onChange={this.trocarEmail}
          />
          <input
            type="password"
            name="senha"
            value={this.state.senha}
            placeholder="digite a senha"
            onChange={this.trocaSenha}
          />
          <button type="submit">Cadastra</button>
        </form>
      </div>
    );
  }
}

export default Example;
