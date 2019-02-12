// https://www.youtube.com/watch?v=13m9ZCB8gjw

// LCA binary tree
function lca(root, node1, node2) {
  if (!root) return null;
  if (root === node1 || root === node2) return root;
  let left = lca(root.left, node1 , node2);
  let right = lca(root.right, node1, node2);
  if (left && right) return root;
  if (!left && !right) return null;
  return left ? left : right;
}


