import { log } from 'console';
import styles from './combobox.module.css'
import React, { useState, ChangeEvent } from 'react';

interface ComboboxProps {
  options: string[];
  onSelect: (option: string) => void;
}

export function Combobox({ options, onSelect }: ComboboxProps) {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSelectOption = (option: string) => {
    console.log('handleSelectOption', option)
    setInputValue(option);
    onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <div className={styles.combobox}>
      <div className={styles["combobox-input"]}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={toggleDropdown}
          onBlur={toggleDropdown}
        />
        {inputValue && (
          <button className={styles["combobox-clear"]} onClick={handleClearInput}>
            Clear
          </button>
        )}
        <button className={styles["combobox-dropdown"]} onClick={toggleDropdown}>
          {isOpen ? '▲' : '▼'}
        </button>
      </div>
      {isOpen && (
        <ul className={styles["combobox-options"]}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelectOption(option)}
              className={styles["combobox-option"]}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

