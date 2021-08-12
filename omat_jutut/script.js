var autoMerkki = "Audi";
console.log(autoMerkki);

var nimiLista = ["Jaakko", "Eero", "Juho", "Katri"];
console.log(nimiLista);


var nimi = nimiLista[1];
console.log(nimi);

console.log(nimiLista[0]);

console.log(nimiLista.length);

var randomLista = [1, 2, ["omena","banaani"], 5,  {merkki:'Nike'}];
console.log(randomLista);

var numero = randomLista[3];
console.log(numero);


function sayHelloToName(name) {
  alert("Tervehdys " + name);
}
sayHelloToName("Jarmo");
console.log();

 function sayHelloToName(name) {
  alert("Mitä " + name);
}
sayHelloToName1("kuuluu?");

console.log();




function sayHelloToFullName(firstname,lastname) {
  return("Hello " + firstname + " " + lastname);
}
console.log("Hello", "Jaakko", "Kenttä");



var autoMerkki = "fordii";

console.log(autoMerkki);


function myFun(auto,auto) {
  return ("Hyvä " + auto + " " + auto);
}
  console.log("Tesla", "Toyota");

  var merkki = "Tesla";

  console.log(merkki);
