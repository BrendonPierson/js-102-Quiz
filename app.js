//holds html string
var html = "";

//compares two numbers for the .sort() method
function compareNum(a,b) {
    return a - b;
}

//returns true for values > 25 for the filter() method
function twentyFive(val){
  return val > 25;
}

//sorts array by int values using comparNum
function sortArr(arr){
  return arr.sort(compareNum);
}

//filters an array using twentyFive
function largerThan25(arr) {
  var newArr = arr.filter(twentyFive) 
  return newArr;
}

// take input data, modify, sort, and put it in the DOM
function postNumbers(){
  html = '';
  //turns user input string into an array
  var userArr = $('#userArr').val().split(',');
  // modifys user array
  var newArr = sortArr(largerThan25(userArr));
  // adds each number to the DOM within a div with class number
  for (var i = 0; i < newArr.length; i++) {
    html += '<div class="number">' + newArr[i] + "</div>";
  }
  //set the #numbers div html to the large string created by the for loop
  $("#numbers").html(html);
}

//event handler to fire postnumbers when the button is clicked
$("#arrButton").click(postNumbers);

//event handler to prevent default enter event 
//and allow enter to act the same as button click
$("#userArr").on('keydown', function(e){
  console.log(e.which)
  if (e.which == 13) {
    e.stopPropagation();
    e.preventDefault();
    postNumbers();
  }
});
