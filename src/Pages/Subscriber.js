import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../App.css'

const Subscribercomp = (props) => {
    const [subscriber, setSubscribers] = useState([]);
    const [members, setMembers] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);
    
    useEffect(() =>
        {
            async function getdata()
            {
                  let resp = await axios.get('http://localhost:8000/api/subcription')
            setSubscriptions(resp.data);
           

            let resp2 = await axios.get('http://localhost:8000/api/member');
             setMembers([...resp2.data]);
            
            }
           getdata()
        }, [])

    useEffect(() =>
    {
        function get()
        {
            let arr=[]
            
            subscriptions.forEach(sub=>
                {
                    if(sub.movieid==props.movieid)

                  {
                       members.forEach(x=>
                          {
                            if(x._id==sub.memberid)
                               {
                                   arr.push(x.name+ ", "+sub.date) 
                                   setSubscribers(arr)
                               }
 
                          })
               }
            })
          
        }    get()    
     },[members])

    return (
      <div>
      <h3>Subscriptions Watched</h3>

      <ul>
        {
          subscriber.map(item =>
            {
              return <li>{item}</li>
            })
        }
      </ul>

      </div>
  );
    }
export default Subscribercomp