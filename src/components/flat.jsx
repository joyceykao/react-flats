import React, { Component } from 'react';

class Flat extends Component {
  render() {
    return (
      <div className="card"  style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg')` }}>
        <div className="card-category">150 EUR</div>
          <div className="card-description">
            <h2>Super 60m2 in trendy neighborhood!</h2>
          </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
