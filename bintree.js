/**
 * 二叉树
 */
class Node {
	constructor(data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
		this.count = 1;
	}
	
	show() {
		return this.data;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	
	//添加元素
	insert(data) {
		let findData = this.updata(data);
		if (findData) {
			return;
		};
		let n = new Node(data, null, null);
		if (!this.root) {
			return this.root = n;
		}
		let current = this.root;
		let parent;
		while(true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if(current == null) {
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if(current == null) {
					parent.right = n;
					break;
				}
			}
		}
	}
	
	updata(data) {
		let findData = this.find(data);
		if (findData) {
			findData.count++;
		}
		return findData;
	}
	
	// 罗列元素
	inOrder(node) {
		if (node !== null) {
			this.inOrder(node.left);
			console.log(node.show());
			this.inOrder(node.right);
		}
	}
	
	preOrder(node) {
		if (node !== null) {
			console.log(node.show());
			this.preOrder(node.left);
			this.preOrder(node.right);
		}
	}
	
	postOrder(node) {
		if (node !== null) {
			this.preOrder(node.left);
			this.preOrder(node.right);
			console.log(node.show());
		}
	}
	
	//获取最小值
	getMin() {
		let current = this.root;
		while(current.left !== null) {
			current = current.left;
		}
		return current.data;
	}
	
	//获取最大值
	getMax() {
		let current = this.root;
		while(current.right !== null) {
			current = current.right;
		}
		return current.data;
	}
	
	//查找指定值
	find(data) {
		let current = this.root;
		while(current !== null) {
			if (current.data === data) {
				return current;
			} else if (data < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}
		}
		return null;
	}
	
	// 删除值
	remove(data) {
		this.root = this.removeNode(this.root, data);
	}
	
	getSmallest(data) {
		let current = data;
		while(current.left !== null) {
			current = current.left;
		}
		return current;
	}
	
	removeNode(node, data) {
		if (node === null) {
			return null;
		}
		if (data === node.data) {
			if (node.left === null && node.right === null) {
				return null;
			}
			if (node.left === null) {
				return node.right;
			}
			if (node.right === null) {
				return node.left;
			}
			let tempNode = this.getSmallest(node.right);
			node.data = tempNode.data;
			node.right = this.removeNode(node.right, tempNode.data);
			return node;
		}
		if (data < node.data) {
			node.left = this.removeNode(node.left, data);
			return node;
		}
		if (data > node.data) {
			node.right = this.removeNode(node.right, data);
			return node;
		}
	}
	
	
}

let a = new BinarySearchTree();

a.insert(50);
a.insert(50);
a.insert(50);
a.insert(5);
a.insert(15);
a.insert(3);
a.insert(10);
a.insert(60);
a.insert(70);
a.remove(60);
console.log(a);
