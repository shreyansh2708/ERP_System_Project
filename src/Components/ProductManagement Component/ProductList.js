import React, { useEffect, useState } from 'react'
import "./ProductList.css"
import { Mockdata } from '../Data Component/MockData'

function ProductList() {
  
  const[data, setData] = useState([]);
  const[name, setName] = useState('');
  const[category, setCategory] = useState('');
  const[price, setPrice] = useState();
  const[stock, setStock] = useState();
  const[id, setId] = useState();
  const[isUpdate, setIsUpdate] = useState(false);
  
  useEffect(() => {
    setData(Mockdata)
  },[])

  
  const handleEdit = (id) => {
    const dt = data.filter(item => item.id === id);
    if(dt !== undefined)
    {
      setId(id);
      setName(dt[0].name);
      setCategory(dt[0].category);
      setPrice(dt[0].price);
      setStock(dt[0].stock_quantity);
      setIsUpdate(true);
    }
  }

  const handleDelete = (id) => {
    if(id > 0)
    {
      const dt = data.filter(item => item.id !== id);
      setData(dt);
    }
  }

  const handleAdd = (e) => {
    e.preventDefault();

    if (!name || !category || !price || !stock) 
    {
      alert('Please fill in all fields');
      return;
    }
    const isDuplicate = data.some(item => item.name === name && item.category === category && item.price === price && item.stock_quantity === stock);
    if (isDuplicate) {
      alert('This entry already exists');
      return;
    }
    const dt = [...data];
    const newData = {
      id: data.length+1,
      name: name,
      category: category,
      price: price,
      stock_quantity: stock
    }

    dt.push(newData);
    setData(dt);
    handleClear();
  }

  const handleUpdate = () => {
    const index = data.map((item) => {
      return item.id;
    }).indexOf(id);

    const dt = [...data];
    dt[index].name = name;
    dt[index].category = category;
    dt[index].price = price;
    dt[index].stock_quantity = stock;

    setData(dt);
    handleClear();
  }

  
  const handleClear = () => {
    setId(0);
    setName('');
    setCategory('');
    setPrice('');
    setStock('');
    setIsUpdate(false);
  }


  return (
    <div className='top-container'>
        <div className='head'><h1>Product List</h1></div>
        <div className='add-container'>
          <div className='add-product'>
            <span>
              <input type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)} value={name}/>
            </span>
            <span>
              <input type='text' placeholder='Enter category' onChange={(e) => setCategory(e.target.value)} value={category}/>
            </span>
            <span>
              <input type='text' placeholder='Enter Price' onChange={(e) => setPrice(e.target.value)} value={price}/>
            </span>
            <span>
              <input type='text' placeholder='Enter Stock' onChange={(e) => setStock(e.target.value)} value={stock}/>
            </span>
            <span>
              {
                !isUpdate ? 
                <button className='btn1' onClick={(e) => handleAdd(e)}>Add</button>
                :
                <button className='btn1' onClick={() => handleUpdate()}>Update</button>
              }            
            </span>
            <span>
              <button className='btn1 btn-clear' onClick={() => handleClear()}>Clear</button>
              </span>
          </div>
        </div>
        <div className='table-container '>
            <table className='table'>
              <thead>
                <tr>
                  <td>Sr No.</td>
                  <td className='expand'>ID</td>
                  <td className='expand-large'>Name</td>
                  <td className='expand-large'>Category</td>
                  <td className='expand'>Price</td>
                  <td className='expand'>Stock</td>
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
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>Rs {item.price}</td>
                        <td>{item.stock_quantity}</td>
                        <td>
                          <button className='btn1' onClick={() => handleEdit(item.id) }>Edit</button>&nbsp;
                          <button className='btn2' onClick={() => handleDelete(item.id) }>Delete</button>
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

export default ProductList