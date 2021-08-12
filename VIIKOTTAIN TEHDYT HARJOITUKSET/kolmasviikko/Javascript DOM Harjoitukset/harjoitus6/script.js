//Kirjoita JavaScript-funktio, joka luo taulukon, hyväksyy rivin, käyttäjän sarakenumerot ja syöttää rivisarakkeen numeron solun
//sisällöksi (esim. rivi 0 Sarake-0).


function changeContent()
{
rn = window.prompt("Input the Row number(0,1,2)", "0");
cn = window.prompt("input the Column number(0,1)","0");
content = window.prompt("Input the Cell content, write something");
var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;
}
