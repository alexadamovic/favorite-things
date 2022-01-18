$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    let name = $("#name").val();
    let iceCream = $("input[name='ice-cream']:checked").val();
    let food = $("#food").val();
    let array = [name, iceCream, food]
    
    let favoriteThings = array.slice(1)
    console.log(favoriteThings)

  });
});