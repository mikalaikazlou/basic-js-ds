// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    let node = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = node;
    }
    if (node.data < this.rootNode) {
      if (node.left === null) {
        node.left = node.data;
      } else {
        this.add(node);
      }
    }
    else {
      if (node.right === null) {
        node.right = node;
      } else {
        this.add(node);
      }
    }
  }

  has(data) {
    let curData = this.rootNode;
    while (true) {
      if (!curData) {
        return false;
      }
      if (curData.data === data) {
        return true;
      }
      if (curData.data > data) {
        curData = curData.right;
      } else {
        curData = curData.left;
      }
    }
  }


  find(data) {
    let curData = this.rootNode;
    while (true) {
      if (!curData) {
        return null;
      }
      if (curData.data === data) {
        return curData;
      }

      if (curData.data > data) {
        curData = curData.right;
      } else {
        curData = curData.left;
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};