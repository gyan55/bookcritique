import {useState}from "react";
import Card from "../components/card";
import axios from "axios";

const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
  
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }

    const searchBoob=()=>{
      
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=> console.log(res))
            .catch(err=>console.log(err))
        }
    

    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div> 
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress ={searchBook}/>
                        <button onClick={searchBoob}  ><i  className="fas fa-search"></i></button>
                    </div>
                    <img src ='./bgimage.jpeg' alt="" />
                </div>
            </div>

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
           
        </>
    )
}
export default Main;