
// Muokataan salasana tehtävää siten, että se arpoo kirjaimen Ö:n sijasta
// Anna muokattava salasana

//          Tehtävä 10.



//******************************************************************
      function muokkaaSalasana()
      {
        var pw = '';
        var eka, toka;
        pw = document.getElementById('teesalasana').value;
        alert(pw);
        var taulu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'Ã¥', 'Ã¤', 'Ã¶', 'w'];
        var temp = [];
        var lop='';
        for(var s = 0; s < pw.length; s++)
        {
          eka = pw[s];
          //alert[pw];
          //alert[eka];
          temp.push(eka);
          //alert(eka);
          var lisa = Math.floor(Math.random()*taulu.length);
          toka = taulu[lisa];
          temp.push(toka);
          //alert(toka);
        }
        lop = temp.join('');
        document.getElementById('sananTulostus').innerHTML = lop;
      }
