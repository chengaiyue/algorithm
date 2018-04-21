class Node {
	constructor(data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
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
}


let a = new BinarySearchTree();

a.insert(4);
a.insert(8);

console.log(a);
