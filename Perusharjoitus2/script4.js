//    Tehtävä 4.
//    Kirjoita ohjelma, joka kysyy käyttäjän ikää ja tarkistaa,
//    mitä ajoneuvoa saa ajaa: <16v - polkupyörää, <18v - mopoa, muutoin autoa


function ajoneuvo()
{
  var age = parseInt(document.getElementById('ika').value);
  if(age < 16)
  {
   document.write("Voit ajaa polkupyärää");
    //document.getElementById('vastaus').innerHTML = 'Voit' +' ajaa' + ' polkupyärää';

  }
  else if(age < 18)
  {
   document.write("Voit ajaa mopoa");
  //  document.getElementById('vastaus').innerHTML = 'Voit'+ 'ajaa' + 'mopoa';

  }
  else {
  document.write("Voit ajaa autoa");
  //  document.getElementById('vastaus').innerHTML = 'Voit'+ 'ajaa'+ 'autoa';

  }
}
