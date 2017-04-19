import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from'wolfy87-eventemitter'
import query from '../querry.js'

window.ee = new EventEmitter();

class ChooseCity extends Component{
    constructor(props){
    super(props);
    this.state = {
        cityIsEmpty: true,
        querryType: 'current'
    };
  }
    componentDidMount=()=>{
        ReactDOM.findDOMNode(this.refs.input_city).focus();
    }
    onClickAlert = (e) => {
        e.preventDefault();
        var city = ReactDOM.findDOMNode(this.refs.input_city).value;
        window.ee.emit('City.choose', city);
         query(city,this.state.querryType, function(err, result){
            window.ee.emit('Forecast.update', result);
        });

    }

    onCityChange = (e) => {
        if (e.target.value.trim().length > 0) {
            this.setState({cityIsEmpty: false})
        } else {
            this.setState({cityIsEmpty: true})
        }
    }

    render(){
        return(
            <form className='choose_city'>
                <input
                type='text'
                className='input_city'
                defaultValue=''
                placeholder='your city'
                ref='input_city'
                onChange={this.onCityChange}
                />

                <button
                className='add__btn'
                onClick={this.onClickAlert}
                ref='alert_button'
                disabled={this.state.cityIsEmpty}  >
                Choose City
                </button>

            </form>
        )
    }
}
export default ChooseCity
