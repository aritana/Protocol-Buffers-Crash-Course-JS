const fs = require("fs");


const Schema = require("./employees_pb");
const hussein =  new Schema.Employee();
hussein.setId(1001);
hussein.setSalary(1002);
hussein.setName("Hussein");

const rick =  new Schema.Employee();
rick.setId(1001);
rick.setSalary(1002);
rick.setName("Rick");


const employees = new Schema.Employees();
employees.addEmployees(hussein)
employees.addEmployees(rick)

const bytes = employees.serializeBinary();
console.log("binary" + bytes)

fs.writeFileSync("employeesbinary",bytes)

const employees2 = Schema.Employees.deserializeBinary(bytes);
console.log(employees2.toString());