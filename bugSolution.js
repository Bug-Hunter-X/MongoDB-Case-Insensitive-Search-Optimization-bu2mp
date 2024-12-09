```javascript
const query = { name: { $regex: 'John', $options: 'i' } }; // Case-insensitive search using MongoDB operator

db.collection('users').find(query).toArray((err, docs) => {
  if (err) throw err;
  console.log(docs); 
});
```
This revised code uses the `$regex` operator with the `$options: 'i'` flag for a case-insensitive search. This is generally more efficient than using a regular expression directly within the query as it allows MongoDB to utilize its internal indexing mechanisms, providing better performance and scalability.