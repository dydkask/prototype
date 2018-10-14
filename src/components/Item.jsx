import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { text, completed } = this.props.todo;

    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>{text}</label>
          <button className="destroy" />
        </div>
        <input className="edit" />
      </li>
    );
  }
}
