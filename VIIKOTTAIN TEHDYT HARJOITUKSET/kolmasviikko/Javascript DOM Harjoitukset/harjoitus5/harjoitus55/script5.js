// Tehtävä 5
// Vastaus löytyy esim:
// https://www.w3schools.com/jsref/met_table_insertrow.asp
function insert_Row()
{
  var taulu = document.getElementById('sampleTable');
  // lisätään alkuun
  var ekarivi = taulu.insertRow(0);
  // lisätään solut
  var solu1 = ekarivi.insertCell(0);
  var solu2 = ekarivi.insertCell(1);
  // lisätään sisältöä
  solu1.innerHTML = "Sälää tai jotakin";
  solu2.innerHTML = "Jotakin sälää";
  // lisätään loppuun
  var loppurivi = taulu.insertRow(-1);
  // lisätään solut
  var solu3 = loppurivi.insertCell(0);
  var solu4 = loppurivi.insertCell(1);
  // lisätään sisältöä
  solu3.innerHTML = "Olipa kerran Onnimanni";
  solu4.innerHTML = "Onnimannista Matikka";
}
