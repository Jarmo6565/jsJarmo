// Tehtävä 10
// Esimerkki löytyy esim.
// https://stackoverflow.com/questions/14268583/javascript-to-input-text-into-a-textbox
function laske()
{
  var sade = document.getElementById('sade').value;
  // Pallon tilavuus lasketaan kaavalla 4 x pii x säde x säde x säde / 3
  var tilavuus = 4*Math.pow(sade,3)/3;
  document.getElementById('tilavuus').value = tilavuus;
}
