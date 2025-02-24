import { Component } from "react";

import Card from "../card-container/card-container.component";

import "./card-list.style.css";

class CardList extends Component {
  render() {
    console.log("RREnder");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
