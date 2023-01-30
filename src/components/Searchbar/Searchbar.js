import { useState } from 'react';

export const Searchbar = ({onSubmit}) => {


  const [query, setQuery] = useState('')

 const handleFormSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);
    reset();
  };

 const reset = ()=> {
    setQuery('')

  }
 const handleSetQuery = ({ target: { value } }) => {
  setQuery(
      value,
    );
  };

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleFormSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="query"
            value={query}
            onChange={handleSetQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
}