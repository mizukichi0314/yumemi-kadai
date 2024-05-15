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
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{text}</label>
    </>
  );
};
