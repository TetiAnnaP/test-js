const booksEl = document.querySelector('.books-container');
const allCategoriesBtn = document.querySelector('.categories-btn');
allCategoriesBtn.addEventListener('click', onAllCategoriesBtnClick);

function fetchPopularBooks() {
  return fetch('https://books-backend.p.goit.global/books/top-books')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => data.map(arr => arr.books[0]));
}

function bookMarkup(book) {
  const markup = `
      <div class='book-wrapper'>
        <h2 class="books-category">${book.list_name}</h2>
        <img class="books-img" src="${book.book_image}" alt="" />
        <h3 class='books-name'>${book.title}</h3>
        <p class='books-author'>${book.author}</p>
        <button class='load-more-btn' type="submit">see more</button>
      </div>`;

  return markup;
}
function loadPopularBooks() {
  fetchPopularBooks().then(res => {
    const markup = res.map(book => bookMarkup(book)).join('');
    booksEl.innerHTML = markup;
  });
}

loadPopularBooks();

function onAllCategoriesBtnClick() {
  loadPopularBooks();
}
