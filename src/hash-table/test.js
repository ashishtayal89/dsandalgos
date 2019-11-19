const ds = require("ds-in-js");

function testHashTable() {
  const hTable = new ds.HashTable();
  hTable.insert("name", "Ashish");
  hTable.getAll();
  console.log(hTable.hash("name"));
}

testHashTable();
