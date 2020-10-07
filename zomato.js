var apiKey = 'f61035e04f9b3156d193146e6e338300';

cuisineList()

//Get City ID for User Search
$('#foodBtn').on('click', function(e) {
  e.preventDefault();
  var userInput = $("#userInput").val();
  // console.log(userInput);
  var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=292&entity_type=city&cuisines="+userInput;
  $.ajax({
    url: queryURL,
    method: 'GET',
    headers: {
       'user-key': apiKey
    }
})
.then(function(response) {
  console.log(response);
    for (var i = 1; i < 20; i++){
    var restaurantList = $("<li>")
    var restaurant = (response.restaurants[i].restaurant.name);
    var location = response.restaurants[i].restaurant.location.address;
    restaurantList.text(restaurant +" - Address: " +location);
    $("#restaurant").append(restaurantList);
    console.log(response.restaurants[i].restaurant.name);
    }
});
  
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
  }
 

})

}

