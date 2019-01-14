import React from 'react';

const Politics = (props)=>{
   
    return (
        <div>
            { props.newsApi.length === 0
                ? 
                <h2>Fetching Politics News</h2>                                 
                : 
                //    console.log(props.newsApi.map((item)=> item.author))
                props.newsApi.map((item,index)=>{
                    return (
                        <div className="test">
                            <div key={index} className="main-container">
                                <img src={item.urlToImage} alt="article" style={{width:'200px',height:'200px'}} />
                                <h3>Politics</h3>
                                <p>{item.title}</p>
                                <p>By {item.author}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })   
            }
        </div>
    )
}

export default Politics;