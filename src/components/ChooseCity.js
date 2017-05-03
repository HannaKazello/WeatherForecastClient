import React, {
    Component
} from 'react';
import waterfall from 'async/waterfall';


class ChooseCity extends Component{
    constructor(props){
    super(props);
    this.state = {
        city:'',
        querryType: 'current'
    };
    this.changeCity=this.props.changeCity;
    this.changeForecast=this.props.changeForecast;
  }
  onQuerryTypeChange=(e)=>{
      this.setState({querryType:e.currentTarget.value})
  }
    onClickAlert = (e) => {
        this.changeCity(this.state.city);
        e.preventDefault();
        waterfall([
              this.tryFetch,
              this.changeForecast
          ], function (err, result) {
              console.log('done', result);
          });
        e.preventDefault();
    }
    tryChangeforecast=(err, callback)=>{

    }
    tryFetch=(callback)=>{
        console.log('Im in query');
        console.log(this.state.city, this.state.querryType);
        fetch('http://localhost:3001/'+this.state.querryType+'/' + this.state.city)
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                                response.status);
                         callback('err', null);
                    }
                    response.json().then(function(data) {
                        var info = JSON.parse(data);
                        console.log(info);
                        callback( null, info);
                    });
                }
            ).catch(function(err) {
            console.log('Fetch Error :-S', err);
            });
        }
    onCityChange = (e) => {
         this.setState({city: e.target.value});
    }

    render(){
        return(
            <form className='choose_city'>
                <input
                type='text'
                className='input_city'
                defaultValue=''
                placeholder='your city'
                onChange={this.onCityChange}
                />
                <button
                className='add__btn'
                onClick={this.onClickAlert}
                disabled={this.state.cityIsEmpty}  >
                Choose City
                </button>
                <div>
                <input type="radio" name="site_name"
                           value={'current'}
                           checked={this.state.querryType === 'current'}
                           onChange={this.onQuerryTypeChange} />Current
                <input type="radio" name="address"
                           value={'forecast'}
                           checked={this.state.querryType === 'forecast'}
                           onChange={this.onQuerryTypeChange} />Forecast
                </div>
            </form>
        )
    }
}
export default ChooseCity
