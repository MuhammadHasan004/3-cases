// lowercase 
let personname1:string="Rana Hasan";
console.log(personname1.toLowerCase());

//  uppercase
console.log(personname1.toUpperCase());

//  tittlecase
let tittlecasename1:string=personname1.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log(tittlecasename1);