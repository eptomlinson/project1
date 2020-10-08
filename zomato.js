var apiKey = 'f61035e04f9b3156d193146e6e338300';
var array = [];

cuisineList()

//Get City ID for User Search
$('#foodBtn').on('click', function(e) {
  e.preventDefault();
  var userInput = $("#userInput").val();
  // console.log(userInput);
  var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=292&entity_type=city&cuisines="+userInput;
  var moviequery = "http://www.omdbapi.com/?apikey=f00951ae&t=mulan"
  $.ajax({
    url: queryURL,
    method: 'GET',
    headers: {
       'user-key': apiKey
    }
  })
.then(function(response) {
  console.log(response);
  $("#restaurant").empty();
  array = response.restaurants
  // console.log(array)
    for (var i = 1; i < 6; i++){
      // console.log(i);
    var randomIndex = Math.floor(Math.random()*array.length);
    var restaurantList = $("<li>")
    var restaurant = (response.restaurants[randomIndex].restaurant.name);
    var location = response.restaurants[randomIndex].restaurant.location.address;
    restaurantList.text(restaurant +" - Address: " +location);
    $("#restaurant").append(restaurantList);
    console.log(response.restaurants[randomIndex].restaurant.name);
    array.splice(randomIndex, 1)
    }
});
  $.ajax({
    url:moviequery,
    method: 'GET',
    headers: {
      'user-key': apiKey
    }
  })
  .then(function(movieResponse){
    console.log(movieResponse)
    $("#movie-rec").text("we're here")
  })
});

function cuisineList(){
  var cuisineListURL = "https://developers.zomato.com/api/v2.1/cuisines?city_id=292";

$.ajax({
  url: cuisineListURL,
  method: 'GET',
  headers:{
    'user-key' : apiKey
  }
}).then(function(response){
  
  // "userInput"
  for(var i = 0; i < response.cuisines.length; i++){
    var optionList = $("<option>")
    optionList.text(response.cuisines[i].cuisine.cuisine_name)
    optionList.attr("value", response.cuisines[i].cuisine.cuisine_id)
    $("#userInput").append(optionList);
    // resetdefault 
  }
 

})

}

