const booklijsts = document.querySelector('#books-list')
    


fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    for(let book of books )
    booklijsts.innerHTML += `<li>${book.author}</li>`
  })
  .catch(error => console.error('Fout:', error));
