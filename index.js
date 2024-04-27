const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed? Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
  {
    id: 10,
    title: 'bison steak',
    category: 'dinner',
    price: 22.99,
    img: './images/item-10.jpeg',
    desc: `Maxime fugit quos obcaecati dolore numquam atque sed Modi quas, quidem facere inventore voluptatibus earum magni corporis dicta laudantium optio, unde beatae `,
  },
];

const sectionCenter = document.querySelector('.section-center');
const filterBtn = document.querySelectorAll('.filter-btn');

//affichage lors du chargement de la page
window.addEventListener('DOMContentLoaded', () => {
  // argument de ma variable contenant mes éléments
  displayMenuItems(menu);
});

// filtrer selon le repas souhaité
filterBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter((menuItem) => {
      // console.log(menuItem);
      if (menuItem.category === category) return menuItem;
    });
    // console.log(menuCategory);
    if (category === 'all') {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    // itérate chaque element de memu
    // console.log(item);
    return `<article class="menu-item">
          <img src="${item.img}" alt="${item.title}" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}€</h4>
            </header>
            <p class="item-text">
             ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join(' ');
  // console.log(displayMenu);
  // injecter le retour dans la section centrale de la page
  sectionCenter.innerHTML = displayMenu;
}
