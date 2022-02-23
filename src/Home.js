import React, { useEffect, useState } from 'react';
// import { ReactDOM } from 'react';
import './css/home.css';
export default function Home() {
    const [btns, setbtns] = useState([]);
    const [cat, setcat] = useState("Nothing is Selected");
    const [joke, setjoke] = useState("");
    const [count, setcount] = useState(0);
    useEffect(() => {
      fetch("https://api.chucknorris.io/jokes/categories").then(res=>res.json()).then(r=>setbtns(r));
    
    },[]);
    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${cat}`).then(res=>res.json()).then(r=>setjoke(r.value));
    }, [cat,count]);
    
  return <div className='home'>
      <h1 className='title'>Chuck Norries</h1>
  <div className='cat_sec'>
  {btns.map(d=><div className={`cat ${(d==cat?"colv":"")}`} onClick={()=>{setcat(d)}} value={d}>{d}</div>)}
  </div>
  <div className='jokeDisplay'>
      <p className="selectedTitle">Selected Catagory : {cat} </p>
 <div className='jokeArea'>{joke}
 </div>
  <div className="newJokeBtn" onClick={()=>{setcount(count+1);console.log(count);}}>New Joke</div>
  </div>
  </div>;
};



