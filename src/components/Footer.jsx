import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>4</strong>
          <span />
          <span>items</span>
          <span> left</span>
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">
              All
            </a>
          </li>
          <span />
          <li>
            <a href="#/active" className="">
              Active
            </a>
          </li>
          <span />
          <li>
            <a href="#/completed" className="">
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}
