import React, { Component } from "react";
import Item from "./Item";
import Searchbar from "./Searchbar";
import { getItems, sortItems } from "../Actions/cartActions";
import { connect } from "react-redux";

export class ItemBox extends Component {
  // initialise component state
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      filter: "",
    };
  }

  // call redux action on page load to receive API data
  componentDidMount() {
    // initialise variable with url to call
    let url =
      "https://s3.eu-central-1.amazonaws.com/code-challenge-shopping-cart/cart.json";
    this.props.getItems(url);
  }

  render() {
    // set array variable for items with name matching searchbar value
    const searchedItems = this.props.items.filter((item) => {
      return item.name
        .toLowerCase()
        .startsWith(this.state.searchTerm.toLowerCase());
    });

    // conditionally render Items or No results div
    // initialise results variable
    let results;
    // if no search results
    if (searchedItems.length === 0) {
      // results = no results
      results = (
        <div className="no-results">
          <p className="no-results-ex">!</p>
          <p>No results</p>
        </div>
      );
    } else {
      // map through filtered item array and render Item component
      results = searchedItems.map((item) => {
        return (
          <div key={item.id}>
            {/*insert Item component*/}
            <Item item={item} />
            <hr />
          </div>
        );
      });
    }

    // handler function to set search value in component state
    const handleSearch = (event) => {
      this.setState({ searchTerm: event.target.value });
    };

    // handler function to set filter value in component state
    const handleSort = (value) => {
      console.log(value);
      // call redux action to sort item array order
      this.props.sortItems(value);
      // set filter value in component state to trigger component re-render
      this.setState({
        filter: value,
      });
    };

    return (
      // component container div
      <div className="itembox-container">
        {/*top bar container div*/}
        <div className="top-bar-itembox">
          {/*search area container div*/}
          <div className="search-area">
            {/*insert Searchbar component*/}
            <Searchbar onSearch={handleSearch} />
            {/*dropdown for item sort*/}
            <select
              className="filter"
              // call sort handler function onchange
              onChange={(event) => handleSort(event.target.value)}
            >
              <option value="popularity">Popularity</option>
              <option value="price-asc">Price Low-High</option>
              <option value="price-desc">Price High-Low</option>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
          </div>
          {/*p tag to show number of search results*/}
          <p>{searchedItems.length} Products</p>
        </div>
        {results}
      </div>
    );
  }
}

// map redux state to props
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

// map redux actions to props
const mapDispatchToProps = (dispatch) => ({
  getItems: (url) => dispatch(getItems(url)),
  sortItems: (value) => dispatch(sortItems(value)),
});

// subscribe component to redux
export default connect(mapStateToProps, mapDispatchToProps)(ItemBox);
