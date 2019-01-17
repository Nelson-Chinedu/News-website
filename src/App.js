import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Advert from './components/Advert';
import Home from './components/Home';
import Politics from './components/Politics';
import Business from './components/Business';
import Education from './components/Education';
import Technology from './components/Technology';
import Health from './components/Health';
import Entertainment from './components/Entertainment';
import Footer from './components/Footer';
import logo2 from './components/image/footer-add.gif';
import './App.css'

class App extends Component {
  constructor(props){
      super(props)
        this.state = {
          news:[],
          politics:[],
          business:[],
          education:[],
          technology:[],
          health:[],
          entertainment:[]
        }
  }

  getEverything(){
    const url = "https://newsapi.org/v2/everything?q=everything&apiKey="
    const key = "db6b258552d44b5a876bd78a8b9d0fe0";
    fetch(url+key)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        this.setState({
            news:data.articles
        })
    } )
    .catch((e)=>console.log(e));
  }

  getPolitics(){
    const url = "https://newsapi.org/v2/everything?q=politics&apiKey="
    const key = "db6b258552d44b5a876bd78a8b9d0fe0";
    fetch(url+key)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        this.setState({
            politics:data.articles
        })
    } )
    .catch((e)=>console.log(e));
  }

  getBusiness(){
    const url = "https://newsapi.org/v2/everything?q=business&apiKey="
    const key = "db6b258552d44b5a876bd78a8b9d0fe0";
    fetch(url+key)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        this.setState({
            business:data.articles
        })
    } )
    .catch((e)=>console.log(e));
  }

  getEducation(){
    const url = "https://newsapi.org/v2/everything?q=education&apiKey="
    const key = "db6b258552d44b5a876bd78a8b9d0fe0";
    fetch(url+key)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        this.setState({
            education:data.articles
        })
    } )
    .catch((e)=>console.log(e));
  }

  getTechnology(){
    const url = "https://newsapi.org/v2/everything?q=technology&apiKey="
    const key = "db6b258552d44b5a876bd78a8b9d0fe0";
    fetch(url+key)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        this.setState({
            technology:data.articles
        })
    } )
    .catch((e)=>console.log(e));
  }

  getHealth(){
    const url = "https://newsapi.org/v2/everything?q=health&apiKey="
    const key = "db6b258552d44b5a876bd78a8b9d0fe0";
    fetch(url+key)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        this.setState({
            health:data.articles
        })
    } )
    .catch((e)=>console.log(e));
  }

  getEntertainment(){
    const url = "https://newsapi.org/v2/everything?q=entertainment&apiKey="
    const key = "db6b258552d44b5a876bd78a8b9d0fe0";
    fetch(url+key)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        this.setState({
            entertainment:data.articles
        })
    } )
    .catch((e)=>console.log(e));
  }

  componentDidMount(){
    // const url = "https://newsapi.org/v2/everything?q=everything&apiKey="
    // const key = "db6b258552d44b5a876bd78a8b9d0fe0";
    // fetch(url+key)
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    //     this.setState({
    //         news:data.articles
    //     })
    // } )
    // .catch((e)=>console.log(e));
    this.getEverything();
    this.getPolitics();
    this.getBusiness();
    this.getEducation();
    this.getTechnology();
    this.getHealth();
    this.getEntertainment();
    
}

  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Advert />
        <div className="main-wrapper">
          <div className="main-container">
            <Switch>
            <Route exact path="/" render={()=> <Home newsApi={this.state.news}/>}/>
            <Route path="/politics" render={()=> <Politics newsApi={this.state.politics}/>}/>
            <Route path="/business" render={()=> <Business newsApi={this.state.business}/>}/>
            <Route path="/education" render={()=> <Education newsApi={this.state.education}/>}/>
            <Route path="/technology" render={()=> <Technology newsApi={this.state.technology}/>}/>
            <Route path="/health" render={()=> <Health newsApi={this.state.health}/>}/>
            <Route path="/entertainment" render={()=> <Entertainment newsApi={this.state.entertainment}/>}/>
            </Switch>
          </div>
          <aside>
            <h3>Recent Post</h3>
            {this.state.news.map((recent)=>{
              return(
                <div>
                <div className="aside-article">
                  <img src={recent.urlToImage} style={{width:'100px',height:'100px'}}/>
                  <div className="aside-text">
                    <p className="title"><a className="text-danger" href="/">{recent.title}</a></p>
                    <p className="published">{recent.publishedAt}</p>
                  </div>
                </div>
                <hr/>
                </div>
              )
            })}
            <div className="subscription-form">
              <p className="text-danger">Subscribe to our NewsLetter</p>
              <form className="form-horizontal">
              <div className="form-group">
                <label className="control-label col-sm-2 sr-only" for="email">Email:</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="email" placeholder="Enter email" />
              </div>
              </div>
              <div className="form-group"> 
                <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-danger btn-md">Subscribe</button>
                </div>
              </div>
              </form>
            </div>
          </aside>
        </div>
        <div className="container footer-add">
          <img src={logo2} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
