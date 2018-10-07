import React, { Component } from 'react';
import Item from './Item';

export default class Main extends Component {
  render() {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" />
        <ul className="todo-list">
          <Item />
        </ul>
      </section>
    );
  }
}
