const library = [{
  title: 'Bill Gates',
  author: 'The Road Ahead',
  libraryID: 1254
},
{
  title: 'Steve Jobs',
  author: 'Walter Isaacson',
  libraryID: 4264
},
{
  title: 'Mockingjay: The Final Book of The Hunger Games',
  author: 'Suzanne Collins',
  libraryID: 3245
}];

function _sort(a, b) {
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}

console.log(library.sort(_sort));
