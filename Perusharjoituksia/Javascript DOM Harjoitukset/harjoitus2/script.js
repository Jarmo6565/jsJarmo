// Ohje tähän löytyy esim.
// https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp
// Eli huomaa getElementsByName hakee normaalisti USEITA elementtejä
// joilla on sama nimi, huomaa s-Element sanan lopussa, siksi sekä
// etunimi, että sukunimi ovat taulukoita ja koska niihin tulee vain
// yksi muuttuja, pitää kutsua sitä (0:tta) ja sen arvoa.   -->
function getFormvalue()
{
  var etunimi = document.getElementsByName('fname')[0].value;
  var sukunimi = document.getElementsByName('lname')[0].value;
  document.getElementById('vastaus1').innerHTML = "Etunimi oli " + etunimi + " ja sukunimi oli " + sukunimi;
}
