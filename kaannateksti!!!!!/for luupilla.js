

var lause = "Olipa kerran Onnimanni";
for(var x = lause.length-1; x >= 0; x--)
{
 console.log(lause[x]); // Kun x:n ottaa pois , sana toistuu vaakasuoraan
                          //  niinkuin on kirjoitettu. Muuten se kirjoitetaan
                          // käänteisessä järjestyksessä kirjaimet pystysuorassa.
}

{
var lause = " Munkki luostari";
for(var x = 0; x < lause.length;  x++)

  console.log(lause[x]); // Rivi tulostuu pystysuorassa luettuna ylhäältä
                           // alas päin. Silmukka on toisenlailla rakennettu
                           //yllä olevaan.
}



var lause = "Olipa kerran Onnimanni";
for(var x = 0; x < lause.length; x++)
{
console.log(lause);     // Rivi tulostuu vaakasuoraan.
                          //  Silmukka on toisenlailla rakennettu
                          //yllä oleviin.
                          //(lisäämällä [x]  console.log(lause) sulkujen sisälle,
                          // lauseen saa kääntymään pystysuoraan
}



function kaanna()
{
    // hakee html-sivulta id-tekstistä syötetyn sanan
  var haettuTeksti = document.getElementById('teksti').value;
    //lukee sanan pituuden
  var sananPituus =  haettuTeksti.length;
    // perustetaan uusisana joka on syötetty laatikkoon ja käännetään se
    // päinvastaiseen muotoon
  var uusiSana = "";
  for(var x = sananPituus-1; x >= 0;  x--)
  {
    //uusisana on haettu html-sivulta ja siitä tulee tulostettava sana
    // x:llä voidaan hakea tiettyä kirjainta syötetystä sanasta
    uusiSana = uusiSana + haettuTeksti[x];
    alert(x);
  }
    //  vie vastauksen HTML sivulle
  document.getElementById('vastaus').innerHTML = uusiSana;
}
