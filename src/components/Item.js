import React, { Component } from "react";

class Item extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    const specialTitle = title.includes("ler") || title.includes("estudar") ? true : false;

    return (
      <li style={specialTitle ? { backgroundColor: "#AAD7FA" } : { backgroundColor: "none" }}>
        <div>
          <span>{title}</span>
          <button type="button" onClick={handleEdit}>
            Editar
          </button>
          <button type="button" onClick={handleDelete}>
            Excluir
          </button>
        </div>
      </li>
    );
  }
}

export default Item;
