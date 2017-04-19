
var query = function(city, callback) {
    console.log('Im in query');
        fetch('http://localhost:3001/current/' + city)
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                         callback('err', null);
                    }

                    // Examine the text in the response
                    response.json().then(function(data) {
                            var info = JSON.parse(data);
                             callback( null, info);
                            //   var icon = 'http://openweathermap.org/img/w/'+info.weather[0].icon+'.png'
                            //   const element = (
                            //       <div>
                            //         <h1>
                            //             Hello, {info.name}!
                            //         </h1>
                            //         <img src={icon}/>
                            //         <span>{info.main.temp}</span>
                            //       </div>


                    });
            }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}
export default query
