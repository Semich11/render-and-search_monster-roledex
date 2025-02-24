import { Component } from "react";

import "./card-container.style.css";

class Card extends Component {
  render() {
    console.log("RREnder");
    const { name, id, email } = this.props.monster;

    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
