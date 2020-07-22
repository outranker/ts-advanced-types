type Admin = {
    name: string
    privileges: string[]
}

type Employee = {
    name: string
    startDate: Date
}

type ElevatedEmployee = Admin & Employee
const e1: ElevatedEmployee = {
    name: "max", 
    privileges: ['create-server'],
    startDate: new Date
}
console.log(e1);

type Combine = string
type Numberic = number | boolean

type Universal = Combine & Numberic
