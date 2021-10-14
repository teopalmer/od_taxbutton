import React from 'react';

type Props = {
  className?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  name: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  prefix?: string;
  placeHolder?: string;
  type: string;
}

const Input: React.FC<Props> = ({
  className, isDisabled = false, isRequired = false, name, onChange, placeHolder, prefix, type
}: Props) => {
  return (
    <input
      className={`input ${prefix ? `input--${prefix}` : ``} ${className ? className : ``}`}
      disabled={isDisabled}
      id={name}
      name={name}
      onChange={onChange}
      placeholder={`${placeHolder ? `${placeHolder}` : ``}`}
      required={isRequired}
      type={type}
    />

  );
};

export default Input;
