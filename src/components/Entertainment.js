import React from 'react';

const Entertainment = (props)=>{
   
    return (
        <div>
            { props.newsApi.length === 0
                ? 
                <h2>Fetching Entertainment News</h2>                                 
                : 
                //    console.log(props.newsApi.map((item)=> item.author))
                props.newsApi.map((item,index)=>{
                    return (
                        <div className="test">
                            <div key={index} className="main-container">
                                <img src={item.urlToImage} alt="Logo" style={{width:'100%',height:'auto'}} />
                                <h3>Entertainment</h3>
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

export default Entertainment;