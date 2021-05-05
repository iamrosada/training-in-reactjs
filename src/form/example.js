import { Component } from "react";

class Formm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "l",
      senha: "98709"
    };
    this.Email = this.Email.bind(this);
    this.Senha = this.Senha.bind(this);
  }

  Email(e) {
    let valorDigitado = e.target.value;
    this.setState({ email: valorDigitado });
  }
  Senha(e) {
    let valorDaSenha = e.target.value;
    this.setState({ senha: valorDaSenha });
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
      </div>
    );
  }
}

export default Formm;
