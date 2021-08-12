
//Kirjoita ohjelma, joka kysyy käyttäjältä kahta lukua ja laskee ensimmäisen
//potenssiin toinen esim. 5 ja 2 = 5^2 = 25

//  Anna korotettava luku:

// Anna potenssi:

//                          Tehtävä 8.
//*****************************************************************************

function potenssi()
{
var koro = document.getElementById("kor").value
var pote = document.getElementById("pot").value
yht = koro;
 for(var p = 1; p < pote; p++)
 {
   yht *= koro;
}
document.getElementById('lukujenTulostusP').innerHTML ='<p>' + yht + '</p>';
}
