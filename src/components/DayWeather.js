import React, {
    Component
} from 'react';
class DayWeather extends Component{
    render(){
    
            var icon = 'http://openweathermap.org/img/w/'+this.props.data.weather[0].icon+'.png';
            return(
                <div className="dayWeather">
                    <img src={icon}/>
                    <p className='degree'> {this.props.data.main.temp} </p>
                </div>
            )


    }
}
export default DayWeather
