fetch('books.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('bookList');

    data.series.forEach(series => {
      const wrapper = document.createElement(series.link ? 'a' : 'div');
      if (series.link) wrapper.href = series.link;

      const bookDiv = document.createElement('div');
      bookDiv.className = 'book';

      bookDiv.innerHTML = `
        <div class="title">
          <h2>${series.title}</h2>
          <h2>${series.age}</h2>
        </div>
        ${series.books.map(book =>
          `<img src="${book.image}" alt="${book.alt}">`
        ).join('')}
      `;

      wrapper.appendChild(bookDiv);
      container.appendChild(wrapper);
    });
  });
