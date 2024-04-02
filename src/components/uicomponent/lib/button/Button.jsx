import React from "react";

const Button = ({
 
  className,
  children,
  dataTestId,
  disabled,
  onClick,
  style,
  type,
  variant = "primary", // Default variant
  size , // Default size
}) => {
    
  // Define Tailwind CSS classes based on variant and size
  const variantClasses =
    variant === "primary"
      ? ""
      : variant === "secondary"
      ? ""
      : ""; // Add more variants as needed

  const sizeClasses =
    size === "sm"
      ? "p-2 w-[23%]"
      : size === "md"
      ? ""
      : size === "lg"
      ? ""
      : "w-full h-[70px]"; // Add more sizes as needed
console.log(">>>>>>>>>sizeClasses",sizeClasses,className)
  return (
    <button
      data-testid={dataTestId}
      disabled={disabled}
      type={type}
      className={` cursor-pointer block text-white bg-yellow-dark no-underline transition-all duration-200 ease-in-out rounded-lg  ${variantClasses} ${sizeClasses} ${className} `}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;

  
