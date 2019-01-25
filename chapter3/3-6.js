/**
 * 3.6
 * Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first
 * out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
 * or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
 * that type). They cannot select which specific animal they would like. Create the data structures to
 * maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
 * and dequeueCat. You may use the built-in Linked List data structure.
 */
 
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


class AnimalShelter {
	constructor() {
		this.dogs = new Queue();
		this.cats = new Queue();
		this.allPets = new Queue();
		this.holder = new Queue();
	}

	q(pet) {
		this.allPets.q(pet);
		pet.type === 'dog' ? this.dogs.q(pet) : this.cats.q(pet);
	}
	

	dqAny() {
		let pet = this.allPets.dq();
		pet.type === 'dog' ? this.dogs.dq() : this.cats.dq();
		return pet;
	}

	dqSpecific(type) {
		let adopted = type === 'dog' ? this.dogs.dq() : this.cats.dq();
		
		let current = this.allPets.peek();
		while (current.type !== type) {
			this.holder.q(this.allPets.dq());
			current = this.allPets.peek();
		}
		
		this.allPets.dq();

		while (this.allPets.peek()) {
			this.holder.q(this.allPets.dq());
		}

		while (this.holder.peek()){
			this.allPets.q(this.holder.dq());
		}

		return adopted;
	}
}

let shelter = new AnimalShelter();
shelter.q({type:'dog', name: 'George'})
shelter.q({type: 'cat', name: 'Link'})
shelter.q({type: 'dog', name: 'Pockets'})
shelter.q({type: 'cat', name: 'Buster'})
shelter.q({type: 'cat', name: 'Emma'})
console.log(shelter.cats.data.length === 3);
console.log(shelter.dogs.data.length === 2);
console.log(shelter.dqSpecific('cat'), 'Should be Link')
console.log(shelter.dqAny(), 'Should be George')
console.log(shelter.dqSpecific('cat'), 'Should be Buster')
