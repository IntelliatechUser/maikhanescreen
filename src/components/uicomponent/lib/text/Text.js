import React from 'react';

const Text = ({
  children,
  font = 'font-poppins', // Default font
  fontWeight = 'normal', // Default font weight
  textSize = 'base', // Default text size
  textColor = 'black', // Default text color
  className
}) => {
 const fWeight=fontWeight=="normal"?"font-normal":fontWeight=="regular"?"font-medium": fontWeight=="bold"?"font-bold":"";

 
  return (
    <div className={`${font} ${fWeight} ${className}  ${className} `} >
      {children}
    </div>
  );
};

export default Text;
