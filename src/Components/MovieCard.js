import React, { useState } from 'react'
import './MovieCard.css'
import image from './images/1.jpg'

const MovieCard = (props) => {
  //create a button to add to Booked ticket and number of people

  let [num, setNum] = useState(0)
  function changeNum(e) {
    setNum(e.target.value)
  }
  function addTicket() {
    let obj = { ...props.item, num }

    if(num<=0){return alert('Enter proper value')}

    props.setTicket(all => [...all, obj])
    alert('TIcket Booked')
  }

  const mybkimg={
    
    backgroundImage:`url(${props.item.images})`,
    color:'white'
    
  
  }

  return (
    
    <div className='MovieCard ' style={mybkimg}>
      <div className='name'><div>Movies Name:{props.item.movie}</div>
      <div>Price:{props.item.price}</div>
      <input onChange={changeNum} type='number' placeholder='Enter Number Of Tickets'  className='btn'/>
      <button onClick={addTicket}>Add</button>
      </div>
    </div>
  )
}

export default MovieCard