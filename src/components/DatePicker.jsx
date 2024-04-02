import React, { useState } from 'react';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');
  

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <label htmlFor="datepicker">Select a date:</label>
      <input
        type="datetime-local"
        id="datepicker"
        name="datepicker"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <p>Selected Date: {selectedDate}</p>
    </div>
  );
};

export default DatePicker;
