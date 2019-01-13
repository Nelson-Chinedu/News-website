import React from 'react';

const Home = (props)=>{
   
    return (
        <div>
            {props.newsApi.length !== 0 ? 
            //    console.log(props.newsApi.map((item)=> item.author))
                props.newsApi.map((item,index)=>{
                    return (<li key={index}>{item.author}</li>)
                })                                 
                : <h2>Fetching News</h2>
            }
        </div>
    )
}

export default Home;