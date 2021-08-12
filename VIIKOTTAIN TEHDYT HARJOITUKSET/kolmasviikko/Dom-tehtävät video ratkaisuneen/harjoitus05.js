

//Exercise 05
//------------
//Replace all question marks (?) with thinking faces () and exclamation marks (!) with astonished faces ()

Array.from(document.querySelectorAll('p'))
  .forEach(p => {
    p.innerHTML = p.innerHTML
      .replace(/\?/g, ',, ')
      .replace(/\?/g, ' ,,');
  })
