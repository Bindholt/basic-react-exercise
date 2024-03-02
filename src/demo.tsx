let number:number = 123;

interface Person {
    id?: number;
    name: string;
    age: number;
}

const persons:Array<Person> = [];

persons.push({name:"Kurt", age:12});


function createPerson(name:string, age:number):Person{
    return {name, age}
}

const p = createPerson("Kurt", 23);
