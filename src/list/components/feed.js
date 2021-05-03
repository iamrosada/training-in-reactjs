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
          {this.props.curtidas > 1
            ? this.props.curtidas + "curtidas"
            : this.props.curtidas + "curtida"}

          {this.props.comentarios > 1
            ? this.props.comentarios + "comentarios"
            : this.props.comentarios + "comentario"}
        </div>
        <hr />
      </div>
    );
  }
}

export default Feed;
