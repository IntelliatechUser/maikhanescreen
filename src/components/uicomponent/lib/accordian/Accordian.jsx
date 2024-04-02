// Accordion.js
import React, { useState } from 'react';
import {Text} from '../../lib/index.js'
const AccordionItem = ({ title, content ,className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-1 ${className} border-b-2 border-b-gray`}>
      <div
        className="flex justify-between items-center bg-gray p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text fontWeight='regular' textColor='green' >{title}</Text>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div className="p-2 ">
          {content.map((item, index) => (
            <div key={index}>
              <div className='flex'><strong>{item.label}:</strong> 
              <Text fontWeight='regular' textColor='pink' >{item.value}</Text> </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items ,className }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} {...item}  className={className}/>
      ))}
    </div>
  );
};

export default Accordion;
