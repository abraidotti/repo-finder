import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ clearUsers, searchUsers, showAlert, showClear }) => {
  const [text, setText] = useState("");

  const onChange = event => {
    setText(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    if (text === "") {
      showAlert("Please enter a search term.", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  searchUsers: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
};

export default Search;
