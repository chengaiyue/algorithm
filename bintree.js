class Node {
	constructor(data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
	
	show() {
		return this.data;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	
	insert(data) {
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
				}
				break;
			}
		}
	}
	
	inOrde(node) {
		if (node !== null) {
			this.inOrde(node.left);
			console.log(node.show() + ' ');
			this.inOrde(node.right);
		}
	}
}


let a = new BinarySearchTree();

a.insert(8);
a.insert(7);
a.insert(6);
a.insert(11);
a.insert(4);
a.insert(2);
a.insert(0);
a.insert(13);
a.insert(3);
a.insert(5);

console.log(a.root);
