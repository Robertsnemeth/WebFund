// function turnoff(element) {
//     element.innerText = "Off";
// }

// var Yankees = {
//     "Catcher": "Kyle Higashioka",
//     "First Base": "Anthony Rizzo",
//     "Second Base": "Gleyber Torres",
//     "Shortstop": "Isiah Kiner-Falefa",
//     "Third Base": "Josh Donaldson",
//     "Right Field": "Aaron Judge",
//     "Center Field": "Aaron Hicks",
//     "Left Field": "Joey Gallo",
//     "DH": "Giancarlo Stanton"
// }
// console.log(Yankees.Shortstop)

// function battingAverage(bAvg) {
//     var sum = 0;
//     for(var i = 0;i<bAvg.length;i++) {
//     sum+=bAvg[i];
//     var avg = sum / bAvg.length;
//     }
//     return avg;
// }
// var result = battingAverage([1/4, 2/4, 1/3, 0/5, 1/5, 3/4, 0/5]);
// console.log(result)

// var x = 5;
    
// function addToX(amount) {
//     return x + amount;
//     console.log("hello there");
// }
    
// console.log(x);
// var result = addToX(-10);
// console.log(result);
// console.log(x);

// function isPal(arr) {
//     for(var left=0; left<arr.length/2; left++) {
//         var right = arr.length-1-left;
//         if(arr[left] != arr[right]) {
//             return "Not a pal-indrome!";
//         }
//     }
//     return "Pal-indrome!";
// }
    
// var result1 = isPal( [1, 1, 2, 2, 1] );
// console.log(result1);
    
// var result2 = isPal( [3, 2, 1, 1, 2, 3] );
// console.log(result2);

// const reverse = (arr)=> {
//     var start = 0;
//     var end = arr.length-1;
//     while(start < end) {
//         var temp = arr[start];
//         arr[start]=arr[end];
//         arr[end]=temp;
//         start++;
//         end--;
//         return arr
//     }
// }
// result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result);

// var floor = Math.floor(1.8);
// var ceiling = Math.ceil( Math.PI );
// var random = Math.random();
    
// console.log(floor);
// console.log(ceiling);
// console.log(random);

// function d6(max) {
//     var roll = Math.random();
//     roll = Math.floor(roll * max)
//         return roll
// }
    
// var playerRoll = d6(6);
// console.log("The player rolled: " + playerRoll);

// var lifesAnswers = [
//     "It is certain.",
//     "It is decidedly so.",
//     "Without a doubt.",
//     "Yes – definitely.",
//     "You may rely on it.",
//     "As I see it, yes.",
//     "Most likely.",
//     "Outlook good.",
//     "Yes.",
//     "Signs point to yes.",
//     "Reply hazy, try again.",
//     "Ask again later.",
//     "Better not tell you now.",
//     "Cannot predict now.",
//     "Concentrate and ask again.",
//     "Don't count on it.",
//     "My reply is no.",
//     "My sources say no.",
//     "Outlook not so good.",
//     "Very doubtful."
// ];
// console.log(lifesAnswers);

// function giveQuestions() {
//         var question = lifesAnswers[Math.floor(Math.random() * lifesAnswers.length -1)];
//         return question;
// }
// var results = giveQuestions();
// console.log("Will the Yankees win the WS? " + results)

// console.log(lifesAnswers.length)

// var monster = {
//     id: 1,
//     name: "Bulbasaur",
//     types: ["poison", "grass"]
// };
// console.log(monster.name)
// console.log(monster.types[1])

// var pokémon = [
//     { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
//     { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
//     { "id": 9,   "name": "Blastoise",  "types": ["water"] },
//     { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
//     { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
//     { "id": 23,  "name": "Ekans",      "types": ["poison"] },
//     { "id": 24,  "name": "Arbok",      "types": ["poison"] },
//     { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
//     { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
//     { "id": 52,  "name": "Meowth",     "types": ["normal"] },
//     { "id": 63,  "name": "Abra",       "types": ["psychic"] },
//     { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
//     { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
//     { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
//     { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
//     { "id": 98,  "name": "Krabby",     "types": ["water"] },
//     { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
//     { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
//     { "id": 133, "name": "Eevee",      "types": ["normal"] },
//     { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
//     { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
//     { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
//     { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
// ];

// for(var i=pokémon.length-1; i>0;i--) {
//     // if(pokémon[i].id % 3 == 0) {
//     //     console.log(pokémon[i].name);
//     // }
//     // if(pokémon[i].types[1]) {
//     //     console.log(pokémon[i].name)
//     // }
//     if(pokémon[i].types=="poison") {
//         var results = pokémon[i].name;
//         console.log(results);
//         }
//     }
    // if(pokémon[i].types[1]=="flying") {
    //     console.log(pokémon[i].name)
    // }



// for(var i=0; i<pokémon.length; i++) {
//     if(pokémon[i].id > 99) {
//         console.log(pokémon[i].name);
//     }
// }

// var arr2d = [ [2, 5, 8],
//             [3, 6, 1],
//             [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// function isPresent2d(arr, value) {
//     for(var i=0;i<arr.length;i++) {
//         if(arr[i][0]==value) {
//             return true;
//         }
//         if(arr[i][1]==value) {
//             return true;
//         }
//         if(arr[i][2]==value) {
//             return true;
//         }
//         }
//             return false;
//     }


// var results = isPresent2d(
//     [ [2, 5, 8],
//     [3, 6, 1],
//     [5, 7, 7] ], 6);
// console.log(results);
// var results=isPresent2d();
// console.log(results)

// complete the following function
// function flatten(arr2d) {
//     var flat = [];
//     for(var i=0;i<arr2d.length;i++) {
//             flat.push(arr2d[i][0]);
//             flat.push(arr2d[i][1]);
//             flat.push(arr2d[i][2]);
//     }
//     return flat;
//     }
    
// var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
// console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

// function findAvg(arr) {
//     var sum = 0;
//     for(var i=0;i<arr.length;i++) {
//     sum = sum+=arr[i];
//     var avg = sum / arr.length;
// }
// return avg;
// }

// var results = findAvg([1,2,3,4,5,6,7]);
// console.log(results);

console.log("Hello World!")


