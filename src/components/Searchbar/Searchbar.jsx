import { useState } from 'react';
export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('You should to write something to search');
    }
    onSubmit(query);
    formReset();
  };
  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  const formReset = () => {
    setQuery('');
  };
  return (
    <div>
      Search
      <form onSubmit={handleSubmit}>
        <label htmlFor="search_movie"></label>
        <input
          type="text"
          id="search_movie"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
