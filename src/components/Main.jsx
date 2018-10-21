import React, { Component } from 'react';
import Item from './Item';

export default class Main extends Component {
  render() {
    const { todos } = this.props;

    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" />
        <ul className="todo-list">
          {todos.map((todo) => (
            <Item key={todo.id} todo={todo} />
          ))}
        </ul>
      </section>
    );
  }
}
