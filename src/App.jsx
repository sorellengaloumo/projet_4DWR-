import React, { Component } from 'react';
import axios from 'axios';
import Datavite from './Datavite';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersCollection: [],
      searchQuery: ''
    };
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      url: 'https://free-nba.p.rapidapi.com/teams',
      params: {
        page: '0',
      },
      headers: {
        'X-RapidAPI-Key': 'a4ec50209cmshb26c72d85a79f8ap16172bjsnc41343972f28',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    };

    axios
      .request(options)
      .then((response) => {
        if (response.data.hasOwnProperty('data')) {
          this.setState({ usersCollection: response.data.data });
          console.log(response.data.data);
        } else {
          console.error("La réponse de l'appel API ne contient pas les données attendues.");
          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  }

  renderDatavite() {
    const { usersCollection, searchQuery } = this.state;
    const filteredData = usersCollection.filter((data) =>
      data.full_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredData.map((data, i) => {
      return <Datavite obj={data} key={i} />;
    });
  }

  render() {
    const { searchQuery } = this.state;

    return (
      <div className="app-container">
        <div className="header">
          <h1>PROJET 4DWR SORELLE NGALOUMO</h1>
        </div>
        <div className="content-container">
          <div className="search-bar">
            <input
              type="search"
              name="searchQuery"
              id="searchQuery"
              value={searchQuery}
              onChange={this.handleSearchChange}
              placeholder="Search..."
            />
            <button type="submit">Search</button>
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Abbreviation</th>
                  <th>City</th>
                  <th>Conference</th>
                  <th>Division</th>
                  <th>Full Name</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {this.renderDatavite()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
