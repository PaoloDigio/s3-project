import React from "react";

const SearchForm = ({ handleSearch }) => {
  return (
    <div className="container my-4">
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Cerca per titolo..." />
        </div>
        <button type="submit" className="btn btn-primary">
          Cerca
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
