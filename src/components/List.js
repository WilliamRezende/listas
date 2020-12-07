import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;

    return (
      <div>
        <ul>
          {items.map((item) => {
            return <Item key={item.id} title={item.title} handleDelete={() => handleDelete(item.id)} handleEdit={() => handleEdit(item.id)} />;
          })}
        </ul>
        <button type="button" onClick={clearList}>
          Apagar toda a lista
        </button>
      </div>
    );
  }
}

export default List;
