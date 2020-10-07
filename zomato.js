var apiKey = 'f61035e04f9b3156d193146e6e338300';

cuisineList()

//Get City ID for User Search
$('#foodBtn').on('click', function(e) {
  e.preventDefault();
  var food = $("#userFood").val();
  var userInput = $("#userInput").val();
  console.log(userInput);
  console.log(food);
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
function cuisineList(){
  var cuisineListURL = "https://developers.zomato.com/api/v2.1/cuisines?city_id=292";

$.ajax({
  url: cuisineListURL,
  method: 'GET',
  headers:{
    'user-key' : apiKey
  }
}).then(function(response){
  console.log(response.cuisines[0].cuisine.cuisine_name);
  // "userInput"
  for(var i = 0; i < response.cuisines.length; i++){
    var optionList = $("<option>")
    optionList.text(response.cuisines[i].cuisine.cuisine_name)
    optionList.attr("value", response.cuisines[i].cuisine.cuisine_id)
    $("#userInput").append(optionList);
  }
 

})

}

