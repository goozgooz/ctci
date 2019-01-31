class Graph {
  constructor(){
    this.nodes = {};
  }

  addNode(value){
    if(this.nodes[value]) return console.log('value already exists');
    this.nodes[value] = {};
  }

  removeNode(node){
    if(!this.nodes[node]) return console.log('node does not exist');
    delete this.nodes[node];
    for(let currNode in this.nodes){
      if(this.nodes[currNode][node]) delete this.nodes[currNode][node];
    }
  }

  addEdge(node, edge) {
    if(!this.nodes[node]) return console.log('node does not exist');
    if(this.nodes[node][edge]) return console.log('edge already exsists');
    this.nodes[node][edge] = true;
  }

  removeEdge(node,edge) {
    if(!this.nodes[node]) return console.log('node does not exist');
    if(!this.nodes[node][edge]) return console.log('edge does not exist');
    delete this.nodes[node][edge];
  }
	
  checkRoute(node1, node2) {
    const q1 = [node1];
    const visited1 = {[node1]: true};

    const q2 = [node2];
    const visited2 = {[node2]: true};

    while (q1.length || q2.length) {
      if (q1.length) {
        let current = q1.shift();
        if (current === node2) return true;
        for (let node in this.nodes[current]) {
          if (!visited1[node]) {
            visited1[node] = true;
            q1.push(node);
          }
        }
      }

      if (q2.length) {
        let current = q2.shift();
        if (current === node1) return true;
        for (let node in this.nodes[current]) {
          if (!visited2[node]) {
            visited2[node] = true;
            q2.push(node);
          }
        }
      }
    }
    return false;
  }
}

let graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');

graph.addEdge('D', 'E');

console.log(graph.checkRoute('A', 'C'), true);
console.log(graph.checkRoute('A', 'E'), false);
console.log(graph.checkRoute('B', 'A'), true);
console.log(graph.checkRoute('D', 'E'), true);