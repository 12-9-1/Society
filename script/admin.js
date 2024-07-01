document.addEventListener('DOMContentLoaded', (event) => {
    const people = [

                    {
                        "title": "Curso de Cocina Italiana",
                        "url": "https://example.com/cocina-italiana",
                        "description": "Aprende a cocinar auténtica comida italiana con recetas tradicionales y técnicas modernas.",
                        "name": "Mary Cadogan",
                        "category": "Cocina",
                        "imageURL": "https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp",
                        "idProduct": "001",
                        "price": 50,
                        "days": "Lunes y Miércoles",
                        "schedule": "10:00 AM - 12:00 PM"
                    },
                    {
                        "title": "Panadería y Pastelería Avanzada",
                        "url": "https://example.com/panaderia-pasteleria",
                        "description": "Conviértete en un experto en panadería y pastelería con este curso avanzado.",
                        "name": "Max Zapata",
                        "category": "Panadería",
                        "imageURL": "https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg",
                        "idProduct": "002",
                        "price": 60
                    },
                    {
                        "title": "Nutrición y Dietética",
                        "url": "https://example.com/nutricion-dietetica",
                        "description": "Conoce los principios de la nutrición y aprende a planificar dietas equilibradas.",
                        "name": "Sara Buenfeld",
                        "category": "Salud",
                        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OCKpuik-hWtBDBUw_BDka_y3mpz5gKUOpQ&s",
                        "idProduct": "003",
                        "price": 40
                    },
                    {
                        "title": "Repostería Creativa",
                        "url": "https://example.com/reposteria-creativa",
                        "description": "Descubre técnicas de decoración y elaboración de postres únicos.",
                        "name": "Paul Hollywood",
                        "category": "Repostería",
                        "imageURL": "https://img.freepik.com/fotos-premium/sentirse-feliz-satisfecho-poderoso-ajuste-flexion-biceps-musculosos-luciendo-fuerte-despues-gimnasio_1194-429528.jpg?w=360",
                        "idProduct": "004",
                        "price": 55
                    },
                    {
                        "title": "Cocina Saludable",
                        "url": "https://example.com/cocina-saludable",
                        "description": "Aprende a preparar comidas saludables y deliciosas para toda la familia.",
                        "name": "Bonnie Desmazery",
                        "category": "Cocina",
                        "imageURL": "https://qph.cf2.quoracdn.net/main-qimg-d57295d91aeb7bbded4184e258709543-pjlq",
                        "idProduct": "005",
                        "price": 45
                    },
                    {
                        "title": "Fotografía de Alimentos",
                        "url": "https://example.com/fotografia-alimentos",
                        "description": "Domina el arte de la fotografía de alimentos y crea imágenes irresistibles.",
                        "name": "Troy Evans",
                        "category": "Fotografía",
                        "imageURL": "https://st4.depositphotos.com/4678277/31218/i/450/depositphotos_312181688-stock-photo-close-up-portrait-of-his.jpg",
                        "idProduct": "006",
                        "price": 70
                    },
                    {
                        "title": "Cata de Vinos",
                        "url": "https://example.com/cata-vinos",
                        "description": "Aprende a catar vinos como un profesional y descubre los secretos del vino.",
                        "name": "Caroline Hire",
                        "category": "Bebidas",
                        "imageURL": "https://images.losandes.com.ar/resizer/0sD9wGWcg1BuNLsYYqFVb7nmLPI=/0x0:0x0/980x640/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/23WSOVW565FOTHPBKO4YNW6SZE.jpeg",
                        "idProduct": "007",
                        "price": 65
                    },
                    {
                        "title": "Cocina Vegana",
                        "url": "https://example.com/cocina-vegana",
                        "description": "Descubre deliciosas recetas veganas que te sorprenderán.",
                        "name": "Miriam Nice",
                        "category": "Cocina",
                        "imageURL": "https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1719446400&semt=sph",
                        "idProduct": "008",
                        "price": 50
                    },
                    {
                        "title": "Fotografía de Naturaleza",
                        "url": "https://example.com/fotografia-naturaleza",
                        "description": "Aprende a capturar la belleza de la naturaleza con tu cámara.",
                        "name": "Ramirez Camilla ",
                        "category": "Fotografía",
                        "imageURL": "https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?ga=GA1.1.240933676.1719523105&semt=sph",
                        "idProduct": "009",
                        "price": 75
                    },
                    {
                        "title": "Arte y Diseño Digital",
                        "url": "https://example.com/arte-diseno-digital",
                        "description": "Conviértete en un maestro del diseño digital con este completo curso.",
                        "name": "Katy Greenwood",
                        "category": "Arte y Diseño",
                        "imageURL": "https://img.freepik.com/foto-gratis/alegre-mujer-mediana-edad-cabello-rizado_1262-20859.jpg?ga=GA1.1.240933676.1719523105&semt=sph",
                        "idProduct": "010",
                        "price": 80
                    }
      
      
    ];

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
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("btn", "btn-danger"); 
        deleteButton.onclick = () => {
            sectionToRender.removeChild(card);
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
        updateTotalPrice(-productPrice);
        cartItems = cartItems.filter(item => item.idProduct !== productId || (--quantity) >= 0);
    };

    const updateTotalPrice = (amount) => {
        const currentTotal = parseFloat(totalPriceElement.textContent);
        totalPriceElement.textContent = (currentTotal + amount).toFixed(2);
    };

    const renderPeople = () => {
        people.forEach((person) => {
            const personCard = createPersonCard(person);
            sectionToRender.appendChild(personCard);
        });
    };

    renderPeople();
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