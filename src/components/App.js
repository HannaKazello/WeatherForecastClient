import React, {
    Component
} from 'react';
import Forecast from './Forecast'
import ChooseCity from './ChooseCity'
import EventEmitter from'wolfy87-eventemitter'
window.ee = new EventEmitter();
var forecst=[
    {
        weather:[
            {
                icon: '02n'
            }
        ],
        main:{
            temp:'20'
        }
    },


]
class App extends Component {
    constructor(props){
    super(props);
    this.state = {
        forecast: forecst,
        city:'hrodno'
    };
  }
  componentDidMount=()=>{
      var self = this;
  window.ee.addListener('City.choose', function(item) {
    self.setState({city: item});

  });
  window.ee.addListener('Forecast.update', function(item) {
    self.setState({forecast: [item]});

  });

  }
  componentWillUnmount=()=>{
      window.ee.removeListener('City.choose');
       window.ee.removeListener('Forecast.update');
  }
    render() {
        return (
            <div className="App" >
                <div className="App-header" >
                    <h2 > Welcome to weather app </h2>
                </div>
                <div className='app'>
                    <ChooseCity/>
                    <div className='city' ref='cityLabel'>{this.state.city}</div>
                    <Forecast data={this.state.forecast}/>
                </div>
            </div>
        );
    }
}

export default App
