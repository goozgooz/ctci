// https://www.youtube.com/watch?v=13m9ZCB8gjw

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function lca(root, node1, node2) {
  if (!root) return null;
  if (root === node1 || root === node2) return root;
  let left = lca(root.left, node1, node2);
  let right = lca(root.right, node1, node2);
  if (left && right) return root;
  if (!left && !right) return null;
  return left ? left : right;
}

function findNode(root, data){
  let q = [root];
  while (q.length) {
    let current = q.shift();
    if (current.data === data) return true;
    if (current.left) q.push(current.left);
    if (current.right) q.push(current.right);
  }
  return false;
}

let A = new Node(3);
let B = new Node(6);
let C = new Node(8);
A.left = B;
A.right = C;
let D = new Node(2);
let E = new Node(11);
B.left = D;
B.right = E;
let F = new Node(9);
let G = new Node(5);
E.left = F;
E.right = G;
let H = new Node(13);
let I = new Node(7);
C.right = H;
H.left = I;

console.log(lca(A, B,C) === A);
console.log(lca(A, D, G) === B);
console.log(lca(A, C, I) === C);
console.log(lca(A, D, H) === A);