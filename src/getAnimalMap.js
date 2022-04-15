const { species } = require('../data/zoo_data');

const addLocation = (objOfLocation, location, animal) => {
  const obj = objOfLocation;
  if (obj[location] === undefined) obj[location] = [];
  obj[location].push(animal);
};

const animalMapWithoutNames = () => species.reduce((acc, { location, name }) => {
  addLocation(acc, location, name);
  return acc;
}, {});

const animalMapWithNames = (options) => species.reduce((acc, { location, name, residents }) => {
  const animal = {};
  if (options.sex) {
    const animalFiltered = residents.filter(({ sex: currentSex }) => currentSex === options.sex);
    animal[name] = animalFiltered.map(({ name: nameAnimal }) => nameAnimal);
  } else {
    animal[name] = residents.map(({ name: nameAnimal }) => nameAnimal);
  }
  if (options.sorted) animal[name].sort();
  addLocation(acc, location, animal);
  return acc;
}, {});

function getAnimalMap(options) {
  return (options && options.includeNames) ? animalMapWithNames(options) : animalMapWithoutNames();
}

module.exports = getAnimalMap;
