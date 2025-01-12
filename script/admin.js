document.addEventListener('DOMContentLoaded', () => { 
    const defaultProducts = [  {
        "title": "Curso de Cocina Italiana",
        "url": "https://example.com/cocina-italiana",
        "description": "Aprende a cocinar auténtica comida italiana con recetas tradicionales y técnicas modernas.",
        "name": "Mary Cadogan",
        "category": "Cocina",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKPGag3bjLH2ShROMqCE3wTsz2TaNtPI5-g&s",
        "idProduct": "001",
        "price": 12000
    },
    {
        "title": "Panadería y Pastelería Avanzada",
        "url": "https://example.com/panaderia-pasteleria",
        "description": "Conviértete en un experto en panadería y pastelería con este curso avanzado.",
        "name": "Max Zapata",
        "category": "Panadería",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLZKyuAoAY5EC0iyQrlUxjbyJrA_zE2fq9qfMlmbgpPNQd_n7GWNQd-7SIVQRibPljRk&usqp=CAU",
        "idProduct": "002",
        "price": 15000
    },
    {
        "title": "Nutrición y Dietética",
        "url": "https://example.com/nutricion-dietetica",
        "description": "Conoce los principios de la nutrición y aprende a planificar dietas equilibradas.",
        "name": "Sara Buenfeld",
        "category": "Salud",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtRUzHl2wlHQ2pRQ1hV-0vSBuaNBN3aUVJA&s",
        "idProduct": "003",
        "price": 40000
    },
    {
        "title": "Repostería Creativa",
        "url": "https://example.com/reposteria-creativa",
        "description": "Descubre técnicas de decoración y elaboración de postres únicos.",
        "name": "Paul Hollywood",
        "category": "Repostería",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGykigzg7ygnMGrR18S96m2LiedeZgrpgXQ&s",
        "idProduct": "004",
        "price": 50000
    },
    {
        "title": "Cocina Saludable",
        "url": "https://example.com/cocina-saludable",
        "description": "Aprende a preparar comidas saludables y deliciosas para toda la familia.",
        "name": "Bonnie Desmazery",
        "category": "Cocina",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxm_rrob3gIV_NIR8RSKc_NGH2dIq2VWrVEA&s",
        "idProduct": "005",
        "price": 45
    },
    {
        "title": "Fotografía ",
        "url": "https://example.com/fotografia-alimentos",
        "description": "Domina el arte de la fotografía de alimentos y crea imágenes irresistibles.",
        "name": "Troy Evans",
        "category": "Fotografía",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5KB-mmG6Ct40jGaRNIoanUm9Z_xxtN3IBA&s",
        "idProduct": "006",
        "price": 75000
    },
    {
        "title": "Cata de Vinos",
        "url": "https://example.com/cata-vinos",
        "description": "Aprende a catar vinos como un profesional y descubre los secretos del vino.",
        "name": "Caroline Hire",
        "category": "Bebidas",
        "imageURL": "https://gastronomicainternacional.com/wp-content/uploads/2020/05/cata-de-vinos-1-1024x576.jpg",
        "idProduct": "007",
        "price": 65000
    },
    {
        "title": "Cocina Vegana",
        "url": "https://example.com/cocina-vegana",
        "description": "Descubre deliciosas recetas veganas que te sorprenderán.",
        "name": "Miriam Nice",
        "category": "Cocina",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHTV7ZDs2ZAYZF7GVLjrupYwqhnAvazCHiw&s",
        "idProduct": "008",
        "price": 50000
    },
    {
        "title": "Fotografía de Naturaleza",
        "url": "https://example.com/fotografia-naturaleza",
        "description": "Aprende a capturar la belleza de la naturaleza con tu cámara.",
        "name": "Ramirez Camilla ",
        "category": "Fotografía",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpXzZBZFtLRb1_yH4abkQffSFjJW-qlSjeQ&s",
        "idProduct": "009",
        "price": 75000
    },
    {
        "title": "Arte y Diseño Digital",
        "url": "https://example.com/arte-diseno-digital",
        "description": "Conviértete en un maestro del diseño digital con este completo curso.",
        "name": "Katy Greenwood",
        "category": "Arte y Diseño",
        "imageURL": "https://universidades.app/assets/img/blog/la-importancia-del-diseno-multimedia-en-la-era-digital_1.jpg",
        "idProduct": "010",
        "price": 80000
    }  ];

    // Recuperar productos guardados en localStorage
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Combinar productos predeterminados con los guardados
    const products = [...defaultProducts, ...savedProducts];

    const sectionToRender = document.getElementById("main_people");
    const cart = document.getElementById("cart");
    const totalPriceElement = document.getElementById("total-price");
    let cartItems = [];

    const createPersonCard = (person) => {
        const { title, url, description, name, imageURL, category, price, idProduct } = person;
    
        const card = document.createElement("div");
        card.classList.add("card", "m-3");
        card.style.width = "18rem";
    
        const image = document.createElement("img");
        image.src = imageURL;
        image.classList.add("card-img-top");
        image.alt = title;
    
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
    
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = title;
    
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = description;
    
        const cardAuthor = document.createElement("p");
        cardAuthor.classList.add("card-text");
        cardAuthor.textContent = `Autor: ${name}`;
    
        const cardCategory = document.createElement("p");
        cardCategory.classList.add("card-text");
        cardCategory.textContent = `Categoría: ${category}`;
    
        const cardPrice = document.createElement("p");
        cardPrice.classList.add("card-text");
        cardPrice.textContent = `Precio: $${price}`;
    
        const cartButton = document.createElement("button");
        cartButton.textContent = "Agregar al carrito";
        cartButton.classList.add("btn", "btn-primary"); 
        cartButton.onclick = () => addToCart(person);
    
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("btn", "btn-danger"); 
        deleteButton.onclick = () => {
            // Eliminar del DOM
            sectionToRender.removeChild(card);
    
            // Eliminar del localStorage
            removeFromLocalStorage(idProduct);
        };
    
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardAuthor);
        cardBody.appendChild(cardCategory);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(cartButton);
        cardBody.appendChild(deleteButton);
    
        card.appendChild(image);
        card.appendChild(cardBody);
    
        return card;
    };

    const removeFromLocalStorage = (productId) => {
        let savedProducts = JSON.parse(localStorage.getItem('products')) || [];
        savedProducts = savedProducts.filter(product => product.idProduct !== productId);
        localStorage.setItem('products', JSON.stringify(savedProducts));
    };

    const addToCart = (product) => {
        const cartItem = document.getElementById(`cart-item-${product.idProduct}`);
        if (cartItem) {
            const quantityElement = cartItem.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = ++quantity;
        } else {
            const newCartItem = document.createElement("li");
            newCartItem.classList.add("list-group-item", "cart-item");
            newCartItem.id = `cart-item-${product.idProduct}`;
            newCartItem.innerHTML = `
                ${product.title} - Cantidad: <span class="quantity">1</span>
                <span class="remove-btn" onclick="removeFromCart('${product.idProduct}', ${product.price})">x</span>
            `;
            cart.appendChild(newCartItem);
        }
        updateTotalPrice(product.price);
        cartItems.push(product);
        updateCartInLocalStorage();
    };

    window.removeFromCart = (productId, productPrice) => {
        const cartItem = document.getElementById(`cart-item-${productId}`);
        const quantityElement = cartItem.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantityElement.textContent = --quantity;
        } else {
            cart.removeChild(cartItem);
        }

        // Actualiza la lista cartItems
        cartItems = cartItems.filter(item => item.idProduct !== productId);

        updateTotalPrice(-productPrice);
        updateCartInLocalStorage();
    };

    const updateTotalPrice = (amount) => {
        const currentTotal = parseFloat(totalPriceElement.textContent);
        totalPriceElement.textContent = (currentTotal + amount).toFixed(2);
    };

    const updateCartInLocalStorage = () => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    const renderProducts = () => {
        sectionToRender.innerHTML = ''; // Limpiar la sección antes de renderizar nuevamente.
        products.forEach((product) => {
            const productCard = createPersonCard(product);
            sectionToRender.appendChild(productCard);
        });
    };
    
    renderProducts();

    document.getElementById("product-form").addEventListener("submit", (e) => {
        e.preventDefault();
        addNewProduct();
    });

    const addNewProduct = () => {
        const title = document.getElementById("product-title").value.trim();
        const url = document.getElementById("product-url").value.trim();
        const description = document.getElementById("product-description").value.trim();
        const name = document.getElementById("product-name").value.trim();
        const category = document.getElementById("product-category").value.trim();
        const imageURL = document.getElementById("product-imageURL").value.trim();
        const price = parseFloat(document.getElementById("product-price").value.trim());
    
        if (title === '' || isNaN(price)) return;
    
        const newProduct = {
            title,
            url,
            description,
            name,
            category,
            imageURL,
            idProduct: Date.now().toString(),
            price
        };
    
        // Guardar en localStorage
        const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
        savedProducts.push(newProduct);
        localStorage.setItem('products', JSON.stringify(savedProducts));
    
        const newProductCard = createPersonCard(newProduct);
        sectionToRender.appendChild(newProductCard);
    
        document.getElementById("product-form").reset();
    };
});

/////////////////////////////////////////////////////
const mainSection = document.getElementById("main-list-recipes");
const colorChangeButton = document.getElementById("colorChangeButton");

const colors = ["white", "black", "lightgray"];
let currentColorIndex = 0;

colorChangeButton.addEventListener("click", () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    mainSection.style.backgroundColor = colors[currentColorIndex];
    console.log(`Changed to ${colors[currentColorIndex]}`);
});