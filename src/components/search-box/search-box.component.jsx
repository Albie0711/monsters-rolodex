import React from "react";

import "./search-box.styles.css";

// function components dont have access to state
// because they dont have access to constructor which is a class method
// on the Component imported from react
// they don't have access to life cycle methods
// Sometimes all you want to do is render html
// thats what Functional Component really is
// its a Component that gets props and returns html
// if you don't need internal state or access to life cycle methods
// Use a functional component
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder} // make it dynamic. will be a passed in prop
    onChange={handleChange}
    // onChange={(e) =>
    //   this.setState(
    //     { searchField: e.target.value }
    //     // () =>
    //     // console.log(this.state)
    //   )
    // }
  />
);
