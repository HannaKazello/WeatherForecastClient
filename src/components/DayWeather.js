import React, {
    Component
} from 'react';
class DayWeather extends Component{
    render(){
        return(
            <div className="dayWeather">
                <p className='img'> {this.props.data.img} </p>
                <p className='degree'> {this.props.data.degree} </p>
            </div>
        )
    }
}
export default DayWeather
