const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];

let filter = 'all';

const usersEl = document.querySelector('#users');
const form = document.querySelector('#user-form');

const showUsers = (users) => {
  usersEl.innerHTML = users
    .map((user) => {
      const { name, email, role, active } = user;
      return `
        <article>
          <h3>${name}</h3>
          <p>${email}</p>
          <p>Rol: ${role}</p>
          <p>${active ? 'Actief' : 'Inactief'}</p>
        </article>
      `;
    })
    .join('');
};

const filterUsers = () => {
  const gefilterd =
    filter === 'admin' ? users.filter((user) => user.role === 'admin') : users;
  showUsers(gefilterd);
};

document.querySelector('#filter-admin').addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});

document.querySelector('#filter-all').addEventListener('click', () => {
  filter = 'all';
  filterUsers();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const role = document.querySelector('#role').value;

  const defaultUser = { name: '', email: '', role: 'user', active: true };
  const newUser = { ...defaultUser, name, email, role };

  users.push(newUser);
  filterUsers();
  form.reset();
});

filterUsers();