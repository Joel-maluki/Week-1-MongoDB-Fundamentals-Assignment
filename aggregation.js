// Find total books per genre
db.books.aggregate([ { $group: { _id: "$genre", count: { $sum: 1 } } } ]);

// Average published year
db.books.aggregate([ { $group: { _id: null, avgYear: { $avg: "$publishedYear" } } } ]);

// Find top-rated book
db.books.find().sort({ rating: -1 }).limit(1);
