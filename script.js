class Human {
    constructor(name,gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Flat {
    constructor() {
        this.residents = [];
    }    

    addResident(resident) { 
        if (resident instanceof Human)      
           return this.residents.push(resident);     
    }
}

class House {    
    constructor(maxNumberOfFlats) {
        this.flats = [];
        this.maxNumberOfFlats=maxNumberOfFlats;
    }

    addFlat(flat) {       
        return this.flats.length < this.maxNumberOfFlats? this.flats.push(flat) :         
        ` The number of flats exceeds the maximum possible number in this building`;
    }
}

const kate = new Human('Kate','female');
const yaroslav = new Human('Yaroslav','male');

console.log(kate);
console.log(yaroslav);

const flat1 = new Flat();
const flat2 = new Flat ();

flat1.addResident(kate);
flat2.addResident(yaroslav);

const house = new House(3);

house.addFlat(flat1);
house.addFlat(flat2);

console.log(house);