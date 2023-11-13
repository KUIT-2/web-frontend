import React, { ChangeEvent } from 'react';
import styles from './SearchBar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export default function SearchBar({ handleChange, value }: Props) {
  return (
    <div className={styles.inputWrapper}>
      <AiOutlineSearch className={styles.icon} />
      <input
        type={'search'}
        className={styles.input}
        value={value}
        placeholder='Search...'
        onChange={handleChange}
      />
    </div>
  );
}
