
//Exercise 02
//-----------
//Add a ink back to the source of the text after the paragraph tag.
//(https://forcemipsum.com/)

const link = document.create Element('a');
link.href = 'https://forcemipsum.com/';
link.innerText = 'Text generated from Forcem Ipsum';
document.body.appendChild(link);
