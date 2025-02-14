// Users Collection
db.users.insertOne({
    _id: ObjectId(),
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    address: "123 Street, Nairobi",
    orders: [ObjectId("order_id_here")]
});

// Products Collection
db.products.insertOne({
    _id: ObjectId(),
    name: "Laptop",
    price: 750,
    category: "Electronics",
    stock: 20
});

// Orders Collection
db.orders.insertOne({
    _id: ObjectId(),
    userId: ObjectId("user_id_here"),
    products: [{ productId: ObjectId("product_id_here"), quantity: 2 }],
    totalAmount: 1500,
    orderDate: new Date()
});
