import { Component } from "react";
import "./example.css";
import Feed from "./components/feed";
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: "Luis", curtdas: 10, comentarios: 2 },
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
            <Feed
              id={item.id}
              username={item.username}
              curtidas={item.curtdas}
              comentarios={item.comentarios}
            />
          );
        })}
      </div>
    );
  }
}

export default Example;
