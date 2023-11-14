import React,{useState,useEffect} from 'react'
import axios from 'axios'
const URL="https://restcountries.com/v3.1/currency/{currency}"
export default function () {
    const[currency,setCurrency]=useState({})
    useEffect(()=>{
        axios.get(URL)
        .then((res)=>{
            
            setCurrency(res.data)
           
        })
        .catch((error) => console.error('Error fetching data:', error));
        // fetch("https://restcountries.com/v3.1/all")
        // .then((res)=>res.json())
        // .then((data)=>setCountries(data))
    },[])
    console.log(currency)
  return (
    <div>
        {
            currency.map((item,index)=>{
                return(
                    <div key={index}>
                        <div>
                            {item.currencies}
                        </div>
                        </div>
                )
            })
        }
    </div>
    
  )
}
