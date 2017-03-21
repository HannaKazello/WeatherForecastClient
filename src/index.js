import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var query = function(){
    fetch('http://localhost:3001/current/hrodno')  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        var info = JSON.parse(data);  
          console.log(info);
          var icon = 'http://openweathermap.org/img/w/'+info.weather[0].icon+'.png'
          const element = (
              <div>
                <h1>
                    Hello, {info.name}!
                </h1>
                <img src={icon}/>
                <span>{info.main.temp}</span>
              </div>
);
          ReactDOM.render(
  element,
  document.getElementById('root')
    
);
      });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
}

query();