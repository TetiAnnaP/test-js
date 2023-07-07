// const bookContainerEl = document.querySelector('.book-wrapper');
// bookContainerEl.addEventListener('click', onClick);

// function onClick(e) {
//   if (!e.target.classList.contains('load-more-btn')) {
//     return;
//   } else {
//     const container = e.currentTarget;
// const category = container.children[0].textContent;
// console.log(container);
// fetchBooksByCategory(category.trim()).then(res => {
//   const markup = res.map(book => bookMarkupByCategory(book)).join('');
//   booksEl.innerHTML = markup;

//   const categoryWords = category.trim().split(' ');
//   const lastWord = categoryWords.pop();
//   const categoryTitle = categoryWords.join(' ');

//   heroTitleEl.innerHTML = categoryTitle;
//   heroTitleSpan.innerHTML = lastWord;
// });
//   }
// }
