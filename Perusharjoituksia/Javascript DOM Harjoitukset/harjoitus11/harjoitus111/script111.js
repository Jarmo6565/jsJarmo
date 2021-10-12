// Tehtävä 11
// Esimerkki löytyy esim.
// https://learncodeweb.com/javascript/how-to-get-and-set-attributes-in-javascript/#:~:text=In%20JavaScript%2C%20you%20can%20use%20special%20or%20unique,behavior%20or%20provides%20additional%20information%20about%20the%20tag.
function vaihdaKuva()
{
  var src="";
  var width = 0; height = 0;
  var x = document.getElementById('kuva');
  var sat = Math.ceil(Math.random()*3);
  switch(sat)
  {
    case 1:
      src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg";
      width = "240";
      height = "160";
      break;
    case 2:
      src="http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg";
      width = "320";
      height = "195";
      break;
    case 3:
      src = "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg";
      width = "500";
      height = "343";
      break;
    default:
      src = "";
      width = "";
      height = "";
      break;
  }
  x.setAttribute("src",src)
  x.setAttribute("width",width);
  x.setAttribute("height",height);
}
