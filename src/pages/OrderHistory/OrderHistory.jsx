import React, { useRef, useState } from 'react';
import * as S from './OrderHistory.style';
import { useNavigate } from 'react-router-dom';
import useGetOrderedMenu from '../../hooks/useGetOrderedMenu';

import Loading from '../../components/Loading.jsx/Loading';
import Calendar from '../../components/Calendar/Calendar';
import OrderHistoryMenu from '../../components/OrderHistoryMenu/OrderHistoryMenu';

const getSevenDaysAgoDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date;
};

function OrderHistory() {
  // DatePicker
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(getSevenDaysAgoDate());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  //
  const { data, error, loading } = useGetOrderedMenu('/pay');

  const filteredDate = data.filter((item) => {
    const orderDate = new Date(item.value.orderDate);
    return orderDate >= startDate && orderDate <= endDate;
  });

  const navigate = useNavigate();

  const navigateToMyPage = () => {
    navigate('/main/myPage');
  };

  if (loading) {
    return <Loading />;
  }
  const handleOpenDatePicker = () => {
    setIsOpenDatePicker(true);
  };

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderTitleWrapper>
            <S.StyledBsArrowLeft onClick={navigateToMyPage} />
            <S.HeaderTitle>주문내역</S.HeaderTitle>
          </S.HeaderTitleWrapper>
        </S.HeaderWrapper>
      </S.HeaderContainer>
      {/*  */}
      <S.SelectContainer>
        <S.SetDateContainer>
          <S.DateWrapper>
            <S.StyledAiOutlineCalendar />
            <S.Date>
              {startDate?.toLocaleDateString()} ~ {endDate?.toLocaleDateString()}
            </S.Date>
          </S.DateWrapper>
          <S.SetDateButton onClick={handleOpenDatePicker}>기간 설정</S.SetDateButton>
        </S.SetDateContainer>
      </S.SelectContainer>
      {isOpenDatePicker && (
        <Calendar
          setIsOpenDatePicker={setIsOpenDatePicker}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          onChange={handleDateChange}
        />
      )}
      {/*  */}
      <OrderHistoryMenu filteredDate={filteredDate} />
    </S.Container>
  );
}

export default OrderHistory;
