const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter(({ id }) => ids.some((current) => id === current));
}

module.exports = getSpeciesByIds;
