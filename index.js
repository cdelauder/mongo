var db_name = 'db'
var collections = ['stuff', 'things']
var db = require('mongojs').connect(db_name, collections)

console.log(db.collection('things'))