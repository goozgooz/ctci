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
 
 function buildGraph(projects, dependencies) {
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
	let graph = buildGraph(projects,dependencies);
	let visited = {};
	let stack = [];
	console.log({graph})
	for (let node in graph) {
		if (!visited[node]) {
			// console.log('normal node: ', node)
			topSortUtil(node, visited, stack, graph);
		}
	}

	return stack;
}

function topSortUtil(node,visited,stack, graph) {
	visited[node] = true;
	// console.log('util node: ', node)
	for (let child in graph[node]) {
		if (!visited[child]) {
			topSortUtil(child, visited, stack,graph);
		}
	}
	stack.push(node)
	// console.log(stack);
}


const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
const dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];

console.log(buildOrder(projects,dependencies));
