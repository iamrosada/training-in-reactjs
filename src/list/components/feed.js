import { Component } from "react";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div key={this.props.id}>
        <h2>{this.props.username}</h2>
        <div id="reactions">
          {this.props.curtidas} curtidas/
          {this.props.comentarios}
          comentarios
        </div>
        <hr />
      </div>
    );
  }
}

export default Feed;
