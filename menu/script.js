fetch("menu.xml")
  .then((response) => response.text())
  .then((data) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "application/xml");

    const items = xml.querySelectorAll("item");
    const menuGrid = document.getElementById("menu-grid");

    items.forEach((item) => {
      const name = item.querySelector("name")?.textContent || "Coffee Drink";
      const price = item.querySelector("price")?.textContent || "N/A";
      const description =
        item.querySelector("description")?.textContent ||
        "No description available.";
      const image =
        item.querySelector("image")?.textContent || "placeholder.png";

      const card = document.createElement("div");
      card.className = "menu-card";

      card.innerHTML = `
      <div class="menu-product">
      <div class="menu-container">
        <img class="Sirv image-main" src="${image}" alt="${name}">
        <div class="middle text-center">
        <a class="btn-b btn-b--full heading-tertiary" href="#">+</a>
        </div>
      </div>
        <div class="menu-description pad--right-sm">
        
        <div class="product-title">
        <h3 class="title heading-tertiary">${name}</h3>
        <p class="description">${description}</p>
        </div>

        <a class="price">${price}</a>
        </div>
        </div>
      `;

      menuGrid.appendChild(card);
    });
  })
  .catch((error) => console.error("Error loading XML:", error));
