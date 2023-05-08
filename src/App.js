import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import BookedTicket from './Components/BookedTicket';
import { useState } from 'react';


function App(){

    let moviesarray=[{ 'id':1, 'movie':'kushi',"price":200,"images":'https://image-resizer-cloud-api.akamaized.net/image/16B1DA50-502C-4A39-96ED-F051261B548B/0-16x9.jpg?width=1920'},
    { 'id':2, 'movie':'Gabbar singh',"price":400 ,"images":'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/gabbar-singh-telugu-et00007159-1665126274.jpg'},
    { 'id':3, 'movie':'Atharintiki Daaredi',"price":800,"images":'https://m.media-amazon.com/images/M/MV5BZWQzNDdmN2UtZTc5ZC00M2EzLWE2ZTUtMjVhNzJmOGQ5YzkwXkEyXkFqcGdeQXVyMzA0NTI2OTM@._V1_.jpg'},
    { 'id':4, 'movie':' Waltair Veerayya',"price":1500,"images":'https://m.media-amazon.com/images/M/MV5BMzQxYjhmYzgtZTBhYS00MjliLWFkMGUtNjIzN2I1YjhhYzk1XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg'},
    { 'id':5, 'movie':'Vakeel Saab',"price":800,"images":'https://www.filmibeat.com/img/popcorn/movie_posters/vakeelsaab-20200902092227-15138.jpg'},
    { 'id':6, 'movie':'Jalsa',"price":500,"images":'https://images.news18.com/telugu/uploads/2022/08/Jalsa-Pawan-Kalyan-News18.jpg'},
    
  ]
//store the booked ticket inside tickets using setTickets
let [ticket,setTicket]=useState([])
//display all the booked tickets inside Booked ticket component





//don't change anything above
  return (
    <div >
    

    
     <BrowserRouter>
     <Navbar/>
          <Routes>

            <Route path='/' element={<Home  moviesarray={moviesarray} setTicket={setTicket} />} />
            <Route path='/bookedTickets' element={<BookedTicket ticket={ticket} setTicket={setTicket}  />} />
            
          </Routes>
     
     
     
     </BrowserRouter>
     

    </div>
  );
}

export default App;
