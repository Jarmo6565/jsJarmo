// JavaScript-funktio, jos haluat saada määritetyn linkin href-, hreflang-, rel-, target- ja type-määritteiden arvon.

function getAttributes()
{
  var u = document.getElementById('w3r').href;
  alert('The value of the href attribute of the link is : '+u);
  var v = document.getElementById('w3r').hreflang;
  alert('The value of the href attribute of the link is : '+v);
  var w = document.getElementById('w3r').rel;
  alert('The value of the href attribute of the link is : '+w);
  var x = document.getElementById('w3r').target;
  alert('The value of the href attribute of the link is : '+x);
  var y = document.getElementById('w3r').type;
  alert('The value of the href attribute of the link is : '+y);
}
