const { employees } = require('../data/zoo_data');

function getEmployeeById(employeeId) {
  const person = employees.find(({ id }) => id === employeeId);
  return person || {};
}

module.exports = getEmployeeById;
