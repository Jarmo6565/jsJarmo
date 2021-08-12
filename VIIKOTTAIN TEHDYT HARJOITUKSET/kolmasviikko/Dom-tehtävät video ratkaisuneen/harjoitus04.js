

//Exercise 04
//-----------
//Count the number of words in the paragraph tag and display the count after heading.
//Yoou can assume that all words are separated by one singular whitespace.

const wordCount = paragraph.innerText.split(' ').length;
const wordCountElem = document.createElement('div');
wordCountElem.innerText = '${wordCount} words';
document.body.insertBefore(wordCountElem, paragraph);
