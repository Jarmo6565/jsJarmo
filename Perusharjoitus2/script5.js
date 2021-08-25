function kaanna()
{
  var lang = document.getElementById('kieli').value;
  if(lang == 'eng')
  {
    document.write("Hello world!");
  }
  else if(lang == 'swe')
  {
    document.write("Hej världen!");
  }
  else {
    document.write("Hola Mundo!");
  }
}
