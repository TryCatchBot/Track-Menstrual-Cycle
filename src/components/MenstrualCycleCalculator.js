import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MenstrualCycleTracker = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateClick = (date) => {
    if (!startDate) {
      setStartDate(date);
    } else if (!endDate && date >= startDate) {
      setEndDate(date);
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  const isWithinCycle = (date) => {
    return startDate && endDate && date >= startDate && date <= endDate;
  };

  const isOvulationWindow = (date) => {
    if (startDate) {
      const ovulationStartDate = new Date(startDate);
      ovulationStartDate.setDate(startDate.getDate() + 10); // Adjust the ovulation window as needed
      const ovulationEndDate = new Date(ovulationStartDate);
      ovulationEndDate.setDate(ovulationStartDate.getDate() + 4); // Adjust the ovulation window as needed

      return date >= ovulationStartDate && date <= ovulationEndDate;
    }
    return false;
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const isWithin = isWithinCycle(date);
      const isOvulation = isOvulationWindow(date);

      return (
        <div>
          {isWithin && <span style={{ color: '#00D1CF' }}>•</span>}
          {isOvulation && <span style={{ color: 'yellow' }}>•</span>}
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Menstrual Cycle Tracker</h2>
      <Calendar
        onClickDay={handleDateClick}
        tileContent={tileContent}
        value={selectedDates}
        selectRange={true}
      />
      <div>
        <p>Start Date: {startDate ? startDate.toDateString() : 'Not selected'}</p>
        <p>End Date: {endDate ? endDate.toDateString() : 'Not selected'}</p>
      </div>
    </div>
  );
};

export default MenstrualCycleTracker;
