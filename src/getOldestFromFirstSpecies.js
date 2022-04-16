const { employees } = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

const getOldestAnimalById = (id) => {
  const [{ residents }] = getSpeciesByIds(id);
  return residents.reduce((lastOldestAnimal, currAnimal) => {
    const oldestAnimal = lastOldestAnimal.age > currAnimal.age ? lastOldestAnimal : currAnimal;
    return oldestAnimal;
  });
};

function getOldestFromFirstSpecies(id) {
  const { responsibleFor: [firstSpecieId] } = employees.find(({ id: currId }) => currId === id);
  const oldestAnimal = getOldestAnimalById(firstSpecieId);
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
