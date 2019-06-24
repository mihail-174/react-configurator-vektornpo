import React, { Component } from 'react';

export default class Comments extends Component {
  render() {

    function formatDate(date) {
      return date.toLocaleDateString();
    }
    
    const Comments = {
      date: new Date(),
      text: 'Надеюсь, вам понравится изучение React!',
      author: {
        name: 'Привет Китти',
        avatarUrl: 'http://placekitten.com/g/64/64'
      }
    };

    return (
            <div className="Comment">
              <div className="UserInfo">
                <img className="Avatar"
                     src={Comments.author.avatarUrl}
                     alt={Comments.author.name} />
                <div className="UserInfo-name">
                  {Comments.author.name}
                </div>
              </div>
              <div className="Comment-text">
                {Comments.text}
              </div>
              <div className="Comment-date">
                {formatDate(Comments.date)}
              </div>
            </div>
    );


  }
}
