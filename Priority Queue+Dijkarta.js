class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enque(value, priority) {
        this.values.push({
            value,
            priority
        });
        this.sort();
    }

    deque() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a,b)=>{
            a.priority - b.priority
        }
        );
    }
}

class weightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({
            node: vertex2,
            weight
        });
        this.adjacencyList[vertex2].push({
            node: vertex1,
            weight
        });
    }

    djikarta(start, end) {
        const distance = {}
          , previous = {}
          , nodes = new PriorityQueue();
        for (var elem in this.adjacencyList) {
            if (elem === start) {
                nodes.enque(elem, 0);
                distance[elem] = 0;
                previous[elem] = null;
            } else {
                nodes.enque(elem, Infinity);
                distance[elem] = Infinity;
                previous[elem] = null;
            }
            // distance[elem] = elem === start ?  nodes.enque(elem,0),0:nodes.enque(elem,Infinity),Infinity;
        }
        while (true) {
            var elem = nodes.deque();
            if (elem) {
                for (var neighbour in this.adjacencyList[elem.value]) {
                    var candidate = distance[elem.value] + this.adjacencyList[elem.value][neighbour].weight;
                    if (candidate < distance[this.adjacencyList[elem.value][neighbour].node]) {
                        distance[this.adjacencyList[elem.value][neighbour].node] = candidate;
                        previous[this.adjacencyList[elem.value][neighbour].node] = elem;
                        nodes.enque(this.adjacencyList[elem.value][neighbour].node, candidate);
                    }
                }
            } else {
                console.log('going to break');
                break;

            }
        }
        var star = end;
        var str = `${start} <=`
        while (previous[star].value !== start) {
            console.log('====>>', end, star);
            str += `${previous[star].value} <=`;
            star = previous[star].value;
        }
        str += `${end}`
        return str;

    }
}

var graph = new weightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
graph.djikarta("A", "E");
