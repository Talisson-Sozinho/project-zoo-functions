const { prices } = require('../data/zoo_data');

const verifyAge = (age) => {
  if (age < 18) {
    return 'child';
  }
  if (age < 50) {
    return 'adult';
  }
  return 'senior';
};

function countEntrants(entrants) {
  return entrants.reduce((acc, { age }) => {
    const classification = verifyAge(age);
    acc[classification] += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const { child, adult, senior } = countEntrants(entrants);

  const amountChildValue = child * prices.child;
  const amountAdultValue = adult * prices.adult;
  const amountSeniorValue = senior * prices.senior;

  return amountChildValue + amountAdultValue + amountSeniorValue;
}

module.exports = { calculateEntry, countEntrants };
