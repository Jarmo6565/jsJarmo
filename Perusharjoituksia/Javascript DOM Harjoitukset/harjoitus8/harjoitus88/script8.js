// Tehtävä 8
// Esimerkki löytyy esim.
// https://www.w3schools.com/jsref/met_select_remove.asp
function removecolor()
{
  var removed = document.getElementById('colorSelect');
  removed.remove(removed.selectedIndex);
}
