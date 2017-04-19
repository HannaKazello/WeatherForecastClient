
var query = function(city,type, callback) {
    console.log('Im in query');
        fetch('http://localhost:3001/'+type+'/' + city)
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
                    });
            }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}
export default query
