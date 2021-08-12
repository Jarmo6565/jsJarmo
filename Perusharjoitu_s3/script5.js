//Kirjoita ohjelma, joka tulostaa näytölle luvut 1-100
//kuitenkin siten, että jos luku on 3:lla jaollinen, tulostetaan hip
//ja viidellä jaollinen tulostetaan heijaa ja jos sekä viidellä että
// kolmella jaollinen, tulostetaan hipheijaa

//                    Tehtävä 5.

//  ****************************************************************************

function hipHeijaa()
  {
    var tuloste = '';
     for( var i = 0; i <= 100; i++)
     {
     if(i%3==0 && i%5==0)
    {
      tuloste+='Hipheijaa, ';
    }
    else if(i%5==0)
    {
      tuloste+='heijaa, ';
    }
    else if(i%3==0)
    {
      tuloste+='Hip, ';
    }
      else{
        tuloste+= i+' ';
      }
      document.getElementById("lukujenTulostus").innerHTML = tuloste;
    }
  }

//******************************************************************************
