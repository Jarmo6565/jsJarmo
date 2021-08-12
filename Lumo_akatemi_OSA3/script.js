function lahetaVastaukset()
{

var yhteensä = 5;
var pisteet = 0;
var huom = 0;
}
//Hae käyttäjän syötteet
var k1 = document.forms["kyselylomake"]["k1"].value;
var k2 = document.forms["kyselylomake"]["k2"].value;
var k3 = document.forms["kyselylomake"]["k3"].value;
var k4 = document.forms["kyselylomake"]["k4"].value;
var k5 = document.forms["kyselylomake"]["k5"].value;

//Tarkastus
for(i = 1; i <= yhteensä; i++)
{
  if(eval('k'+i) == null || eval('k'+i) == '')
  {
    alert('Et vastannut kysymykseen numero: ' + i);
    huom = 1;
  }
  if(huom == 1) return false;
}

//Aseta oikeat vastaukset
var vastaukset = ["b", "a", "d", "b", "d"];

//Tarkasta oikeat vastaukset
for(i = 1; i <= yhteensä; i++)
{
  if(eval('k'+i) == vastaukset[i-1])
  {
  pisteet++;
  }
}
  //Näytä vastaukset
var tulokset = document.getElementById('tulokset');
alert('Sait ' + pisteet + ' pistettä, kun maksimi pistemäärä oli ' + yhteensä);
tulokset.innerHTML = '<h3>Sait </span>'  + pisteet + '</span> pistettä, kun maksimi pistemäärä oli <span>' +yhteensä + '<span></h3>';
return false
