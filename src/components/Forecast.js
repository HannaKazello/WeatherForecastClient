import React, {
    Component
} from 'react';
import DayWeather from './DayWeather'

class Forecast extends Component {
    render() {

        var data=this.props.data;
        var ForecastTemplate;
        if(data.length>0){
           ForecastTemplate=data.map(function(item, index) {
               return (
                   <div key={index}>
                       <DayWeather  data={item}/>
                   </div>
               )
           })
        }
        else {ForecastTemplate = <p>No forecast</p>}
        return (
           <div className='forecast' >
               {ForecastTemplate}
               <span className={data.length>0 ? " ": ".none"}>Count: {data.length}</span>
           </div>
         )
    }
}


export default Forecast
