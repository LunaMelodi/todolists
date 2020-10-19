var items = [];
var id = 0;

exports.insertItem = function(item) {
  item.id = id++;

  items.push(item);

  console.log('items in dataAccess.insertItem :>> ', items)
}

exports.getItems = function() {
  console.log('items in dataAccess.getItems :>> ', items);

  return items;
}

exports.deleteItem = function(idToDelete) {
  idToDelete = parseInt(idToDelete);
  console.log('idToDelete :>> ', idToDelete);
  console.log('items before deletion :>> ', items);

  items = items.filter(function(item) {
    console.log('item :>> ', item);
    console.log('item.id !== idToDelete :>> ', item.id !== idToDelete);
    return item.id !== idToDelete;
  })

  console.log('items after deletion :>> ', items);
}