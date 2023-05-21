import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css'

const Watchmoviecomp = (props) => {
    const [subscriptions, setSubscriptions] = useState([]);

  const [movies, setMovies] = useState([]);

  const [watched, setWatched] = useState([]);
  useEffect( () =>
    async function getdata()
        {
            let resp = await axios.get('http://localhost:8000/api/subcription');
            setSubscriptions(resp.data);

            let resp2 = await axios.get('http://localhost:8000/api/movie');
             setMovies([...resp2.data]);
             
             getdata()
        }, [])
     
useEffect(()=>
{
    function get()
    {
        let arr=[]
        subscriptions.forEach(sub=>
            {
                if(sub.memberid==props.memberid)
                {
                    movies.forEach(mov=>
                        {
                            if(mov._id===sub.movieid)
                            {
                                arr.push(mov.name+", "+sub.date)
                                setWatched(arr)
                            }
                        })
                }
            })
    } get()
},[movies])

  return (
    <div >
        <h2> Movies Watched</h2>
   
        <ul>
        {
          watched.map(item =>
            {
              return <li>{item}</li>
            })
        }
      </ul>
      
    </div>
  )
}

export default Watchmoviecomp