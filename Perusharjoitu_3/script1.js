
//  Silmukka -harjoitus tehtäviä (Perusharjoitus 3)
//Tee ohjelma, joka pyytää käyttäjältä parillista lukua ja
//tulostaa tämän jälkeen kaikki parilliset luvut siihen asti
//poislukien 0:n


//            TEHTÄVÄ 1.
// *********************************************************************

function tulostaParilliset()
{
  var myFun = parseInt(document.getElementById("pulupulu").value);
  var jono = "<p>";
  for(var i = 2; i <= myFun; i= i+2)
  {
  jono+= i;
  jono+= " ";
}
  jono+= "</p>";
  //console.log(tulostaParilliset);
  document.getElementById("parilliset").innerHTML = jono;
}
//  *********************************************************************

/*
<!--   function parillinenPariton(luku)
{
  if(luku%2==0)
{
  console.log("luku on parillinen");
  }
  else{
    console.log("luku on pariton");
  }
}
parillinenPariton(15);
-->

*/
