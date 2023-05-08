import React from 'react'
const BookedTicket = (props) => {

  let tickets = props.ticket
  let del = (e) => {
      tickets=tickets.filter((item)=>{ console.log(item.id,e.target.id)   ;return item.id!=e.target.id})
      console.log(tickets)
    props.setTicket([...tickets])
  }
  //display all the booked tickets ,total no of people and total price 
  return (
    <div>
      {
        tickets.map((item, index) => {
          return (<div  key={index}>
            
            <div>Movies Name:{item.movie}</div>
            <div>Price:{item.price}</div>
            <div>number of tickets:{item.num}</div>
            <div> total price:   {item.num * item.price} </div>
            <button id={item.id} onClick={del}> Delete Ticket</button>
          </div>)
        })
      }
    </div>
  )
}
export default BookedTicket 