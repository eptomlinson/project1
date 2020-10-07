var apiKey = 'f61035e04f9b3156d193146e6e338300';


//Get City ID for User Search
$('#foodBtn').on('click', function(e) {
  e.preventDefault();
  var food = $('#userFood').val();
  $('#userFood').val('');
  var queryURL = "https://developers.zomato.com/api/v2.1/search?city_id=292&cuisines="+JSON.stringify(food);
  $.ajax({
    url: queryURL,
    method: 'GET',
    headers: {
       'user-key': apiKey
    }
})
.then(function(response) {
    console.log(response);
    for (i = 1; i < 20; i++){
    console.log(response.resturants[i].restaurant.name);
    }
});

//     cuisineID = response.location_suggestions[0].city_id;
//     console.log(cityID);
//     $('#food').html(response.location_suggestions[0].city_name);
//     return cityID;
//   });
  
});