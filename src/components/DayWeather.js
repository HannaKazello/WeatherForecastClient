import React, {
    Component
} from 'react';
class DayWeather extends Component{
    render(){
            var date ='';
            if(this.props.data.dt_txt) date=this.props.data.dt_txt;
            var icon = 'http://openweathermap.org/img/w/'+this.props.data.weather[0].icon+'.png';
            return(
                <div className="dayWeather">
                    <p>{date}</p>
                    <img alt='img' src={icon}/>
                    <p className='degree'> {this.props.data.main.temp} </p>
                </div>
            )


    }
}
export default DayWeather
