// Tehtävä 6
// Vastaus löytyy esim:
// https://www.mikedane.com/web-development/javascript/getting-user-input/
function changeContent()
{
  var rivinro = parseInt(window.prompt("Anna rivinumero(0-2), josta tieto vaihdetaan: ","0"));
  var sarakenro = parseInt(window.prompt("Anna sarakenumero(0,1), josta tieto vaihdetaan:!! ", "0"));
  var teksti = window.prompt("Syötä vaihdettava teksti: ");
  // Asetetaan sarakejoukko, jossa muutettava tieto on
  // Eli valitaan taulukko ja taulukon sisältä tietty rivi ja sen sisältä
  // kaikki sarakkeet
  var sisalto = document.getElementById('myTable').rows[rivinro].cells;
  // Valitaan sarakejoukosta se tietty sarake, jonka tieto muutetaan
  // ja vaihdetaan sen sisältö annetuksi sisällöksi
  sisalto[sarakenro].innerHTML = teksti;
}
