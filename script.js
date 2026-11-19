const cards_items = document.querySelector(".cards-items");
const cards_info = [];
async function loadProducts() {
  try {
    const response = await fetch("produse.json");
    if (!response.ok) {
      throw new Error("Eroare la încărcarea produselor");
    }
    const products = await response.json();
    productCreate(products);
  } catch (error) {
    console.error(error);
  }
}
function productCreate(products) {
  products.forEach((product) => {
    cards_info.push(product);
    const card = document.createElement("article");
    card.classList.add("card-item");
    card.innerHTML = `   
      <img src="${product.image}" alt="${product.description}" />
    <div class="text-items">
      <p class="product-category">${product.category}</p>
      <h2 class="product-title">${product.name}</h2>
      <p class="product-price">${product.price} lei</p>
      </div>`;

    const additem = document.createElement("button");
    additem.classList.add("product-add");
    additem.innerHTML = `
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 8h14l1 13H4L5 8Z"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linejoin="round"
          />
          <path
            d="M9 8V6a3 3 0 0 1 6 0v2M12 12v5m-2.5-2.5h5"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Adaugă în coș
      </button>
      
  
   `;
    const textItems = card.querySelector(".text-items");
    additem.addEventListener("click", addProduct);
    textItems.appendChild(additem);
    cards_items.appendChild(card);
  });
}
function addProduct(product) {}
loadProducts();
