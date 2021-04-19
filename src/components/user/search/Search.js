import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
class Search extends Component {
  render() {
    return (
      <React.Fragment> 
        <Header />
        <div>
          <input
            type="text"
            className="inputsearch"
            placeholder="Search..."
            value={this.props.valueSearch}
            name="title"
            onChange={(event) => this.props.search(event.target.value)}
          ></input>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Search;
