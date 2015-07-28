/*
   Create a new Github project named js102.Create a ~/workspace/js102 directory on your host machine. 3. Initialize the ~/workspace/js102 directory as a git project and attach it to your js102 Github project.

  4. Write a JavaScript function that accepts an array as an argument, 
  and returns a new array that is sorted.
  5. Write a JavaScript function that accepts an array, 
  and returns a new array that contains elements in the array you passed in 
  that are larger than 25.
  
  6. Create a simple HTML form that has one input box and one button.

  7. Attach an event handler to the button click.
  8. When the button is clicked retrieve the value of the input box. 
  You should enter in a comma-delimited list of integers (e.g. 10,3,5,67,22,etc..).
  9. Convert that string of comma-delimited numbers into an array.
  10. Pass that array into the function that finds numbers higher than 25.
  11. The array that is the result of that, pass it into the function that sorts the array.
  12. Loop over the sorted array and create a DOM string that 
      wraps a <div> element around each number (e.g. output += something).
  
  13. Give each <div> a class of "number".
  14. Write a CSS class that changes 
      the font color of the even elements to red.

  15. Write a CSS class that changes the 
  background color of the odd elements to azure.
  
  16. Push all of your code to Github.
  17. Send the link to your Github project to your assigned TA.
*/
var html = "";
function compareNum(a,b) {
    return a - b;
}

function sortArr(arr){
  var returnArr = []
  for (var i = 0; i < arr.length; i++) {
    returnArr[i] = Number(arr[i]);
  }
  return returnArr.sort(compareNum);
}

function largerThan25(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 25) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

$("#arrButton").click(function(){
  html = '';
  var userArr = $('#userArr').val().split(',');
  var largeArr = largerThan25(userArr);
  var newArr = sortArr(largeArr);
  for (var i = 0; i < newArr.length; i++) {
    html += '<div class="number">' + newArr[i] + "</div>";
  }
  $("#numbers").html(html);
})
