import React from 'react'
import MovieCard from './MovieCard'
import BookedTicket from './BookedTicket'
import './Home.css'
const Home = (props) =>{
    let moviearray=props.moviesarray
    let setTicket=props.setTicket
    console.log(props)
  return (
    <div className='homeCOntainer'>
    {
//map all the movies here using Moviecard
moviearray.map((item,index)=><MovieCard setTicket={setTicket} key={index} item={item}/>)
    }
    </div>
  )
}
export default Home