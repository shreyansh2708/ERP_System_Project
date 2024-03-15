import React from 'react'
import "./OrderCalendar.css"
import BigCalendar from './BigCalendar';
function OrderCalendar() {
  return (
    <div id='top-container'>
        <div id='heading'><h1>Order Calendar</h1></div>
        <div className='calender-container'>
            <div className='calender'>
                <BigCalendar />
            </div>
            
        </div>
    </div>
  )
}

export default OrderCalendar;