// Create an index on 'author'
db.books.createIndex({ author: 1 });

// Benefits of Indexing
// - Speeds up searches
// - Reduces query execution time
// - Prevents full collection scans
