import bcrypt from 'bcryptjs';

const data={
    users:[
        {
            name: 'Priyanka',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products:[
        {
        category: 'veg',
        // count_in_stock: 10,
        image: '/images/okra.jpg',
        name: 'Organic Okra',
        price: 15,
        countinstock: 10,
        reviews: 40,
        },
        {
        category: 'veg',
        // count_in_stock: 10,
         image: '/images/greenpepper.jpg',
         name: 'Organic Greenpepper',
        price: 25,
        countinstock: 10,
        reviews: 40,
        },
        {
        category: 'veg',
        // count_in_stock: 10,
        image: '/images/tomato.jpeg',
        name: 'Organic Tomatoes',
        price: 15,
        countinstock: 10,
        reviews: 40,
        },
        {
        category: 'veg',
        // count_in_stock: 0,
        image: '/images/yellowonion.jpeg',
        name: 'Yellow Onion',
        price: 35,
        countinstock: 10,
        reviews: 40,
        },
        {
        category: 'veg',
        image: '/images/spinach-500x500.jpeg',
        name: 'Organic Spinach',
        price: 25,
        countinstock: 10,
        reviews: 40,
        },
        {
        category: 'veg',
        image: '/images/carrot.jpg',
        name: 'Organic Carrot',
        price: 15,
        countinstock: 10,
        reviews: 40,
        },
        {

            category: 'fruit',
            image: '/images/apple.jpg',
            name: 'Organic Apple',
            price: 100,
            countinstock: 10,
            reviews:30,

        },
        {

            category: 'fruit',
            image: '/images/kiwi.jpg',
            name: 'Kiwi',
            price: 60,
            countinstock: 10,
            reviews:30,

        },
        {

            category: 'fruit',
            image: '/images/dragon.jpg',
            name: 'Organic Dragon Fruit',
            price: 50,
            countinstock: 10,
            reviews:30,

        },
        {
    
            category: 'fruit',
            image: '/images/Strawberry.jpg',
            name: 'Strawberries',
            price: 40,
            countinstock: 10,
            reviews:30,

        },
        {
    
            category: 'fruit',
            image: '/images/watermelon.jpg',
            name: 'Watermelon',
            price: 30,
            countinstock: 10,
            reviews:30,

        },
        {
    
            category: 'fruit',
            image: '/images/banana.jpg',
            name: 'Organic Banana',
            price: 40,
            countinstock: 10,
            reviews:30,

        },
        {
    
            category: 'meat',
            image: '/images/chicken.jpeg',
            name: 'Whole Chicken',
            price: 180,
            countinstock: 10,
            reviews:30,

        },
        {
    
            category: 'meat',
            image: '/images/lamb.jpg',
            name: 'Fresh Lamb',
            price: 100,
            countinstock: 10,
            reviews:30,

        },
        {
    
            category: 'meat',
            image: '/images/fish.jpg',
            name: 'Fish',
            price: 120,
            countinstock: 10,
            reviews:30,

        },
        {
    
            category: 'meat',
            image: '/images/prawns.jpeg',
            name: 'Peeled Prawns',
            price: 80,
            countinstock: 15,
            reviews:30,

        },
        {
    
            category: 'meat',
            image: '/images/mutton.jpg',
            name: 'Muton',
            price: 600,
            countinstock: 15,
            reviews:30,

        },
        {
    
            category: 'meat',
            image: '/images/Beef-loin.jpg',
            name: 'Beef',
            price: 120,
            countinstock: 10,
            reviews:30,

        },
    ],
};


export default data;