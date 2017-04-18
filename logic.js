/**
 * Created by sophia on 4/14/17.
 */
document.addEventListener("DOMContentLoaded", function () {

  const books = ['A Walk to Remember', 'House on Tyneford', 'The Rescue', 'JavaScript Fundamentals', 'The Da Vinci Code'];

  const list = document.querySelector('ul');
  const sortBtnAZ = document.querySelector('.sortAtoZ');
  const sortBtnZA = document.querySelector('.sortZtoA');

  //removes articles from the start of a book title
  function removeArticles(book) {
    const words = book.split(' '); //split each title into an array of words
    if (words.length <= 1) return;
    if (words[0] == 'a' || words[0] == 'an' || words[0] == 'the') {
      return words.splice(1).join(' ');
    }
    return book; //if neither of the above 'if' conditions are true, return entire initial book name
  }

  var compare = function(a, b) {
    let aTitle = removeArticles(a.toLowerCase()),
        bTitle = removeArticles(b.toLowerCase());
    if (aTitle > bTitle) return 1;
    if (aTitle < bTitle) return -1;
    return 0;
  };

  //populates the HTML <ul> with the books array
  function populateList(bookList, displayedList) {
    displayedList.innerHTML = bookList.map(book => {
      return `
        <li>${book}</li>
      `
    }).join('');
  }

  function sortAZ() {
    books.sort(compare);
    populateList(books, list);
  }

  function sortZA() {
    books.sort(compare).reverse();
    populateList(books, list);
  }

  sortBtnAZ.addEventListener('click', sortAZ);
  sortBtnZA.addEventListener('click', sortZA);

  populateList(books, list);

});