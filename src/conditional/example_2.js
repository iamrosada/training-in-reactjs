import { Component } from "react";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  login() {
    this.setState({ status: true });
  }
  logout() {
    this.setState({ status: false });
  }
  render() {
    return (
      <div>
        {this.state.status ? <h1> esta logado</h1> : <h1>Esta deslogado</h1>}
        <button onClick={this.login}>Fazer Login</button>
        <button onClick={this.logout}>Fazer Logout</button>
      </div>
    );
  }
}

export default Example;
