import React, { Component } from 'react';

class UrlBar extends Component {
  state = {
    url: 'http://facebook.com',
    links: []
  };

  request_data = () => {
    var request = new Request('https://nameless-harbor-10282.herokuapp.com/', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({url: this.state.url}),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    fetch(request)
      .then(response => response.json())
      .then(json => {
        var links = this.state.links.slice();
        links.push(json['short_url']);
        this.setState({links: links});
      });
  };

  change_input = (event) => {
    this.setState({url: event.target.value});
  };

  render() {
    return (
      <div className="url-bar">
        <input defaultValue={'http://www.facebook.com'} onChange={this.change_input} />
        <button onClick={this.request_data}>Short it!</button>
      </div>
    );
  }
}

export default UrlBar;