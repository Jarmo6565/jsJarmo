
// Kirjoita ohjelma, joka laskee annetun luvun kertoman
//(esim: 4 -> 4*3*2*1 = 24)
// Anna luku josta lasketaan kertoma:


//                  Tehtävä 4.
//******************************************************************************


function laskeKertoma()
  {
    var kerLuku = document.getElementById('kertoma').value;
    var laskettu = 1;
    for(var z = 1; z <= kerLuku; z++)
    {
      laskettu*= z;
    }
    document.getElementById('tulos').innerHTML = '<p>Luvun ' + kerLuku + ' kertoma on '+laskettu + '</p>'
  }


  //****************************************************************************
