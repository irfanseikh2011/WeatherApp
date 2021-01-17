import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Search from './components/Search/Search';
import Temperature from './components/Temperature/Temperature';
import Footer from './components/Footer/Footer';





class App extends Component {
  constructor() {
    super();
    this.state = {
        input:'kolkata',
        temp:'',
        weatherType:'',
        isLoaded: false,
        cityMatched: true,
        val:'',
        time: new Date(),
        data: []
      }
    }


    onInputChange = (event) => {
      this.setState({input:event.target.value});
    }
    
    

    onSubmitchange = async e => {
      const {input} = this.state;
      const api = 'c3d2e05d9687ec72b5be4b10e5dbd752';
      const apiKey = 'R7TMVWD1UA67';

      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api}`
      );

      const response = await api_call.json();
      console.log(response.cod);
      if(response.cod===200){
        this.setState({
          temp: parseInt(response.main.temp - 273.15),
          isLoaded: true,
          data: response
        })
        this.setState({
          val: this.state.temp +"° C"
        })
      }else{
        this.setState({
          cityMatched: false,
          val: "Enter a Valid City"
        })
      }

        const time_api_call = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&by=position&lat=${response.coord.lat}&lng=${response.coord.lon}&format=json&timr`)

        const resp = await time_api_call.json();
  
        if(resp.status === "OK"){
          let c = resp.gmtOffset;
          // this.setState({
          //   time: new Date('21 Apr 2020 09:20:30 GMT')
          // })
          console.log(this.state.time);
        }
    } 

    
  

  render(){


    return (
      <div className="App" onOpen>
        <Search callback={this.callback} onSubmitchange={this.onSubmitchange} onInputChange={this.onInputChange}/>
        <Temperature state={this.state}/>
        <Footer/>
      </div>
    )
}
}





export default App;
