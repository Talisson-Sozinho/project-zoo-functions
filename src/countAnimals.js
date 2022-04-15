const { species } = require('../data/zoo_data');

function addAnimalAndQuantity(acc, { name, residents }) {
  const objectAnimals = acc;
  objectAnimals[name] = residents.length;
  return objectAnimals;
}

function countAnimals(animal) {
  if (!animal) {
    return species.reduce(addAnimalAndQuantity, {});
  }
  const { residents } = species.find(({ name }) => name === animal.specie);
  if (!animal.sex) {
    return residents.length;
  }
  return residents.reduce((acc, { sex }) => (animal.sex === sex ? acc + 1 : acc), 0);
}

module.exports = countAnimals;
