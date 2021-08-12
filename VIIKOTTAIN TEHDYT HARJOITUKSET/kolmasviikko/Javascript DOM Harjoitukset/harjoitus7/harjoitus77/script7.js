// Tehtävä 7
// Esimerkki löytyy esim.
// https://stackoverflow.com/questions/14643617/create-table-using-javascript
function createTable()
{
  // Määritetään HTML-sivu, johon kaikki palautetaan
  var body = document.getElementsByTagName("body")[0];
  // Pyydetään käyttäjältä rivimäärää ja muutetaan se kokonaisluvuksi
  var rivit = parseInt(window.prompt("Anna rivinumerot: ", "0"));
  // Pyydetään käyttäjältä sarakemäärää ja muutetaan se kokonaisluvuksi
  var sarakkeet = parseInt(window.prompt("Anna sarakemäärä: ", "0"));
  // Luodaan tauluelementti
  var taulu = document.createElement("table");
  // Luodaan taulukon kehoelementti
  var taulukonKeho = document.createElement("tbody");
  //luodaan rivit
  for(var r = 1; r <= rivit; r++)
  {
    var rivi  = document.createElement("tr");
    // luodaan sarakkeet: s-määrä sarakkeita aina yhtä riviä kohti
    for(var s = 1; s <= sarakkeet; s++)
    {
      var sarake = document.createElement("td");
      // syötetään tietoa sarakkeeseen
      var sarakkeenTeksti = document.createTextNode("sarake on rivilläää " + r + " ja sarakkeessa " + s);
      // Lisätään sarakkeenTeksti sarakkeen sisään
      sarake.appendChild(sarakkeenTeksti);
      // Lisätään sarake riviin
      rivi.appendChild(sarake);
    }
    // Lisätään rivi taulukonKehoon
    taulukonKeho.appendChild(rivi);
  }
  // Lisätään taulukonKeho tauluun
  taulu.appendChild(taulukonKeho);
  // Lisätään taulu sivustolle
  body.appendChild(taulu);
  // Laitetaan taululle 2 px paksuinen kehys
  taulu.setAttribute("border", "2");
}
