import React from 'react'
import axios from "axios";
import True from './True';
import False from './False';


const options = {
   method: "POST",
   url: "https://fake-news-detection1.p.rapidapi.com/",
   params: { text: "https://punchng.com/" },
   headers: {
     "content-type": "application/json",
     "X-RapidAPI-Key": "2a63e78121msh9ce29411fdb7a9fp159cffjsn984862b053d3",
     "X-RapidAPI-Host": "fake-news-detection1.p.rapidapi.com",
   },
   data: '{"key1":"value","key2":"value"}',
 };

 const getNews = async () => {
   try {
     const response = await axios.request(options);
     console.log(response.data);
   } catch (error) {
     console.error(error);
   }
 };


const Home = () => {

   const onClick = () => {
      if ( 'url' === "https://punchng.com/") {
        return <True />
      }else{
         return <False />
      }
      
    };

 return (
   <div className="App">
     <header className="App-header">
       <h1>FAKE NEWS DETECTOR</h1>
     </header>
     <section>
       <input type='url' name='url' placeholder="Enter news url here" />
       <button type="submit" onClick={onClick}>C</button>
       {/* {<button type="submit" onClick={onClick}>
         Check
       </button> ? (
         <>
           <True />
         </>
       ) : (
         <>
           <False />
         </>
       )} */}
     </section>
   </div>
 );
};

export default Home