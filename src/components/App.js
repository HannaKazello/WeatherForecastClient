import React, {Component} from 'react';
import Forecast from './Forecast';
import ErrorMessage from './ErrorMessage';
import ChooseCity from './ChooseCity'
class App extends Component {
    constructor(props){
    super(props);
    this.state = {
        forecast: '',
        city:'',
        error:''
    };
  }
  changeCity = (c) => {
      this.setState({city: c});
  }
  onQuerryTypeChange=(e)=>{
      this.setState({querryType:e.currentTarget.value})
  }
  changeForecast = (f, callback) => {
      if(f.cod!==200 && f.cod!=='200'){
          console.log('im in if', f.cod);
          this.setState({error: f.message, forecast: ''});
      }
      else{
          console.log('im in else', f.cod)
          this.setState({error: '',forecast: f});
      }
      callback(null);
  }
    render() {
        return (
            <div className="App" >
                <div className="center" >
                    <h2 > Welcome to weather app </h2>
                </div>
                <div className='center'>
                    <ChooseCity changeCity={this.changeCity} changeForecast={this.changeForecast} />
                    <ErrorMessage message={this.state.error}/>
                    <div className='city'>{this.state.city}</div>
                    <Forecast data={this.state.forecast}/>
                </div>
            </div>
        );
    }
}

export default App
