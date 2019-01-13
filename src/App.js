import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Advert from './components/Advert';
import Home from './components/Home';
import Politics from './components/Politics';
import Footer from './components/Footer';
import './App.css'

class App extends Component {
  constructor(props){
      super(props)
        this.state = {
          news:[],
          politics:[],
          business:[],
          education:[],
          technology:[]
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
    
}

  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Advert />
        <div className="main-wrapper">
          <Home newsApi={this.state.news} />
          <Politics newsApi={this.state.politics} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
