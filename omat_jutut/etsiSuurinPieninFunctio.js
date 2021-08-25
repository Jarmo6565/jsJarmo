
// Hahaa! Tälle ei tarvinnut taulua!!


function etsiSuurinPienin()
{
var taulu = [], temp;
for(var x = 0; x < 3; x++)
{
temp = document.getElementById('puu['+x+']').value;
temp = parseInt(temp);
taulu.push(temp);
alert(taulu);
}
taulu = taulu.sort((a,b) => a-b);
document.getElementById('lukujenTulostusT').innerHTML = '<p>Luvut järjestyksessään pienimmäisestä ' + taulu[0]  + ' ja suurin luku on '+ taulu[taulu.length-1];
}



function parillinenPariton(luku)
{
  if(luku%2==0)
{
  console.log("luku on parillinen");
  }

}
parillinenPariton(14);
