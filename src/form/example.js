import { Component } from "react";

class Formm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      sexo: "Masculino"
    };
    this.Email = this.Email.bind(this);
    this.Senha = this.Senha.bind(this);
    this.trocaSexo = this.trocaSexo.bind(this);
  }

  Email(e) {
    let valorDigitado = e.target.value;
    this.setState({ email: valorDigitado });
  }
  Senha(e) {
    let valorDaSenha = e.target.value;
    this.setState({ senha: valorDaSenha });
  }
  trocaSexo(e) {
    let troca = e.target.value;
    this.setState({ sexo: troca });
  }
  render() {
    return (
      <div>
        <h2>Login</h2>

        <input
          value={this.state.email}
          type="email"
          name="email"
          placeholder="email"
          onChange={this.Email}
        />
        <input
          value={this.state.senha}
          type="password"
          name="senha"
          placeholder="digita a senha"
          onChange={this.Senha}
        />
        <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <h1>{this.state.email}</h1>
        <h1>{this.state.senha}</h1>
        <h1>{this.state.sexo}</h1>
      </div>
    );
  }
}

export default Formm;
