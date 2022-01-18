$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    let name = $("#name").val();
    let iceCream = $("input[name='ice-cream']:checked").val();
    let vacation = $("input[name='vacation']:checked").val();
    let pet = $("input[name='pet']:checked").val();
    let food = $("#food").val();
    let original = [name, iceCream, vacation, pet, food];
    let favoriteThings = original.slice(3);

    console.log(favoriteThings);

    favoriteThings.push(original[1]);
    favoriteThings.push(original[2]);
    favoriteThings.push(original[0]);

    console.log(favoriteThings);

    favoriteThings.forEach(function(element){
      $("#output").append("<li>" + element + " is my favorite one of the choices</li>");
    });
  });
});