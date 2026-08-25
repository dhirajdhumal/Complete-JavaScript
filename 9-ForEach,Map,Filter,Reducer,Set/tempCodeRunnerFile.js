
//real world example
const products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 55000,
        rating: 4.5,
        inStock: true
    },
    {
        id: 2,
        name: "Smartphone",
        category: "Electronics",
        price: 25000,
        rating: 4.3,
        inStock: true
    },
    {
        id: 3,
        name: "Headphones",
        category: "Electronics",
        price: 2500,
        rating: 4.1,
        inStock: true
    },
    {
        id: 4,
        name: "Keyboard",
        category: "Electronics",
        price: 1500,
        rating: 4.0,
        inStock: false
    },
    {
        id: 5,
        name: "Mouse",
        category: "Electronics",
        price: 800,
        rating: 4.2,
        inStock: true
    },
    {
        id: 6,
        name: "T-Shirt",
        category: "Clothing",
        price: 700,
        rating: 4.0,
        inStock: true
    },
    {
        id: 7,
        name: "Jeans",
        category: "Clothing",
        price: 1800,
        rating: 4.4,
        inStock: true
    },
    {
        id: 8,
        name: "Jacket",
        category: "Clothing",
        price: 3500,
        rating: 4.6,
        inStock: false
    },
    {
        id: 9,
        name: "Sneakers",
        category: "Footwear",
        price: 4200,
        rating: 4.5,
        inStock: true
    },
    {
        id: 10,
        name: "Sandals",
        category: "Footwear",
        price: 1200,
        rating: 3.9,
        inStock: true
    },
    {
        id: 11,
        name: "Backpack",
        category: "Accessories",
        price: 1600,
        rating: 4.3,
        inStock: true
    },
    {
        id: 12,
        name: "Watch",
        category: "Accessories",
        price: 5000,
        rating: 4.7,
        inStock: false
    },
    {
        id: 13,
        name: "Wallet",
        category: "Accessories",
        price: 900,
        rating: 4.1,
        inStock: true
    },
    {
        id: 14,
        name: "Table",
        category: "Furniture",
        price: 7500,
        rating: 4.4,
        inStock: true
    },
    {
        id: 15,
        name: "Chair",
        category: "Furniture",
        price: 3500,
        rating: 4.2,
        inStock: true
    },
    {
        id: 16,
        name: "Bookshelf",
        category: "Furniture",
        price: 6000,
        rating: 4.5,
        inStock: false
    },
    {
        id: 17,
        name: "Coffee Maker",
        category: "Appliances",
        price: 4500,
        rating: 4.3,
        inStock: true
    },
    {
        id: 18,
        name: "Mixer Grinder",
        category: "Appliances",
        price: 3200,
        rating: 4.0,
        inStock: true
    },
    {
        id: 19,
        name: "Microwave",
        category: "Appliances",
        price: 9000,
        rating: 4.6,
        inStock: false
    },
    {
        id: 20,
        name: "Water Bottle",
        category: "Accessories",
        price: 600,
        rating: 4.0,
        inStock: true
    }
];

const productInfo = products.map((product) => ({name: product.name, price: product.price}));
console.log(productInfo);
