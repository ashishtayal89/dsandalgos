const ds = require("ds-in-js");

function testLinkedList() {
  const lList = new ds.LinkedList([1, 2, 3, 4, 5]);
  console.log(lList.getElementAtEnd());
  console.log(lList.getElementAtEnd());
}

testLinkedList();
