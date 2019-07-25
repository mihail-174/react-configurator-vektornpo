import React, { Component } from 'react';

export default class List2 extends Component {
  render() {

    const booksbooks = {
      "book1": {
        "id": 11,
        "name": "имя1",
        "author": "автор1",
        "genre": "Tales"
      },
      "book2": {
        "id": 22,
        "name": "ИМЯ2",
        "author": "Ted"
      }
    }

    // const numbers = ['Новый', 'Отличное', 'Хорошее', 'Удовл.', 'Битый', 'На запчасти'];
    const listItems = Object.keys(booksbooks).map((item, index) =>
      <div key={index}>
        {index} | {item}
      </div>
    );
    return (
      <div>{listItems}</div>
    );


  }
}
