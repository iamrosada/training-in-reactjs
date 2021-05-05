import { Component } from "react";
import "./example.css";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: "Luigs", curtdas: 10, comentarios: 2 },
        { id: 2, username: "Rosada", curtdas: 12, comentarios: 5 },
        { id: 3, username: "Agua", curtdas: 212, comentarios: 125 }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <div id="card" key={item.id}>
              <h2>{item.username}</h2>
              <div id="reactions">
                curtidas
                <h3>{item.curtdas}</h3>
                <h3>{item.comentarios}</h3>
                comentarios
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Example;
