const flashSalesProducts = [
    {
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        oldPrice: 160,
        discount: 40,
        rating: 4.0,
        reviews: 88,
        image: "./img/hero_endframe__cvklg0xk3w6e_large 2.png"
    },
    {
        name: "AK-900 Wired Keyboard",
        price: 960,
        oldPrice: 1160,
        discount: 35,
        rating: 4.0,
        reviews: 75,
        image: "./img/hero_endframe__cvklg0xk3w6e_large 2.png"
    },
    {
        name: "IPS LCD Gaming Monitor",
        price: 370,
        oldPrice: 400,
        discount: 30,
        rating: 5.0,
        reviews: 99,
        image: "./img/hero_endframe__cvklg0xk3w6e_large 2.png"
    },
    {
        name: "S-Series Comfort Chair",
        price: 375,
        oldPrice: 400,
        discount: 25,
        rating: 5.0,
        reviews: 99,
        image: "./img/hero_endframe__cvklg0xk3w6e_large 2.png"
    }
];


const productContainer = document.getElementById('product-grid');

showProduc(flashSalesProducts)

function showProduc(flashSalesProducts) {
    productContainer.innerHTML = ""
    flashSalesProducts.map((a, i) => {
        return (
            productContainer.innerHTML += `
      <div class="product">
            <div class="product-img-content">
            <span class="discount">-${a.discount}%</span>
            <img src="${a.image}" alt="${a.name}">
            </div>
            <div class="about-product">
           <h3>${a.name}</h3>
            <p class="price">$${a.price} <span class="old-price">$${a.name}</span></p>
            <p class="rating">⭐⭐⭐⭐⭐ (${a.reviews})</p>
            <button class="add-product">
            add
            </button>
            </div>
        </div>
            `
        )
    })
}


