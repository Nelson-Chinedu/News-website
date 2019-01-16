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
                                <img src={item.urlToImage} alt="article" className="itemImage" />
                                <h3>Education</h3>
                                <p>{item.title}</p>
                                <p>By <span className="text-danger">{item.author}</span></p>
                                <p>{item.description}</p>
                                <button className="btn btn-md btn-danger">Read More</button>
                            </div>
                        </div>
                    )
                })   
            }
        </div>
    )
}

export default Education;