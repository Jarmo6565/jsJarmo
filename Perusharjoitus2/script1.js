
//Viikon 2 perustehtävä ensimmäiset harjoitukset
//Tee ohjelma, joka pyytää käyttäjältä kolmea numeroa ja laittaa ne järjestykseen
//Tehtävä 1.

function jarjesta()
{
  var luku1, luku2, luku3;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  luku3 = parseInt(document.getElementById('kolmas').value);
  document.write("Annoit luvut: " + luku1 + ' ' + luku2 + ' ' + luku3 + "<br>");

  if(luku1 < luku2 && luku1 < luku3)
  {
    if(luku2 < luku3)
    {
      document.write("Lukujen järjestys: " + luku1 + ' ' + luku2 + ' ' + luku3);
        //document.getElementById("vastaus").innerHTML = " + luku1 + ' ' + luku2 + ' ' + luku3) ;
    }
    else {
    document.write("Lukujen järjestys: " + luku1 + ' ' + luku3 + ' ' + luku2);

       //document.getElementById("vastaus").innerHTML = " + luku1 + ' ' + luku3 + ' ' + luku2) ;
return;
    }
  }
  else if(luku2 < luku1 && luku2 < luku3)
  {
    if(luku1<luku3)
    {
      document.write("Lukujen järjestys: " + luku2 + ' ' + luku1 + ' ' + luku3);

        //document.getElementById("vastaus").innerHTML = " + luku2 + ' ' + luku1 + ' ' + luku3) ;
        return;
    }
    else {
      document.write("Lukujen järjestys: " + luku2 + ' ' + luku3 + ' ' + luku1);

        //document.getElementById("vastaus").innerHTML = " + luku2 + ' ' + luku3 + ' ' + luku1) ;
return;

    }
  }
  else if(luku3 < luku1 && luku3 < luku2)
    {
      if(luku1 < luku2)
      {
       document.write("Lukujen järjestys: " + luku3 + ' ' + luku1 + ' ' + luku2);

        //document.getElementById("vastaus").innerHTML = " + luku3 + ' ' + luku1 + ' ' + luku2);
return;
      }
      else {
       document.write("Lukujen järjestys: " + luku3 + ' ' + luku2 + ' ' + luku1);

       //document.getElementById("vastaus").innerHTML = " + luku3 + ' ' + luku2 + ' ' + luku1) ;

       return;
     }
   }
  }
