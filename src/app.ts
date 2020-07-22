type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
const e1: ElevatedEmployee = {
  name: "max",
  privileges: ["create-server"],
  startDate: new Date(),
};
// console.log(e1);

type Combine = string | number;
type Numberic = number | boolean;

type Universal = Combine & Numberic;

let add = (a: Combine, b: Combine) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

type UnknownEmployee = Employee | Admin;

let printEmployeeInformation = (emp: UnknownEmployee) => {
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("startDate:", emp.startDate);
  }
  console.log("Name: " + emp.name);
};

// printEmployeeInformation(e1)

class Car {
  drive() {
    console.log("driving");
  }
}
class Truck {
  drive() {
    console.log("driving a truck");
  }

  loadCargo(amount: number) {
    console.log("loading cargo " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

let useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1000);
  }
};

// useVehicle(v1)
// useVehicle(v2)

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}
type Animal = Bird | Horse;

let moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
};

moveAnimal({ type: 'horse', runningSpeed: 23 });
