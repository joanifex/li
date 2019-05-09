function LinkedList(data) {
  this.data = data;
  this.next = null;
}
LinkedList.prototype = {
  append: function(data) {
    const tail = new LinkedList(data);
    let current = this;
    while (current.next) {
      current = current.next;
    }
    current.next = tail;
  },
};

export default LinkedList;
