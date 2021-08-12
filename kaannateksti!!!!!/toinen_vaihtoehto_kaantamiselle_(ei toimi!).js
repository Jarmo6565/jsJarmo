





var lause = "Olipa kerran onnimanni";
function metodeilla(lause)
{
  //tehdään taulukko jostakin
  var lause = Array.from(lause);  //ei toimi!!
  var kaannetty = lause.reverse();
  var lopullinen = kaannetty.join("").toString();
  console.log(lopullinen);
}

function forLauseella(lause)
{
  for(var x = lause.length-1; x >= 0; x--)
{
console.log(lause[x]);
 }
}

//forLauseella("Olipa keran onnimanni")
metodeila();
