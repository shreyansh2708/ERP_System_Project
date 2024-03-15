import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {OrderData} from '../Data Component/OrderData'
import DeliveryDetails from './DeliveryDetails';
const localizer = momentLocalizer(moment);

const BigCalendar = () => {

  const[data, setData] = useState([]);
  const[modalOpen, setModalOpen] = useState(false);
  const[selectedDate, setSelectedDate] = useState(null);


  useEffect(() => 
  {
    setData(OrderData)
    const dt = OrderData.map(item => ({
      id: item.id,
      title: item.customerName,
      start: new Date(item.deliverDate),
      end: new Date(item.deliverDate),
    }));
    setData(dt);
  }, []);

  const handleSelectSlot = slotInfo => {
    const selectedDate = moment(slotInfo.start).format('YYYY-MM-DD');
    const order = OrderData.filter(
      order => moment(order.deliverDate).format('YYYY-MM-DD') === selectedDate
    );
    setSelectedDate(order);
    setModalOpen(true);
  };

  return (
    <div>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={data}
          startAccessor="start"
          endAccessor="end"
          selectable
          views={['month']}
          defaultView="month"
          onSelectSlot={handleSelectSlot}
        />
        {modalOpen && <DeliveryDetails orders={selectedDate} closeModal={() =>{setModalOpen(false)}} />}
      </div>
    </div>
  );
};

export default BigCalendar;
