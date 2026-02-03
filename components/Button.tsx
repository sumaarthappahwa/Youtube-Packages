
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95 transform";
  
  const variants = {
    primary: "bg-red-600 text-white shadow-lg hover:bg-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]",
    secondary: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 hover:shadow-md",
    outline: "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
