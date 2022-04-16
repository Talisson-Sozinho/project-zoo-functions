const { employees } = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');
const getEmployeeByName = require('./getEmployeeByName');
const getEmployeeById = require('./getEmployeeById');

const formatEmployee = (employee) => {
  const species = getSpeciesByIds(...employee.responsibleFor);
  const newEmployee = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: species.map(({ name }) => name),
    locations: species.map(({ location }) => location),
  };
  return newEmployee;
};

function getEmployeesCoverage(objOption) {
  if (!objOption) {
    return employees.map(formatEmployee);
  }
  const { name, id } = objOption;
  const employee = name ? getEmployeeByName(objOption.name) : getEmployeeById(id);
  if (Object.keys(employee).length === 0) throw new Error('Informações inválidas');
  return formatEmployee(employee);
}

module.exports = getEmployeesCoverage;
