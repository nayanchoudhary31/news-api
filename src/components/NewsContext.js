import React , {createContext, useEffect, useState} from 'react';
import axios from 'axios'

export const NewsContext = createContext();

export const NewsContextProvider = (props)=>{
    const [data,setData] = useState();
    const apiKey='2b64c4aeb48146349b701457ff0a7071';


    useEffect(()=>{
        axios.get(
            `https://newsapi.org/v2/everything?q=tesla&from=2021-07-30&sortBy=publishedAt&apiKey=${apiKey}`
        ).then((response) => setData(response.data))
        .catch((error)=> console.log(error));
    },[])

    return(
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    )
}

