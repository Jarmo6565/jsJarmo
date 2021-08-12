// Tehtävä 3
// Ohje tähän löytyy esim:
// https://www.w3schools.com/jsref/dom_obj_style.asp
function taustat()
{
  vari = variArvonta();
  // Ja siis helpoimmalla pääsette, jos vain teette yhden rivin
  // joka on alla, mutta vari-muuttujan tilalle kirjoitatte vaikka "red"
  document.getElementById('yksi').style.backgroundColor = vari;
  vari = variArvonta();
  document.getElementById('kaksi').style.backgroundColor = vari;
  vari = variArvonta();
  document.getElementById('kolme').style.backgroundColor = vari;
  vari = variArvonta();
  document.getElementById('nelja').style.backgroundColor = vari;
  vari = variArvonta();
  document.getElementById('viisi').style.backgroundColor = vari;

}
// Tehtävä 3:n apufunktio
function variArvonta()
{
  var varitaulu = [];
  var variarvo;
  for(x = 0; x < 6; x++)
  {
    variarvo = Math.floor(Math.random()*16);
    switch(variarvo)
    {
      case 10:
        variarvo = 'A';
        break;
      case 11:
        variarvo = 'B';
        break;
      case 12:
        variarvo = 'C';
        break;
      case 13:
        variarvo = 'D';
        break;
      case 14:
        variarvo = 'E';
        break;
      case 15:
        variarvo = 'F';
        break;
    }
    varitaulu[x] = variarvo;
    temp = "#" + varitaulu.join("").toString();
  }
  return temp;
}
