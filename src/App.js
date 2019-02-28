import React, { Component } from 'react';
import './App.css';

import Menu from './Menu';

import News from './News'

import Fetch from './Fetch'
import Footer from './Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetch: [],
      loader: false    //aggiungo un loader che diventerà true quando la pagina sarà caricata
    };
    // this.dataFetch();
  }

  componentDidMount() {
    this.setState({ loader: true });
    this.dataFetch();
    this.setState({ loader: false });
  }

  dataFetch() {
    fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(json =>
        this.setState({
          fetch: json
        })
      );

  }

  render() {

    const { loader, fetch } = this.state
    console.log(fetch)
    return (
      <div>

        <Menu></Menu>
        <News></News>
        {/*
        {loader ? (
          <p>'...loading'</p>
        ) : (
            <div className="abc">

              {fetch.map(item => (
                <div>
                  <Fetch avatar={item.avatar} firstname={item.first_name} lastname={item.last_name} />
                </div>
              ))}
            </div>

              */}
          )}


<Footer></Footer>
      </div>
    );
  }
}

export default App;
