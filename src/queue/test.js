const ds = require("ds-in-js");

function testQueue() {
  const queue = new ds.Queue();
  queue.enqueue(1);
  console.log(queue.dequeue());
}

testQueue();
