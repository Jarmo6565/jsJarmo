

//Exercise 01
//-----------
//Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)


const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerText
  .split(' ')
  .map(word => word.length > 8 ? '<span style="background-color: yellow>${word}</span>" ' : word)
  .join(' ');
