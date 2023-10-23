import React, { useState } from 'react';

interface SearchInputProps {
  onSearch: (searchText: string) => void;
  withButton?: React.ReactNode;
}

export const SearchInput = ({ onSearch, withButton }: SearchInputProps) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className='input-group mb-3'>
      <input
        className='form-control'
        placeholder='Pesquisar...'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {withButton && (
        <div className='input-group-append'>
          <button
            className='btn btn-primary'
            type='button'
            onClick={handleSearch}
          >
            Pesquisar
          </button>
        </div>
      )}
    </div>
  );
};
