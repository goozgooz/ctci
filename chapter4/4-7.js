// https://www.youtube.com/watch?v=ddTC4Zovtbc&feature=youtu.be


/**
 * 2.7
 * Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of
 * projects, where the second project is dependent on the first project). All of a project's dependencies
 * must be built before the project is. Find a build order that will allow the projects to be built. If there
 * is no valid build order, return an error.
 * EXAMPLE
 * Input:
 * projects: a, b, c, d, e, f
 * dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
 * Output: f, e, a, b, d, c
 */
 
 //for every directed edge uv, vertex u comes before v in the ordering.
 

function createGraph(projects, dependencies) {
	let graph = {};
	
	for (let p of projects) {
		graph[p] = {};
	}

	for (let d of dependencies) {
		graph[d[0]][d[1]] = true;
	}

	return graph;
}

function buildOrder(projects, dependencies) {
	let graph = createGraph(projects, dependencies);
	let order = [];
	let visited = {};

	for (let node in graph) {
		if (!visited[node]) {
			topSort(node, order, visited, graph);
		}
	}

	return order;
}

function topSort(node, order, visited, graph) {
	visited[node] = true;
	for (let d in graph[node]) {
		if (!visited[d]) {
			topSort(d, order, visited, graph);
		}
	}
	order.unshift(node);
}
	


const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
const dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];

console.log(buildOrder(projects,dependencies));
