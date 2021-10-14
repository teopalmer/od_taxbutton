import React from 'react';

type Props = {
  children: JSX.Element;
  isDisabled: boolean;
  className?: string;
  onClick?: (evt: React.MouseEvent) => void;
  prefix?: string;
  type?: string;
}

const onEmptyFunc = () => ``;

const Checkbox: React.FC<Props> = (
    { children, isDisabled, className, onClick = onEmptyFunc, prefix, type = `checkbox` }: Props
) => {
  return (
    <label
      className={`checkbox ${prefix ? `checkbox--${prefix}` : ``} ${className ? `${className}` : ``}`}
    >
      {children}
      <input
        disabled={isDisabled}
        className="checkbox__input"
        onClick={onClick}
        type={type}
      />
      <span className={`checkbox__icon ${prefix ? `checkbox__icon--${prefix}` : ``}`}/>
    </label>
  );
};

export default Checkbox;
