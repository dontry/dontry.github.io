import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  ...props 
}) => {
  const baseClasses = `
    inline-block h-[38px] px-8 py-0
    text-sm font-medium leading-[38px] tracking-wider uppercase
    no-underline whitespace-nowrap
    bg-transparent rounded border
    cursor-pointer box-border
    transition-colors duration-200
  `;

  const variantClasses = {
    primary: 'text-primary border-primary hover:text-primary/80 hover:border-primary/80',
    secondary: 'text-dark-grey border-dark-grey hover:text-dark-grey/80 hover:border-dark-grey/80',
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 