import { Component } from "react";

class Equipe extends Component {
  render() {
    return (
      <div>
        <h3>ola eu sou {this.props.nome}</h3>
        <h3> I dade: {this.props.idade} anos</h3>
        <h3> Cargo: {this.props.cargo} </h3>
        <h3> País: {this.props.pais} </h3>
      </div>
    );
  }
}

export default function InClass() {
  return (
    <div>
      <h2>Testando</h2>
      <Equipe nome="luis" idade="22" pais="Angola" cargo="programador" />
    </div>
  );
}
