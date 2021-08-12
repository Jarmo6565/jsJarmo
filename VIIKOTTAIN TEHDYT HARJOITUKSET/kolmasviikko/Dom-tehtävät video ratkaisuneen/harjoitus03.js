
//Exercise 03
//-----------
//Split each new sentence on to a separate line in the paragraph text.
//A sentence can be assumed to be a string of text terminated with a period (.)

paragraph.innerHTML = paragraph.innerHTML
  .split(/\.[^\.|<]/)
  .join('.</p><p>') + '</p>';
