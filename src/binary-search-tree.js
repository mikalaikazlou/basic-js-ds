// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require("../extensions/list-tree.js");

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
    this.rootNode = addNode(this.rootNode, data);
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return existNode(this.rootNode, data);
    function existNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (node.data < data) {
        return existNode(node.right, data);
      } else {
        return existNode(node.left, data);
      }
    }
  }

  find(data) {
    return existNode(this.rootNode, data);
    function existNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (node.data < data) {
        return existNode(node.right, data);
      } else {
        return existNode(node.left, data);
      }
    }
  }

  remove(data) {
    if (!data) {
      return null;
    }
    this.rootNode = removeNode(this.rootNode, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.right && !node.left) {
          return null;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }

        let minRightNode = node.right;
        while (minRightNode.left) {
          minRightNode = minRightNode.left;
        }
        node.data = minRightNode.data;
        node.right = removeNode(node.right, minRightNode.data);
        return node;
      }
    }
  }

  min() {
    return existNode(this.rootNode);
    function existNode(node) {      
      if (!node) {
        return null;
      }
      if (!node.left) {
        return node.data;
      } else {
        return existNode(node.left);
      } 
    }
  }

  max() {
    return existNode(this.rootNode);
    function existNode(node) {      
      if (!node) {
        return null;
      }
      if (!node.right) {
        return node.data;
      } else {
        return existNode(node.right);
      } 
    }
  }
}

module.exports = {
  BinarySearchTree,
};
