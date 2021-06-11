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
            name:'Fresh Bhindi',
            category: 'Vegetables',
            image: '/images/p2.jpg',
            price: 25,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10
        },
        {
            name:'Fresh Beans Broad, 250g',
            category: 'Vegetables',
            image: '/images/p3.jpg',
            price: 21,
            countInStock: 20,
            rating: 4.0,
            numReviews: 10
        },
        {
            name:'Fresh Vegetable Potato (9kg)',
            category: 'Vegetables',
            image: '/images/p7.jpg',
            price: 649,
            countInStock: 0,
            rating: 4.8,
            numReviews: 17
        },
        {
            name:'Fresh Organic Onion Spring, 100g',
            category: 'Vegetables',
            image: '/images/p4.jpg',
            price: 16,
            countInStock: 15,
            rating: 4.5,
            numReviews: 14
        },
        {
            name:'Fresh Chilli, Green, 250g',
            category: 'Vegetables',
            image: '/images/p5.jpg',
            price: 12,
            countInStock: 5,
            rating: 4.5,
            numReviews: 10
        },
        {
            name:'Fresh Carrot-Ooty,500g',
            category: 'Vegetables',
            image: '/images/p6.jpg',
            price: 25,
            countInStock: 12,
            rating: 4.5,
            numReviews: 15
        }
    ]
}

export default data;