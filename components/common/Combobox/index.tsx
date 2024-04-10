import styles from "./combobox.module.css";
import React, { useState, ChangeEvent, useRef, useMemo, ReactNode } from "react";

interface ComboboxProps {
  options: string[];
  onSelect: (option: string) => void;
  children?:ReactNode
}

export function Combobox({ options=[], onSelect }: ComboboxProps) {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setInputValue(text);
  };

  const filteredOptions = useMemo(() => {
    if (inputValue) {
      return options.filter((option) =>
        option.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    return options;
  }, [options, inputValue]);

  const handleSelectOption = (option: string) => {
    setInputValue(option);
    onSelect(option);
    setIsOpen(false);
  };
  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      if (!dropdownRef.current?.contains(document.activeElement)) {
        setIsOpen(false);
      }
    }, 200);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  return (
    <div className={styles.combobox}>
      <div className={styles["combobox-input"]}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {inputValue && (
          <span className={styles["combobox-clear"]} onClick={handleClearInput}>
            x
          </span>
        )}
        <span className={styles["combobox-dropdown"]} onClick={toggleDropdown}>
          {isOpen ? "▲" : "▼"}
        </span>
      </div>
      {isOpen && (
        <ul ref={dropdownRef} className={styles["combobox-options"]}>
          {filteredOptions.map((option) => (
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
}
