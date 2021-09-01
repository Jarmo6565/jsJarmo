//Kirjoita ohjelma, joka tarkastaa, onko antamassasi
//sanassa ö-kirjainta ja kirjoittaa vastaukseksi joko: on tai ei ole


//                      Tehtävä 3.
//*****************************************************************************

function tarkistaKirjain()
  {
    var annettuSana = document.getElementById('Onko Ö-kirjainta').value;
    var vastaus = 'ei ole';
      for(var k = 0; k < annettuSana.length; k++)
      {
        if(annettuSana[k] == 'ö' || annettuSana[k] == 'ö-')
        {
          vastaus = 'on';
      }
    }
      document.getElementById('vastaus').innerHTML = vastaus ;
}


//******************************************************************************
