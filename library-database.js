// Connect to the 'library' database
use library;

// Create 'books' collection
db.createCollection("books");

// Insert book records
db.books.insertMany([
    { title: "The Alchemist", author: "Paulo Coelho", publishedYear: 1988, genre: "Fiction", ISBN: "9780061122415" },
    { title: "Atomic Habits", author: "James Clear", publishedYear: 2018, genre: "Self-Help", ISBN: "9780735211292" },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", publishedYear: 1999, genre: "Programming", ISBN: "9780201616224" },
    { title: "Sapiens", author: "Yuval Noah Harari", publishedYear: 2011, genre: "History", ISBN: "9780062316097" },
    { title: "Clean Code", author: "Robert C. Martin", publishedYear: 2008, genre: "Programming", ISBN: "9780132350884" }
]);

// Retrieve all books
db.books.find().pretty();

// Find books by a specific author
db.books.find({ author: "James Clear" }).pretty();

// Find books published after the year 2000
db.books.find({ publishedYear: { $gt: 2000 } }).pretty();

// Update a book's published year
db.books.updateOne({ ISBN: "9780061122415" }, { $set: { publishedYear: 1990 } });

// Add a rating field to all books
db.books.updateMany({}, { $set: { rating: 4.5 } });

// Delete a book by ISBN
db.books.deleteOne({ ISBN: "9780735211292" });

// Remove all books in a genre
db.books.deleteMany({ genre: "Programming" });
