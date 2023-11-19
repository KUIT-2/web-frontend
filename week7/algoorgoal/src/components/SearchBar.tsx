import React from 'react';
import Input from './Input';
import * as S from './SearchBar.styles';

interface SearchBarPropsTypes {
  filterText: string;
  onFilterTextChange: React.Dispatch<React.SetStateAction<string>>;
  isStockOnly: boolean;
  onIsStockOnlyChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchBar({
  filterText,
  onFilterTextChange,
  isStockOnly,
  onIsStockOnlyChange,
}: SearchBarPropsTypes) {
  const handleFilterTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onFilterTextChange(event.target.value);
  };

  const handleIsStockOnlyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onIsStockOnlyChange(event.target.checked);
  };

  return (
    <S.SearchForm>
      <Input
        placeholder='Search...'
        value={filterText}
        onValueChange={handleFilterTextChange}
      />
      <label>
        <input
          type='checkbox'
          checked={isStockOnly}
          onChange={handleIsStockOnlyChange}
        />
        Only show products in stock
      </label>
    </S.SearchForm>
  );
}
