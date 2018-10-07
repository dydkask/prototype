import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label />
          <button className="destroy" />
        </div>
        <input className="edit" />
      </li>
    );
  }
}
