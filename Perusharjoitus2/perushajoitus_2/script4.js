//    Tehtävä 4.
//    Kirjoita ohjelma, joka kysyy käyttäjän ikää ja tarkistaa,
//    mitä ajoneuvoa saa ajaa: <16v - polkupyörää, <18v - mopoa, muutoin autoa


  function lupaAjaa()
  {
//  var annaIkasi = [19];
  var omaIka;
  var lupa;
  var salasanat = document.getElementById('annaIka').value;

  if(omaIka < 16) {

      lupa = " Aja polkupyörää";

  } else if(omaIka < 17) {

      lupa =" Voit ajaa mopoa";

  } else if(omaIka < 18) {

      lupa = "Voit ajaa mopoa";

  } else {

      lupa = "Voit ajaa autoa ja kaikkia muitakin ajo valineita";
    }
    document.getElementById("Age").innerHTML = lupa;
  }
