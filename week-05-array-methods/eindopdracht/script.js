const products = [
  { name: 'Laptop Pro', category: 'Electronics', price: 1299, stock: true },
  { name: 'Draadloze muis', category: 'Electronics', price: 29, stock: true },
  { name: 'USB-C hub', category: 'Electronics', price: 49, stock: false },
  { name: 'Bureaulamp', category: 'Kantoor', price: 35, stock: true },
  { name: 'Notitieboek', category: 'Kantoor', price: 8, stock: true },
  { name: 'Pennenset', category: 'Kantoor', price: 12, stock: false },
  { name: 'Koptelefoon', category: 'Audio', price: 89, stock: true },
  { name: 'Bluetooth speaker', category: 'Audio', price: 59, stock: true },
  { name: 'Webcam HD', category: 'Electronics', price: 79, stock: false },
  { name: 'Muismat XL', category: 'Kantoor', price: 19, stock: true },
  { name: 'Monitor 27"', category: 'Electronics', price: 349, stock: true },
  { name: 'Desk organizer', category: 'Kantoor', price: 24, stock: true },
];

const producten = document.querySelector('#products');
const counting = document.querySelector('#counter');
const searchbar = document.querySelector('#search-bar');
const sortlow = document.querySelector('#sort-low');
const sorthigh = document.querySelector('#sort-high');

let searchTerm = '';
let sorting = '';

const showProducts = (products) => {
  // Lege staat
  if (products.length === 0) {
    producten.innerHTML = '<p>Geen resultaten gevonden.</p>';
    counting.textContent = '0 producten';
    return;
  }

  // Toon elk product als een <article> in #products
  producten.innerHTML = products.map(product =>
    `<article>
      <h3>${product.name}</h3>
      <p>${product.category}</p>
      <p>€${product.price}</p>
      <p>${product.stock ? 'Op voorraad' : 'Niet op voorraad'}</p>
    </article>`
  ).join('');

  // Laat in #counter de hoeveelheid producten zien
  counting.textContent = `${products.length} producten`;
};

const filterProducts = () => {
  // Filteren op searchTerm
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorteren op prijs
  if (sorting === 'low') {
    filtered.sort((a, b) => a.price - b.price);   // laag naar hoog
  } else if (sorting === 'high') {
    filtered.sort((a, b) => b.price - a.price);   // hoog naar laag
  }

  showProducts(filtered);
};

// Zoekbalk
searchbar.addEventListener('input', () => {
  searchTerm = searchbar.value;
  filterProducts();
});

// Knop: laag naar hoog
sortlow.addEventListener('click', () => {
  sorting = 'low';
  filterProducts();
});

// Knop: hoog naar laag
sorthigh.addEventListener('click', () => {
  sorting = 'high';
  filterProducts();
});

// Eerste keer tonen
filterProducts();