import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '../Input';
import * as Styles from './styles';

export interface SearchInputProps {
  placeholder: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ placeholder, onChange }: SearchInputProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onChange(value);
  };

  return (
    <div className={Styles.container()}>
      <Input
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleChange}
      />
      <Search className={Styles.icon()} />
    </div>
  );
};
