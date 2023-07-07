import { fetchBooksByCategory } from './categoriesbooks';
import { bookMarkupByCategory } from './categoriesbooks';

const heroTitleEl = document.querySelector('.hero-title-span-main');
const heroTitleSpan = document.querySelector('.hero-title-span');
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
async function loadPopularBooks() {
  await fetchPopularBooks().then(res => {
    const markup = res.map(book => bookMarkup(book)).join('');
    booksEl.innerHTML = markup;
  });

  const bookContainersEl = document.querySelectorAll('.book-wrapper');
  bookContainersEl.forEach(bookContainerEl => {
    bookContainerEl.addEventListener('click', onClickSeeMore);
  });
}

loadPopularBooks();

function onAllCategoriesBtnClick() {
  loadPopularBooks();
  heroTitleEl.textContent = 'Best Sellers';
  heroTitleSpan.textContent = 'Books';
}

function onClickSeeMore(e) {
  if (!e.target.classList.contains('load-more-btn')) {
    return;
  } else {
    const category = e.currentTarget.children[0].textContent;
    fetchBooksByCategory(category).then(res => {
      const markup = res.map(book => bookMarkupByCategory(book)).join('');
      booksEl.innerHTML = markup;

      const categoryWords = category.trim().split(' ');
      const lastWord = categoryWords.pop();
      const categoryTitle = categoryWords.join(' ');

      heroTitleEl.textContent = categoryTitle;
      heroTitleSpan.textContent = lastWord;
    });
  }
}
