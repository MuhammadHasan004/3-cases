// lowercase 
var personname1 = "Rana Hasan";
console.log(personname1.toLowerCase());
//  uppercase
console.log(personname1.toUpperCase());
//  tittlecase
var tittlecasename1 = personname1.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(' ');
console.log(tittlecasename1);
