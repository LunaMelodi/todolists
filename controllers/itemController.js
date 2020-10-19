var db = require('../db/dataAccess');

exports.item_list = async function(req, res) {
  try {
    var items = await db.getItems();
    console.log('items :>> ', items);
    res.json({data: items}).status(200);
  }
  catch {
    res.send('Error retrieving items from DB').status(404);
  }
  
}

exports.create_item = async function(req, res) {
  try {
    var success = await db.insertItem(req.body);
    res.send('Post successful!').status(200);
  }
  catch {
    res.send('Error').status(404);
  }
}

exports.delete_item = async function(req, res) {
  try {
    console.log('req.params :>> ', req.params);
    var success = await db.deleteItem(req.params.id);
    res.send('Deletion successful!').status(200);
  }
  catch(error) {
    res.send(error).status(404);
  }
}