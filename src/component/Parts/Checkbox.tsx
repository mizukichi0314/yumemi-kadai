import React from 'react'

interface CheckboxProps {
  id: string;
  value: string;
  text: string;
  isChecked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
  id,
  value,
  text,
  handleChange,
  isChecked
}: CheckboxProps): JSX.Element => {
  
  return (
    <>
      <input
        type='checkbox'
        id={id}
        value={value}
        onChange={handleChange}
        disabled={isChecked}
      />
      <label htmlFor={id}>{text}</label>
    </>
  );
};
