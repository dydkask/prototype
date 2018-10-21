import React, { Component } from 'react';

import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 0,
          text: 'hello',
          completed: true,
        },
        {
          id: 1,
          text: 'bye',
          completed: false,
        },
      ],
    };
  }

  handleInput(event) {
    if (!event.keyCode === 13) return;
    console.log(!event.keyCode === 13);
  }

  render() {
    const { todos } = this.state;

    return (
      <section className="todoapp">
        <Header todos={todos} handleInput={this.handleInput} />
        <Main todos={todos} />
        <Footer todos={todos} />
      </section>
    );
  }
}
