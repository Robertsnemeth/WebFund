function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deapdish", "traditional", ["mozzarella"], ["mustard", "pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand-tossed", "marinera", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2)
