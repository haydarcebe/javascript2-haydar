// Fout gevonden: _______________
// Oplossing: _______________

fetch('./news.json')
  .then(response => response.json())
  .then(messages => {
    const list = document.querySelector('#results');
    messages.forEach(message => {
      const li = document.createElement('li');
      li.textContent = message.title;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
