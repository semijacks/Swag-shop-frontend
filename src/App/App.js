import React, { Component } from "react";
import "./App.css";
import HttpService from "../services/http-service";

const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);

    //Bind functions
    this.loadData = this.loadData.bind(this);

    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(
      products => {
        console.log(products);
      },
      err => {}
    );
  };

  render() {
    return (
      <div className=" container App">
        <h2>Welcome to the swag shop</h2>
      </div>
    );
  }
}

export default App;
