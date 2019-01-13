import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Advert from './components/Advert';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css'

class App extends Component {
  constructor(props){
      super(props)
        this.state = {
          news:[]
        }
  }
  componentDidMount(){
    const url = "https://newsapi.org/v2/everything?q=tech&apiKey="
    const key = "db6b258552d44b5a876bd78a8b9d0fe0";
    fetch(url+key)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        this.setState({
            news:data.articles
        })
    } )
    .catch((e)=>console.log(e))
}

  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Advert />
        <Home newsApi={this.state.news} />
        <Footer />
      </div>
    );
  }
}

export default App;
