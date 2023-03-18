import React, { forwardRef, useRef, useState } from 'react';
import * as S from './Calendar.style';
import ReactDOM from 'react-dom';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Calendar({
  setIsOpenDatePicker,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  onChange,
}) {
  const handleCloseModal = () => {
    setIsOpenDatePicker(false);
  };

  return ReactDOM.createPortal(
    <>
      <S.Backdrop onClick={handleCloseModal} />
      <div>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
      </div>
    </>,
    document.getElementById('overlay-root')
  );
}

export default Calendar;
