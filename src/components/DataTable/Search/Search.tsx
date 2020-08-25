import * as React from 'react';

const Search = ({ onSearch }) => {
  const [search, setSearch] = React.useState('');

  const onInputChange = (value) => {
    setSearch(value);
    onSearch(value);
  };
  return (
    <input
      type="text"
      className="form-control"
      style={{ width: '240px' }}
      placeholder="Search"
      value={search}
      onChange={(e) => onInputChange(e.target.value)}
    />
  );
};

export default Search;
