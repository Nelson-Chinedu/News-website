import React from 'react';

const Home = (props)=>{
   
    return (
        <div>
            { props.newsApi.length === 0
                ? 
                <h2>Fetching Home News</h2>                                 
                : 
                //    console.log(props.newsApi.map((item)=> item.author))
                props.newsApi.map((item,index)=>{
                    return (
                        <div className="test">
                            <div key={index} className="wrapper">
                                <img src={item.urlToImage} alt="article" className="itemImage" />
                                {/* <h3>Tech</h3> */}
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

export default Home;