import React, { Component } from "react";
//trabalho com api
import "./example.css";
//https://sujeitoprogramador.com/rn-api/?api=posts
class Requesition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutri: []
    };
  }
  /*
quando o componente e monatado */
  componentDidMount() {
    let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
    fetch(url)
      .then((resposta) => resposta.json())
      .then((json) => {
        let state = this.state;
        state.nutri = json;
        this.setState(state);
      });
  }
  render() {
    return (
      <div className="conatainer">
        {this.state.nutri.map((item) => {
          return (
            <article key={item.id} className="post">
              <strong>{item.titulo}</strong>
              <img src={item.capa} alt="rosada" />
              <p>{item.subtitulo}</p>
              <a className="botao">Acessar</a>
            </article>
          );
        })}
      </div>
    );
  }
}

export default Requesition;
