import React from 'react'
import "./Dashboard.css"
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Mockdata } from '../Data Component/MockData';
import { OrderData } from '../Data Component/OrderData';
function Dashboard() {

  return (
    <div className='top'>
        <div className='dash'><h1>DashBoard</h1></div>
        <div className='card-container'>
            <div className='card'>
                <div className='card-inner'>
                    <Inventory2Icon className='dash-icons' />
                    <p className='dash-num'>{Mockdata.length}</p>
                    <p className='total'>TOTAL PRODUCTS</p>
                </div>
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <ShoppingCartIcon className='dash-icons' />
                    <p className='dash-num'>{OrderData.length}</p>
                </div>
                <p className='total'>TOTAL ORDERS</p>
            </div>
        </div>
        <div className='charts-container'>
        <div className='chart'>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['group A','group B', 'group C'] }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            />
        </div>
        <div className='chart'>
        <PieChart className='pie'
            series={[
                {
                data: [
                    { id: 0, value: 10, label: 'series A' },
                    { id: 1, value: 15, label: 'series B' },
                    { id: 2, value: 20, color: 'pink', label: 'series C' },
                ],
                },
            ]}
        />
        </div>
        </div>
    </div>
  )
}

export default Dashboard;