import { useState } from 'react';
import { Form, Label, Input, Button } from './Searchbar.styled';
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
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="search_movie"></Label>
        <Input
          type="text"
          id="search_movie"
          value={query}
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};
