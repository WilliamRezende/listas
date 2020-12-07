import React, { Component } from "react";

class Input extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Digite uma tarefa" value={item} onChange={handleChange} />
          <button type="submit">{editItem ? "Editar" : "Adicionar"}</button>
        </form>
      </div>
    );
  }
}

export default Input;
