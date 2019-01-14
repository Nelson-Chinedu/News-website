import React from 'react';

const Education = (props)=>{
   
    return (
        <div>
            { props.newsApi.length === 0
                ? 
                <h2>Fetching Education News</h2>                                 
                : 
                //    console.log(props.newsApi.map((item)=> item.author))
                props.newsApi.map((item,index)=>{
                    return (
                        <div className="test">
                            <div key={index} className="main-container">
                                <img src={item.urlToImage} alt="article" style={{width:'200px',height:'200px'}} />
                                <h3>Education</h3>
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

export default Education;