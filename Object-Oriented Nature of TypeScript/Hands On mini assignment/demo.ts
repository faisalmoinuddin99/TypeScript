abstract class Department {
    name: string
    vertical: string
    numberOfEmployee: number
    totalFloor: number

    constructor(name: string, vertical: string, numberOfEmployee: number, totalFloor: number) {
        this.name = name
        this.vertical = vertical
        this.numberOfEmployee = numberOfEmployee
        this.totalFloor = totalFloor
        console.log(`The ${name} belongs to the ${vertical} has ${numberOfEmployee} employees and is located on floor ${totalFloor}`);

    }
}

class Tech extends Department {
    constructor(name: string, vertical: string, numberOfEmployee: number, totalFloor: number) {
        super(name, vertical, numberOfEmployee, totalFloor)
    }
    public numberOfTable() {
        return this.numberOfEmployee / 5
    }
}

let backend = new Tech("Sand Box", "Tech", 500, 10)
backend.numberOfTable()