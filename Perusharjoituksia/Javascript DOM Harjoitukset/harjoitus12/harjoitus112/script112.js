// Tehtävä 12
// Tässä tehtävässä ei käytetäkään nappia, vaan käytetään ns.
// onmouseover-event:iä, eli kun valitun tekstin päälle menee,
// niin silloin tapahtuu Jotakin
// esimerkki löytyy esim.
// https://www.w3schools.com/jsref/event_onmouseover.asp
// Ensiksi valitaan kaikki lihavoidut sanat taulukkoon
// sitten käydään taulukko läpi ja vaihdetaan fontin väri
function korosta()
{
  lihavoidut = document.getElementsByTagName('strong');
  for (var i=0; i<lihavoidut.length; i++)
  {
    lihavoidut[i].style.color = "red";
  }
}

// Kun hiiri poistuu, palautuu kirjain takaisin mustaksi
function palauta()
{
  lihavoidut = document.getElementsByTagName('strong');
  for (var i=0; i<lihavoidut.length; i++)
  {
    lihavoidut[i].style.color = "black";
  }
}
