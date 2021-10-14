import React from 'react';

type Props = {
  className?: string;
  isVisibleTitle: boolean;
  onClick: () => void;
  prefix: string;
  title: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = (
    { isVisibleTitle, onClick, prefix, title, type = 'button', className }: Props
) => {
  return (
    <button
      className={`button button--${prefix} ${className ? className : ``}`}
      onClick={onClick}
      type={type}
      title={title}
    >
      {isVisibleTitle ? title : ``}
    </button>
  );
};

export default Button;
