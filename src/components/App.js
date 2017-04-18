import React, {
    Component
} from 'react';
import Forecast from './Forecast'
var forecst=[
    {
        img: 'img1',
        degree: 25
    },
    {
        img: 'img2',
        degree: 26
    },
    {
        img: 'img3',
        degree: 34
    }

]
class App extends Component {
    render() {
        return (
            <div className="App" >
                <div className="App-header" >
                    <h2 > Welcome to weather app </h2>
                </div>
                <div className='app'>
                    <Forecast data={forecst}/>
                </div>
            </div>
        );
    }
}

export default App
