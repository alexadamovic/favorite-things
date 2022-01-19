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

    favoriteThings.push(original[1], original[2], original[0]);

    console.log(favoriteThings);

    let newArray = favoriteThings.filter(name);

    favoriteThings.forEach(function(element){
      if (element.includes("n")) {
        return;
      }
      else {
        $("#output").append("<li>" + element + " is my favorite one of the choices</li>");
      }
    });
  });
});