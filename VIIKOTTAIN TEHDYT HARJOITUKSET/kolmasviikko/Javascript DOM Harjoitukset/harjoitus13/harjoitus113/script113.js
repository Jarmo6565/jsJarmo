// Tehtävä 13
// esimerkki löytyy esim.
// https://www.w3schools.com/jsref/event_onresize.asp
function koonMuutos()
{
  var leveys = window.outerWidth;
  var korkeus = window.outerHeight;
  document.getElementById('vastaus').innerHTML = "Ikkunan leveys on: " + leveys + " ja korkeus on: " + korkeus;
}
