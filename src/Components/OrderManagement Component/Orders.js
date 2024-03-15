import React, { useEffect, useState } from 'react'
import "./Orders.css"
import {OrderData} from '../Data Component/OrderData'
import OrderDetails from './OrderDetails'
function Orders() {

  const[data, setData] = useState([]);
  const[modalOpen, setModalOpen] = useState(false);
	const[selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    setData(OrderData)
  },[])

  const handleDelete = (id) => {
    if(id > 0)
    {
      const dt = data.filter(item => item.id !== id);
      setData(dt);
    }
  }

  const handleView =(id) => {
    setModalOpen(true);
    const order = data.find(item => item.id === id);
    setSelectedOrder(order);
  }

  return (
    <div className='top-block'>
      <div className='heading'><h1>Order List</h1></div>
      <div className='order-container'>
            <table className='order-table'>
              <thead>
                <tr>
                  <td>Sr No.</td>
                  <td className='expand'>ID</td>
                  <td className='expand-large'>Name</td>
                  <td className='expand-large'>Date</td>
                  <td className='expand'>Status</td>
                  <td className='expand-large'>Actions</td>
                </tr>
              </thead>
              <tbody>
                {
                  data.map ((item, index) => {
                    return (
                       <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.id}</td>
                        <td>{item.customerName}</td>
                        <td>{item.date}</td>
                        <td>
                        <select className='status'>
                        <option>{item.status}</option>
                        {item.status === 'Delivered' ? (
                          <>
                            <option>Processing</option>
                            <option>Shipped</option>
                          </>
                        ) : item.status === 'Shipped' ? (
                          <>
                            <option>Delivered</option>
                            <option>Processing</option>
                          </>
                        ) : (
                          <>
                            <option>Delivered</option>
                            <option>Shipped</option>
                          </>
                        )}
                         </select>
                        </td>
                        <td>
                          <button className='view-btn' onClick={() => handleView(item.id) }>View</button>&nbsp;
                          {modalOpen && <OrderDetails order={selectedOrder} closeModal={() =>{setModalOpen(false)} } />}
                          <button className='del-btn' onClick={() => handleDelete(item.id) }>Delete</button>
                        </td>
                       </tr> 
                    )
                  })
                }
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default Orders