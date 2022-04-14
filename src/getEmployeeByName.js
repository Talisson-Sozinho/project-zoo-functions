const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const verifyFirstAndLastName = ({ firstName, lastName }) => {
    const isNameOfPerson = firstName === employeeName || lastName === employeeName;
    return isNameOfPerson;
  };
  const person = employees.find(verifyFirstAndLastName);
  return person || {};
}

module.exports = getEmployeeByName;
