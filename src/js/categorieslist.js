const categoriesListEl = document.querySelector('.categories-list');

function allCategories() {
  return fetch('https://books-backend.p.goit.global/books/category-list')
    .then(res => res.json())
    .then(data => {
      const sortedData = data.sort((a, b) =>
        a.list_name.localeCompare(b.list_name)
      );

      const categoriesHtml = sortedData.map(elem => {
        return `  
          <li class="categories-item">
            <button class="category-btn" type="submit">
              ${elem.list_name}
            </button>
          </li>
        `;
      });

      return categoriesHtml.join('');
    });
}

allCategories().then(html => {
  categoriesListEl.insertAdjacentHTML('beforeend', html);
});

const seeMoreBtn = document.querySelector('.load-more-btn');
console.log(seeMoreBtn);
