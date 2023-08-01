
const fs = require ("fs")
const employees = [];

employees.push({
  name: "Hussein",
  salary: 1000,
  id: 1
});

const ahmed = {
  name: "Ahmed",
  salary: 500,
  id: 2
};

employees.push(ahmed);

employees.push({
  name: "Rick",
  salary: 1000,
  id: 3
})

fs.writeFileSync("jsondata.json",JSON.stringify(employees));
