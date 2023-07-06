const categoryContainer = document.querySelector('.categories-container');
const heroTitleEl = document.querySelector('.hero-title-span-main');
const heroTitleSpan = document.querySelector('.hero-title-span');
const booksEl = document.querySelector('.books-container');

categoryContainer.addEventListener('click', oncategoriesBtnClick);

function oncategoriesBtnClick(e) {
  if (!e.target.classList.contains('category-btn')) {
    return;
  } else {
    const category = e.target.textContent;

    fetchBooksByCategory(category.trim()).then(res => {
      const markup = res.map(book => bookMarkupByCategory(book)).join('');
      booksEl.innerHTML = markup;

      const categoryWords = e.target.textContent.trim().split(' ');
      const lastWord = categoryWords.pop();
      const categoryTitle = categoryWords.join(' ');

      heroTitleEl.innerHTML = categoryTitle;
      heroTitleSpan.innerHTML = lastWord;
    });
  }
}

function fetchBooksByCategory(name) {
  return fetch(
    `https://books-backend.p.goit.global/books/category?category=${name}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => data);
}

function bookMarkupByCategory(book) {
  const markup = `
      <div class='book-wrapper'>
        
        <img class="books-img" src="${book.book_image}" alt="" />
        <h3 class='books-name'>${book.title}</h3>
        <p class='books-author'>${book.author}</p></div>`;

  return markup;
}
