import React, { Component } from 'react';
import {
    Jumbotron,
  } from 'reactstrap';
import '../src/App.css';

class Fetch extends Component {
  constructor(props){
      super(props)
  }

  render() {
      return (
          <div className="Jumbotron">
              <h5 className="nome">{this.props.firstname}</h5>
              <h5 className="cognome">{this.props.lastname}</h5>
              <img src = {this.props.avatar}/>
          </div>
      );
  }
}

export default Fetch;