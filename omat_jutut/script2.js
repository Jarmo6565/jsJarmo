
function kaanna()
{
    // hakee html-sivulta id-tekstistä syötetyn sanan
  var haettuTeksti = document.getElementById('salasana1').value;
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
  //  alert(x);
  }
    //  vie vastauksen HTML sivulle
  document.getElementById('vastaus').innerHTML = uusiSana;
}




















/*
function testi (arr)
{
  arr.sort();
  var pienin = arr.shift();
  var suurin = arr.pop();
  console.log("Pienin: " + pienin + " suurin "+suurin);
}
*/
