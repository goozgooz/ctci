class Queue {
	constructor(){
		this.data = [];
	}

	q(value){
		this.data.push(value);
	}

	dq(){
		return this.data.shift();
	}

	peek(){
		return this.data[0];
	}
}

export default Queue;