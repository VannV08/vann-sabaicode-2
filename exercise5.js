// Exercise 5

function filterNonZeroQuantity(products) {
    return products.filter(product => product.quantity > 0);
}

// Example usage:
const productsArray = [
    { name: "Apple", price: 1.99, quantity: 5 },
    { name: "Banana", price: 0.79, quantity: 0 },
    { name: "Orange", price: 1.49, quantity: 3 },
    // Add more products here...
];


const filteredProducts = filterNonZeroQuantity(productsArray);
const productNames = filteredProducts.map(product => product.name).join(", ");
console.log(productNames);
