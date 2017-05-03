import React, {
    Component
} from 'react';
import DayWeather from './DayWeather'

class Forecast extends Component {
    render() {

        var data=this.props.data;
        var ForecastTemplate;
        if(data.list){
            console.log('im in datalist');
             ForecastTemplate=data.list.map(function(item,index){
                return (
                   <div key={index}>
                       <DayWeather  data={item}/>
                   </div>
               )
           });
        }
        else if(data){
            console.log('im in data');
             ForecastTemplate=<DayWeather  data={data}/>
        }
        else {
            ForecastTemplate = <p>No forecast</p>
        }
        return (
           <div className='forecast' >
               {ForecastTemplate}
           </div>
         )
    }
}


export default Forecast
